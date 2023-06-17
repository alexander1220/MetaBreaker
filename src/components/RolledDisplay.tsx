"use client";
import { GenerationContext } from "./providers/GenerationProviderReducer";
import { Lane } from "./types/enums/Lane";
import { Tag } from "./types/enums/Tag";
import { boots } from "./types/items/Boots";
import { legendaryItems } from "./types/items/Legendaries";
import { mythics } from "./types/items/Mythics";
import { keystones, Keystone } from "./types/Keystones";
import { Rune, runes } from "./types/Runes";
import { StarterItem, starterItems } from "./types/StarterItems";
import { summonerSpells, SummonerSpell } from "./types/Summoners";
import * as random from "random-seed";
import ShareButton from "./ShareButton";
import { useContext, useEffect, useRef, useState } from "react";
import { useImmer } from "use-immer";
import { ChampionSelectionContext } from "./providers/ChampionSelectionProvider";
import { Champion } from "./types/Champions";
import { Item } from "./types/Item";
import { HStack, Heading, SimpleGrid, VStack, Flex, Button, Skeleton, SkeletonText, Image, Box, keyframes } from "@chakra-ui/react";
import ImageWithLoading from "./images/ImageWithLoading";
import { ddragonUrl } from "./types/Constants";
import { rollBuild } from "./utils/BuildRoller";
import { RollingOptions } from "./utils/RollingOptionsReader";
import SelectableChampion from "./SelectableChampion";
import { useAnimate } from "framer-motion";
import { CasinoGeneralDrawer, CasinoLaneDrawer, CasinoNameDrawer } from "./CasinoDrawer";

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
    const [casinoChampNames, updateCasinoChampNames] = useImmer<string[]>([]);
    const [casinoChamps, updateCasinoChamps] = useImmer<Champion[]>([]);
    const [casinoItems, updateCasinoItems] = useImmer<Item[][]>([]);
    const [casinoSummoners, updateCasinoSummoners] = useImmer<SummonerSpell[][]>([]);
    const [casinoStarter, updateCasinoStarter] = useImmer<Item[]>([]);
    const [casinoRune, updateCasinoRune] = useImmer<Rune[]>([]);
    const [casinoKeystone, updateCasinoKeystone] = useImmer<Keystone[]>([]);
    const [casinoLane, updateCasinoLane] = useImmer<Lane[]>([]);

    let lastChampName: string;
    let lastChamp: Champion;
    let lastItems: Item[];
    let lastSumSpells: SummonerSpell[];
    let lastStarter: Item;
    let lastRune: Rune;
    let lastKeystone: Keystone;
    let lastLane: Lane;
    function roll(options?: RollingOptions) {
        if (selectedLanes.length === 0) {
            alert("You must select at least one lane!");
            return;
        }

        lastChamp = rolledBuild.champion;
        lastChampName = `${rolledBuild.champion?.name}, ${rolledBuild.tag}`;
        lastItems = rolledBuild.items;
        lastSumSpells = rolledBuild.summonerSpells;
        lastStarter = rolledBuild.starterItem;
        lastKeystone = rolledBuild.keystone;
        lastRune = rolledBuild.rune;
        lastLane = rolledBuild.lane;
        let build = rollBuild(champions.filter(c => c.selected), options, selectedLanes.filter(l => l.selected).map(l => l.lane).filter(l => l !== Lane.Fill));

        updateRolledLane(build.lane);
        updateRolledChampion(build.champion);
        updateRolledTag(build.tag);
        updateRolledStarterItem(build.starterItem);
        updateRolledSummonerSpells(build.summonerSpells);
        updateRolledItems(build.items);
        updateRolledKeystone(build.keystone);
        updateRolledRune(build.rune);

        updateLastUsedLanes(build.lanesForRolling);
        updateLastUsedSeed(build.seed);

        let tempChampName = lastChampName ? [lastChampName] : [];
        let tempCasinoChamps = lastChamp ? [lastChamp] : [];
        let tempItems: Item[][] = [];
        let tempSummoners: SummonerSpell[][] = [];
        let tempStarter = lastStarter ? [lastStarter] : [];
        let tempRune = lastRune ? [lastRune] : [];
        let tempKeystone = lastKeystone ? [lastKeystone] : [];
        let tempLane = lastLane ? [lastLane] : [];

        tempChampName.push(...RandomName(6 - tempCasinoChamps.length), `${build.champion?.name}, ${build.tag}`);
        tempCasinoChamps.push(...RandomFrom<Champion>(4 - tempCasinoChamps.length, champions, [lastChamp, build.champion]), build.champion);
        for (let i = 0; i < lastItems.length; i++) {
            tempItems.push(lastItems[i] ? [lastItems[i]] : []);
            tempItems[i].push(...RandomItems(i, 4 - tempItems[i].length, [lastItems[i], build.items[i]]), build.items[i]);
        }

        for (let i = 0; i < lastSumSpells.length; i++) {
            tempSummoners.push(lastSumSpells[i] ? [lastSumSpells[i]] : []);
            tempSummoners[i].push(...RandomFrom<SummonerSpell>(4 - tempSummoners[i].length, summonerSpells, [lastSumSpells[i], build.summonerSpells[i]]), build.summonerSpells[i]);
        }

        tempStarter.push(...RandomFrom<StarterItem>(4 - tempStarter.length, starterItems, [lastStarter, build.starterItem]), build.starterItem);
        tempRune.push(...RandomFrom<Rune>(4 - tempRune.length, runes, [lastRune, build.rune]), build.rune);
        tempKeystone.push(...RandomFrom<Keystone>(4 - tempKeystone.length, keystones, [lastKeystone, build.keystone]), build.keystone);
        tempLane.push(...RandomFrom<Lane>(4 - tempLane.length, lanesWithoutFill, [lastLane, build.lane]), build.lane);

        updateCasinoChampNames(tempChampName);
        updateCasinoChamps(tempCasinoChamps);
        updateCasinoItems(tempItems);
        updateCasinoSummoners(tempSummoners);
        updateCasinoStarter(tempStarter);
        updateCasinoRune(tempRune);
        updateCasinoKeystone(tempKeystone);
        updateCasinoLane(tempLane);
    }

    function tryRoll() {
        if (!selectedLanes.some(lane => lane.selected && lane.lane != Lane.Fill)) {
            alert('Select a lane first!');
            return;
        }

        if (!champions.some(c => c.selected)) {
            alert('Select a champion first!');
            return;
        }

        roll();
    }

    useEffect(() => {
        roll(rollingOptions);
    }, [rollingOptions]);

    const laneMappings = new Map([
        [Lane.Top, "top"],
        [Lane.Jungle, "jungle"],
        [Lane.Mid, "middle"],
        [Lane.Adc, "bottom"],
        [Lane.Support, "utility"],
    ]);

    // function RandomChamps(amount: number, exclude?: Champion[]) {
    //     let res: Champion[] = [];
    //     while (res.length < amount) {
    //         var rand = Math.floor(Math.random() * champions.length);
    //         if (res.indexOf(champions[rand]) == -1 && (!exclude || exclude.indexOf(champions[rand]) == -1))
    //             res.push(champions[rand]);
    //     }
    //     return res;
    // }
    function RandomFrom<T>(amount: number, pool: T[], exclude?: T[]) {
        let res: T[] = [];
        while (res.length < amount) {
            var rand = Math.floor(Math.random() * pool.length);
            if (res.indexOf(pool[rand]) == -1 && (!exclude || exclude.indexOf(pool[rand]) == -1))
                res.push(pool[rand]);
        }
        return res;
    }

    function RandomName(amount: number) {
        let res: string[] = [];
        while (res.length < amount) {
            var randChamp = Math.floor(Math.random() * champions.length);
            var randTag = Math.floor(Math.random() * Object.keys(Tag).length);
            res.push(`${champions[randChamp].name}, ${Object.values(Tag)[randTag]}`);
        }
        return res;
    }

    function RandomItems(index: number, amount: number, exclude?: Item[]) {
        let res: Item[] = [];
        let itemPool = legendaryItems;
        if (index === 0)
            itemPool = mythics;
        else if (index === 1)
            itemPool = boots;

        while (res.length < amount) {
            var rand = Math.floor(Math.random() * itemPool.length);
            if (res.indexOf(itemPool[rand]) == -1 && (!exclude || exclude.indexOf(itemPool[rand]) == -1))
                res.push(itemPool[rand]);
        }

        return res;
    }

    return (
        <>
            <HStack>

            </HStack>
            <VStack align={'left'} w={'100%'} mt={'10'} spacing={4}>
                <CasinoNameDrawer casinoItems={casinoChampNames} />
                {/* <Skeleton isLoaded={rolledBuild.champion !== null}>
                    <Heading>{rolledBuild.champion?.name}, {rolledBuild.tag}</Heading>
                </Skeleton> */}
                <HStack spacing={6}>
                    <CasinoGeneralDrawer casinoItems={casinoChamps} size={128} url={`${ddragonUrl}/champion/`} propertyName="normalizedName" />
                    {/*<ImageWithLoading tooltip={rolledBuild.champion?.name} boxSize='128px' src={`${ddragonUrl}/champion/${rolledBuild.champion?.normalizedName}.png`} alt={rolledBuild.champion?.name} />*/}
                    <VStack align={'left'}>
                        <Flex>
                            <CasinoGeneralDrawer casinoItems={casinoStarter} size={60} url={`${ddragonUrl}/item/`} propertyName="id" />
                            {/*<ImageWithLoading tooltip={rolledBuild.starterItem.name} boxSize='60px' src={`${ddragonUrl}/item/${rolledBuild.starterItem.id}.png`} alt={rolledBuild.starterItem.name} />*/}
                        </Flex>
                        <SimpleGrid columns={{ base: 3, md: 6 }} spacing={2}>
                            {casinoItems.map((items, index) =>
                                <CasinoGeneralDrawer key={index} casinoItems={items} size={60} url={`${ddragonUrl}/item/`} propertyName="id" />
                            )}
                            {/*rolledBuild.items.map((item, index) => {
                                return (
                                    <ImageWithLoading tooltip={item?.name} key={index} boxSize='60px' src={`${ddragonUrl}/item/${item?.id}.png`} alt={item?.name} />
                                )
                            })*/}
                        </SimpleGrid>
                    </VStack>
                    <VStack align={'right'}>
                        {casinoSummoners.map((sums, index) =>
                            <CasinoGeneralDrawer key={index} casinoItems={sums} size={60} url={`${ddragonUrl}/spell/`} propertyName="fullName" />
                        )}
                        {/* 
                        <ImageWithLoading tooltip={rolledBuild.summonerSpells[1]?.name} boxSize='60px' src={`${ddragonUrl}/spell/${rolledBuild.summonerSpells[1]?.fullName}.png`} alt={rolledBuild.summonerSpells[1]?.name} />
                        <ImageWithLoading tooltip={rolledBuild.summonerSpells[0]?.name} boxSize='60px' src={`${ddragonUrl}/spell/${rolledBuild.summonerSpells[0]?.fullName}.png`} alt={rolledBuild.summonerSpells[0]?.name} />
                    */}
                    </VStack>
                    <VStack align={'center'}>
                        <CasinoGeneralDrawer casinoItems={casinoKeystone} size={60} url={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/`} propertyName="iconPath" />
                        <CasinoGeneralDrawer casinoItems={casinoRune} size={30} url={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/`} propertyName="iconFileName" />
                        {/*<ImageWithLoading tooltip={rolledBuild.keystone.name} boxSize='60px' src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/${rolledBuild.keystone.iconPath}.png`} alt={rolledBuild.keystone.name} />
                        <ImageWithLoading tooltip={rolledBuild.rune.name} boxSize='30px' src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/${rolledBuild.rune.iconFileName}.png`} alt={rolledBuild.rune.name} />*/}
                    </VStack>
                    <CasinoLaneDrawer casinoItems={casinoLane} size={60} />
                    {/* <ImageWithLoading tooltip={rolledBuild.lane} boxSize='60px' src={`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-${laneMappings.get(rolledBuild.lane)}-blue.png`} alt={rolledBuild.lane} /> */}
                </HStack>
                <HStack>
                    <Button w={'75%'} onClick={() => tryRoll()}>Roll Again</Button>
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
        view.setUint8(5, rolledBuild.champion?.id);

        const base64 = btoa(String.fromCharCode.apply(null, Array.from(buffer)));
        const base64url = base64.replace('+', '-').replace('/', '_').replace(/=+$/, '');

        return base64url;
    }
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