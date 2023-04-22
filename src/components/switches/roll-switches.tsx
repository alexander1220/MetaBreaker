"use client";
import { GenerationContext } from "components/providers/GenerationProviderReducer";
import { useContext } from "react";
import { LaneSwitch } from "./lane-switch";

export default function RollSwitches() {
    const { selectedLanes } = useContext(GenerationContext);
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-evenly'
        }}>
            {selectedLanes.map(selectedLanes => <LaneSwitch key={selectedLanes.lane} lane={selectedLanes.lane} selected={selectedLanes.selected} />)}
        </div>
    );
}