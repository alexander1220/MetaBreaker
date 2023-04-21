"use client";

import { useContext } from "react";
import { GenerationContext } from "../providers/generation-provider";
import { Lane } from "../types/enums/lane";

export function LaneSwitch({ lane, selected }: { lane: Lane, selected: boolean }) {
    let { toggleLane } = useContext(GenerationContext);

    function toggle() {
        toggleLane(lane);
    }
    return (
        <div>
            <input type="checkbox" id={`${lane}Switch`} name={`${lane}Switch`} role="switch" checked={selected} onChange={toggle} />
            <label htmlFor={`${lane}Switch`}>{lane}</label>
        </div>);
}

