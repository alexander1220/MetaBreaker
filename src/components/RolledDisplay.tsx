"use client";
import { GenerationContext } from "./providers/GenerationProviderReducer";
import { Lane } from "./types/enums/Lane";
import { Tag } from "./types/enums/Tag";
import { boots } from "./types/items/Boots";
import { legendaryItems } from "./types/items/Legendaries";
import { mythics } from "./types/items/Mythics";
import { keystones, Keystone } from "./types/Keystones";
import { runes } from "./types/Runes";
import { starterItems } from "./types/StarterItems";
import { summonerSpells, SummonerSpell } from "./types/Summoners";
import * as random from "random-seed";
import { RollingOptions } from "app/[[...options]]/page";
import ShareButton from "./ShareButton";
import { useContext, useEffect } from "react";
import { useImmer } from "use-immer";
import { ChampionSelectionContext } from "./providers/ChampionSelectionProvider";
import { Champion } from "./types/Champions";
import { Item } from "./types/Item";
import { HStack, Heading, SimpleGrid, VStack, Image, Flex, Spacer, Button, Switch, Tooltip, Skeleton } from "@chakra-ui/react";
import ImageWithLoading from "./images/ImageWithLoading";

const lanesWithoutFill = Object.values(Lane).filter(l => l !== Lane.Fill);
const supportTags = [Tag.Mage_Support, Tag.Assassin_Support, Tag.Enchanter_Support, Tag.Tank_Support];

let rnd: random.RandomSeed;

export default function RolledDisplay({ rollingOptions }: { rollingOptions?: RollingOptions }) {
    const {
        updateRolledChampion,
        updateRolledItems,
        updateRolledKeystone,
        updateRolledLane,
        updateRolledRune,
        updateRolledStarterItem,
        updateRolledSummonerSpells,
        updateRolledTag,
        rolledBuild,
        selectedLanes
    } = useContext(GenerationContext);
    const { champions } = useContext(ChampionSelectionContext);

    const [lastUsedSeed, updateLastUsedSeed] = useImmer<number>(0);
    const [lastUsedLanes, updateLastUsedLanes] = useImmer<Lane[]>([]);

    function rollBuild(options?: RollingOptions) {
        let selectedSupportChamps,
            rolledLane,
            rolledChampion: null | Champion = null,
            rolledTag,
            rolledStarterItem,
            rolledSummonerSpells,
            rolledItems,
            rolledKeystone,
            rolledRune,
            lanesForRolling,
            seed,
            selectedChampions = champions.filter(c => c.selected);
        //map to required type

        if (options) {
            lanesForRolling = Array.from(options.lanes).map(([lane, selected]) => ({ lane, selected })).filter(r => r.selected && r.lane !== Lane.Fill).map(o => o.lane);
            seed = options.seed;
            rolledChampion = selectedChampions.find(c => c.id === options.champId)!;
        }
        else {
            lanesForRolling = selectedLanes.filter(l => l.selected).map(l => l.lane).filter(l => l !== Lane.Fill);
            seed = Math.fround(Math.random());
        }
        rnd = random.create(seed.toString());

        if (selectedLanes.length === 0) {
            alert("You must select at least one lane");
        }

        selectedSupportChamps = getSelectedSupportChamps(selectedChampions);
        rolledLane = rollLane(selectedSupportChamps, lanesForRolling);
        updateRolledLane(rolledLane);

        let rollChampionResult = rollChampion(selectedChampions, selectedSupportChamps, rolledLane); //roll even if we already have a champion, to make sure the rnd is advanced
        rolledChampion = rolledChampion ?? rollChampionResult as Champion;
        updateRolledChampion(rolledChampion);
        rolledTag = rollTag(rolledChampion, rolledLane);
        updateRolledTag(rolledTag);
        rolledStarterItem = rollStarterItem(rolledLane, rolledTag);
        updateRolledStarterItem(rolledStarterItem);
        rolledSummonerSpells = rollSummonerSpells(rolledChampion, rolledLane, rolledTag);
        updateRolledSummonerSpells(rolledSummonerSpells);
        rolledItems = rollItems(rolledChampion, rolledLane, rolledTag);
        updateRolledItems(rolledItems);
        rolledKeystone = rollKeyStone(rolledTag);
        updateRolledKeystone(rolledKeystone);
        rolledRune = rollRune(rolledTag, rolledKeystone);
        updateRolledRune(rolledRune);

        updateLastUsedLanes(lanesForRolling);
        updateLastUsedSeed(seed);
    }

    useEffect(() => {
        rollBuild(rollingOptions);
    }, [rollingOptions]);

    const laneMappings = new Map([
        [Lane.Top, "top"],
        [Lane.Jungle, "jungle"],
        [Lane.Mid, "middle"],
        [Lane.Adc, "bottom"],
        [Lane.Support, "utility"],
    ]);

    return (
        <>
            <VStack align={'left'} w={'100%'}>
                <Heading>{rolledBuild.champion.name}, {rolledBuild.tag}</Heading>
                <HStack spacing={6}>
                    <ImageWithLoading tooltip={rolledBuild.champion.name} boxSize='128px' src={`https://ddragon.leagueoflegends.com/cdn/13.11.1/img/champion/${rolledBuild.champion.normalizedName}.png`} alt={rolledBuild.champion.name} />
                    <VStack align={'left'}>
                        <Flex>
                            <ImageWithLoading tooltip={rolledBuild.starterItem.name} boxSize='60px' src={`https://ddragon.leagueoflegends.com/cdn/13.11.1/img/item/${rolledBuild.starterItem.id}.png`} alt={rolledBuild.starterItem.name} />
                            <Spacer />
                            <ImageWithLoading tooltip={rolledBuild.lane} boxSize='60px' src={`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-${laneMappings.get(rolledBuild.lane)}-blue.png`} alt={rolledBuild.lane} />
                        </Flex>
                        <SimpleGrid columns={{ base: 3, md: 6 }} spacing={2}>
                            {rolledBuild.items.map((item, index) => {
                                return (
                                    <ImageWithLoading tooltip={item.name} key={index} boxSize='60px' src={`https://ddragon.leagueoflegends.com/cdn/13.11.1/img/item/${item.id}.png`} alt={item.name} />
                                )
                            })}
                        </SimpleGrid>
                    </VStack>
                </HStack>
                <Flex>
                    <VStack align={'left'}>
                        <ImageWithLoading tooltip={rolledBuild.summonerSpells[1]?.name} boxSize='60px' src={`https://ddragon.leagueoflegends.com/cdn/13.11.1/img/spell/${rolledBuild.summonerSpells[1]?.fullName}.png`} alt={rolledBuild.summonerSpells[1]?.name} />
                        <ImageWithLoading tooltip={rolledBuild.summonerSpells[0]?.name} boxSize='60px' src={`https://ddragon.leagueoflegends.com/cdn/13.11.1/img/spell/${rolledBuild.summonerSpells[0]?.fullName}.png`} alt={rolledBuild.summonerSpells[0]?.name} />
                    </VStack>
                    <Spacer />
                    <HStack align={'right'}>
                        <ImageWithLoading tooltip={rolledBuild.keystone.name} boxSize='60px' src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/${rolledBuild.keystone.iconPath}.png`} alt={rolledBuild.keystone.name} />
                        <ImageWithLoading tooltip={rolledBuild.rune.name} boxSize='30px' src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/${rolledBuild.rune.iconFileName}.png`} alt={rolledBuild.rune.name} />
                    </HStack>
                </Flex>
                <HStack>
                    <Button w={'75%'} onClick={() => rollBuild()}>Roll Again</Button>
                    <ShareButton path={getUrlPath()} />
                </HStack>
            </VStack>
        </>
    );

    function getUrlPath(): string {
        const buffer = new Uint8Array(6);
        const view = new DataView(buffer.buffer);
        let lanebyte = 0x0;

        for (let i = 0; i < lanesWithoutFill.length; i++) {
            lanebyte |= +lastUsedLanes.includes(lanesWithoutFill[i]) << i;
        }

        view.setInt8(0, lanebyte);
        view.setFloat32(1, lastUsedSeed);
        view.setUint8(5, rolledBuild.champion.id);

        const base64 = btoa(String.fromCharCode.apply(null, Array.from(buffer)));
        const base64url = base64.replace('+', '-').replace('/', '_').replace(/=+$/, '');

        return base64url;
    }
}


function rollLane(selectedSupportChamps: Champion[], selectedLanes: Lane[]) {
    let availableselectedLanes = selectedSupportChamps.length > 0 ? selectedLanes : selectedLanes.filter(lane => lane !== Lane.Support);

    if (availableselectedLanes.length === 0) {
        alert('There is no champion for this specific role selected. Don\'t troll too hard!');
        return;
    }

    return getRandomElement(availableselectedLanes);
}

function rollChampion(selectedChampions: Champion[], selectedSupportChamps: Champion[], rolledLane: Lane) {
    if (rolledLane === Lane.Support) {
        return getRandomElement(selectedSupportChamps);
    }
    return getRandomElement(selectedChampions);
}

function rollTag(rolledChampion: Champion, rolledLane: Lane) {
    if (rolledLane === Lane.Support) {
        return getRandomElement(rolledChampion.tags.filter(tag => supportTags.includes(tag)));
    }
    return getRandomElement(rolledChampion.tags.filter(tag => !supportTags.includes(tag)));
}

function rollStarterItem(rolledLane: Lane, rolledTag: Tag) {
    return getRandomElement(starterItems.filter(item => item.tags.includes(rolledLane === Lane.Jungle ? Tag.Jungle : rolledTag)));
}

function rollSummonerSpells(rolledChampion: Champion, rolledLane: Lane, rolledTag: Tag) {
    let possibleSummonerSpells = summonerSpells.filter(spell => spell.name !== 'Flash' && spell.tags.includes(rolledTag));
    let rolledSummonerSpells = [] as SummonerSpell[];
    rolledSummonerSpells.push(rolledLane === Lane.Jungle ?
        summonerSpells.find(spell => spell.name === 'Smite')! :
        getRandomElement(possibleSummonerSpells));

    if (!isYuumiSupport(rolledChampion, rolledLane)) {
        rolledSummonerSpells.push(summonerSpells.find(spell => spell.name === 'Flash')!);
    }
    else {
        rolledSummonerSpells.push(getRandomElement(possibleSummonerSpells.filter(spell => spell !== rolledSummonerSpells[0])));
    }
    return rolledSummonerSpells;
}

function getSelectedSupportChamps(selectedChampions: Champion[]) {
    return selectedChampions.filter(c => c.tags.some(tag => supportTags.includes(tag)));
}

function getRandomElement(items: any[]) {
    return items[rnd(items.length)];
}

function isYuumiSupport(rolledChampion: Champion, rolledLane: Lane) {
    return rolledChampion.name === 'Yuumi' && rolledLane === Lane.Support;
}

// write the method to generate all 6 items (mythic, boots, 4 items)

function rollItems(rolledChampion: Champion, rolledLane: Lane, rolledTag: Tag): Item[] {
    let items = [] as Item[];

    //roll mythic
    items.push(getRandomElement(mythics.filter(item => item.tags.includes(rolledTag))));

    //roll boots if not cassiopeia or yuumi support
    if (!(rolledChampion.name === "Cassiopeia" || isYuumiSupport(rolledChampion, rolledLane))) {
        items.push(getRandomElement(boots.filter(item => item.tags.includes(rolledTag))));
    }

    //roll the rest of the items
    while (items.length < 6) {
        items.push(getRandomElement(legendaryItems.filter(item =>
            !getBlockedItemIds(items).includes(item.id) &&
            !items.includes(item) &&
            item.tags.includes(rolledTag)))
        );
    }

    return items;
}

function rollKeyStone(rolledTag: Tag) {
    return getRandomElement(keystones.filter(keystone => keystone.tags.includes(rolledTag)));
}

function rollRune(rolledTag: Tag, rolledKeyStone: Keystone) {
    return getRandomElement(runes.filter(rune => !rolledKeyStone.blocking?.includes(rune.id) && rune.tags.includes(rolledTag)));
}

function getBlockedItemIds(items: Item[]) {
    return items.map(item => item.blocking).flat().filter(Number);
}