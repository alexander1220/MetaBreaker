"use client";

import { ChampionSelectionContext, Selectable } from "components/providers/ChampionSelectionProvider";
import { Item } from "components/providers/GenerationProvider";

import { Lane } from "components/types/enums/Lane";
import { useContext, useEffect } from "react";
import { mythics } from "components/types/items/Mythics";
import { boots } from "components/types/items/Boots";
import { legendaryItems } from "components/types/items/Legendaries";
import * as random from "random-seed";
import { useRouter } from "next/navigation";
import { RollingOptions } from "app/[[...options]]/page";
import { Champion } from "components/types/Champions";
import { Tag } from "components/types/enums/Tag";
import { keystones, Keystone } from "components/types/Keystones";
import { runes } from "components/types/Runes";
import { starterItems } from "components/types/StarterItems";
import { summonerSpells, SummonerSpell } from "components/types/Summoners";
import { GenerationContext } from "components/providers/GenerationProviderReducer";


const supportTags = [Tag.Mage_Support, Tag.Assassin_Support, Tag.Enchanter_Support, Tag.Tank_Support];

let rnd: random.RandomSeed;

export default function RollButton({ rollingOptions }: { rollingOptions?: RollingOptions }) {
    const { selectedLanes: lanes, updateSelectedLanes, updateRolledChampion, updateRolledLane, updateRolledTag, updateRolledStarterItem, updateRolledSummonerSpells, updateRolledItems, updateRolledKeystone, updateRolledRune } = useContext(GenerationContext);
    const { champions } = useContext(ChampionSelectionContext);
    const router = useRouter();

    function rollBuild() {
        const selectedChampions = champions.filter(c => c.selected);
        const selectedLanes = lanes.filter(r => r.selected && r.lane !== Lane.Fill).map(o => o.lane);

        if (selectedChampions.length === 0) {
            alert('Please select at least one champion');
            return;
        }
        if (selectedLanes.length === 0) {
            alert('Please select at least one lane');
            return;
        }

        const selectedSupportChamps = getSelectedSupportChamps(selectedChampions);

        const rolledLane = rollLane(selectedSupportChamps, selectedLanes);
        updateRolledLane(rolledLane);

        const rolledChampion = rollChampion(selectedChampions, selectedSupportChamps, rolledLane);
        updateRolledChampion(rolledChampion);

        const rolledTag = rollTag(rolledChampion, rolledLane);
        updateRolledTag(rolledTag);

        const rolledStarterItem = rollStarterItem(rolledLane, rolledTag);
        updateRolledStarterItem(rolledStarterItem);

        const rolledSummonerSpells = rollSummonerSpells(rolledChampion, rolledLane, rolledTag);
        updateRolledSummonerSpells(rolledSummonerSpells);

        const rolledItems = rollItems(rolledChampion, rolledLane, rolledTag);
        updateRolledItems(rolledItems);

        const rolledKeyStone = rollKeyStone(rolledTag);
        updateRolledKeystone(rolledKeyStone);

        const rolledRune = rollRune(rolledTag, rolledKeyStone);
        updateRolledRune(rolledRune);
    }

    useEffect(() => {
        if (rollingOptions) {
            let laneOptions = new Map(rollingOptions.lanes);
            updateSelectedLanes(Object.values(Lane).map(lane => ({ lane: lane, selected: laneOptions.get(lane)! })));
            rnd = random.create(rollingOptions.seed);
            rollBuild();
        }
        else {
            rollOptions();
        }

    }, []);


    function isLaneSelected(lane: Lane) {
        return lanes.find(obj => obj.lane === lane)?.selected;
    }

    function rollOptions() {

        let options =
            `${+isLaneSelected(Lane.Top)!}` +
            `${+isLaneSelected(Lane.Jungle)!}` +
            `${+isLaneSelected(Lane.Mid)!}` +
            `${+isLaneSelected(Lane.Adc)!}` +
            `${+isLaneSelected(Lane.Support)!}` +
            `${generateSeed()}`;

        const base64Options = Buffer.from(options).toString('base64');
        router.push(`/${base64Options}`);
    }

    return (<button onClick={rollOptions}>ROLL</button>);
}


function generateSeed() {
    return Math.floor(Number.MAX_SAFE_INTEGER * Math.random()).toString();
}

function rollLane(selectedSupportChamps: (Selectable & Champion)[], selectedselectedLanes: Lane[]) {
    let availableselectedLanes = selectedSupportChamps.length > 0 ? selectedselectedLanes : selectedselectedLanes.filter(lane => lane !== Lane.Support);

    if (availableselectedLanes.length === 0) {
        alert('There is no champion for this specific role selected. Don\'t troll too hard!');
        return;
    }

    return getRandomElement(availableselectedLanes);
}

function rollChampion(selectedChampions: (Selectable & Champion)[], selectedSupportChamps: (Selectable & Champion)[], rolledLane: Lane) {
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

function getSelectedSupportChamps(selectedChampions: (Selectable & Champion)[]) {
    return selectedChampions.filter(c => c.tags.some(tag => supportTags.includes(tag)));
}

function getRandomElement(items: any[]) {
    return items[rnd(items.length - 1)];
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