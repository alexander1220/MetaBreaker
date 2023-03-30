"use client";

import { ChampionSelectionContext, Selectable } from "app/components/champ-selection/champion-selection-provider";
import { GenerationContext } from "app/components/generation/generation-provider";
import { Lane } from "app/components/generation/Lane";
import { useContext, useEffect } from "react";
import { Champion } from "../logic/types/champions";
import { Tag } from "../logic/types/enums";
import { starterItems } from "../logic/types/starter-items";
import { SummonerSpell, summonerSpells } from "../logic/types/summoners";


const supportTags = [Tag.Mage_Support, Tag.Assassin_Support, Tag.Enchanter_Support, Tag.Tank_Support];

export default function RollButton() {

    const { lanes, updateRolledChampion, updateRolledLane, updateRolledTag, updateRolledStarterItem, updateRolledSummonerSpells } = useContext(GenerationContext);
    const { champions } = useContext(ChampionSelectionContext);


    function rollBuild() {
        const selectedChampions = champions.filter(c => c.selected);
        const selectedLanes = lanes.filter(r => r.selected && r.lane !== Lane.Fill).map(o => o.lane);

        if (selectedChampions.length === 0) {
            alert('Please select at least one champion');
            return;
        }
        if (selectedChampions.length === 0) {
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

    }

    useEffect(() => {
        rollBuild();
    }, []);


    return (<button onClick={rollBuild}>ROLL</button>);
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
        return getRandomElement(rolledChampion.tags);
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

    if (rolledChampion.name === 'Yuumi' && rolledLane === Lane.Support) {
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
    return items[Math.floor(Math.random() * items.length)];
}