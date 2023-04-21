"use client";
import Image from "next/image";
import { useContext } from "react";
import { TooltipPlacement } from "../logic/types/enums";
import { GenerationContext } from "../../components/providers/generation-provider";
import { Lane } from "../../components/types/enums/lane";

export default function RolledLane() {
    const { rolledLane } = useContext(GenerationContext);
    let laneID;
    switch (rolledLane) {
        case Lane.Top:
            laneID = "top";
            break;
        case Lane.Jungle:
            laneID = "jungle";
            break;
        case Lane.Mid:
            laneID = "middle";
            break;
        case Lane.Adc:
            laneID = "bottom";
            break;
        case Lane.Support:
            laneID = "utility";
            break;
    }
    return (
        <div style={{
            display: "inline-block",
            margin: 1.5
        }} data-tooltip={rolledLane} data-placement={TooltipPlacement.Bottom}>
            <Image alt={rolledLane} width={60} height={60} src={`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-${laneID}-blue.png`} />
        </div>
    );
}