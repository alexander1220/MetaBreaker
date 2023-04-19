"use client";

import { ChampionSelectionContext, Selectable } from "app/components/champ-selection/champion-selection-provider";
import { GenerationContext, Item } from "app/components/generation/generation-provider";
import { Lane } from "app/components/generation/Lane";
import { useContext, useEffect } from "react";
import { Champion } from "../logic/types/champions";
import { Tag } from "../logic/types/enums";
import { starterItems } from "../logic/types/starter-items";
import { SummonerSpell, summonerSpells } from "../logic/types/summoners";
import { mythics } from "app/logic/types/items/mythics";
import { boots } from "app/logic/types/items/boots";
import { legendaryItems } from "app/logic/types/items/legendaries";
import { Keystone, keystones } from "app/logic/types/keystones";
import { runes } from "app/logic/types/runes";
import * as random from "random-seed";
import { useRouter } from "next/navigation";


const supportTags = [Tag.Mage_Support, Tag.Assassin_Support, Tag.Enchanter_Support, Tag.Tank_Support];

let seed: string;
let rnd: random.RandomSeed;

export default function RollButton({ buildSeed }: { buildSeed: string }) {
    const router = useRouter();

    rnd = random.create(buildSeed);



    const { lanes, updateRolledChampion, updateRolledLane, updateRolledTag, updateRolledStarterItem, updateRolledSummonerSpells, updateRolledItems, updateRolledKeystone, updateRolledRune } = useContext(GenerationContext);
    const { champions } = useContext(ChampionSelectionContext);


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
        rollBuild();
    }, []);


    return (<button onClick={() => {
        router.push(`/${Math.floor(Number.MAX_SAFE_INTEGER * Math.random()).toString()}`);
    }}>ROLL</button>);
}

function rollLane(selectedSupportChamps: (Selectable & Champion)[], selectedLanes: Lane[]) {
    let availableLanes = selectedSupportChamps.length > 0 ? selectedLanes : selectedLanes.filter(lane => lane !== Lane.Support);

    if (availableLanes.length === 0) {
        alert('There is no champion for this specific role selected. Don\'t troll too hard!');
        return;
    }

    return getRandomElement(availableLanes);
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