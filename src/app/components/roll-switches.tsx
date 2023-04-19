"use client";
import { useContext } from "react";
import { GenerationContext } from "./generation/generation-provider";
import { LaneSwitch } from "./generation/lane-switch";

export default function RollSwitches() {
    const { lanes } = useContext(GenerationContext);
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-evenly'
        }}>
            {lanes.map(lane => <LaneSwitch key={lane.lane} lane={lane.lane} selected={lane.selected} />)}
        </div>
    );
}