"use client";

import { useContext } from "react";
import { GenerationContext } from "./generation/generation-provider";
import { Lane } from "./generation/Lane";
import { LaneSwitch } from "./generation/lane-switch";

import { ChampionSelectionContext } from "../components/champ-selection/champion-selection-provider";
import { Tag } from "app/logic/types/enums";

export default function GenerateButton() {
    let { lanes, rolledChampion, updateRolledChampion, rolledLane, updateRolledLane } = useContext(GenerationContext);
    let { champions } = useContext(ChampionSelectionContext);

    function generate() {
        let selectedChampions = champions.filter(c => c.selected);
        let selectedLanes = lanes.filter(r => r.selected && r.lane !== Lane.Fill);

        if (selectedChampions.length === 0) {
            alert('Please select at least one champion');
            return;
        }
        if (selectedChampions.length === 0) {
            alert('Please select at least one lane');
            return;
        }

        let selectedSupportChamps = selectedChampions.filter(c =>
            c.tags.some(tag => [
                Tag.Mage_Support,
                Tag.Assassin_Support,
                Tag.Enchanter_Support,
                Tag.Tank_Support
            ].includes(tag)));
        let availableLanes = selectedSupportChamps.length > 0 ? selectedLanes : selectedLanes.filter(r => r.lane !== Lane.Support);

        if (availableLanes.length === 0) {
            alert('There is no champion for this specific role selected. Don\'t troll too hard!');
            return;
        }

        let rolledLane = availableLanes[Math.floor(Math.random() * availableLanes.length)].lane;
        updateRolledLane(rolledLane);
        let rolledTag;

        if (rolledLane === Lane.Support) {
            updateRolledChampion(selectedSupportChamps[Math.floor(Math.random() * selectedSupportChamps.length)]);
            rolledTag = rolledChampion.tags[Math.floor(Math.random() * rolledChampion.tags.length)];
        }
        else {
            updateRolledChampion(selectedChampions[Math.floor(Math.random() * selectedChampions.length)]);
            let availableTags = rolledChampion.tags.filter(tag => ![Tag.Mage_Support, Tag.Assassin_Support, Tag.Enchanter_Support, Tag.Tank_Support].includes(tag));
            rolledTag = availableTags[Math.floor(Math.random() * availableTags.length)];
        }
    }

    return (
        <>
            <button onClick={generate}>ROLL</button>
            <div style={{
                display: 'flex',
                justifyContent: 'space-evenly'
            }}>
                {lanes.map(role => <LaneSwitch key={role.lane} lane={role.lane} selected={role.selected} />)}
            </div>
        </>
    );
}