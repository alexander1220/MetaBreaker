"use client";
import Image from "next/image";
import { useContext } from "react";
import { TooltipPlacement } from "../logic/types/enums";
import { GenerationContext } from "../../components/providers/generation-provider";

export default function RolledChampion() {
    const { rolledChampion } = useContext(GenerationContext);

    return (
        <div style={{
            display: "inline-block",
            margin: 1.5
        }} data-tooltip={rolledChampion.name} data-placement={TooltipPlacement.Bottom}>
            <Image alt={rolledChampion.name} width={120} height={120} src={`https://ddragon.leagueoflegends.com/cdn/13.3.1/img/champion/${rolledChampion.normalizedName}.png`} />
        </div>
    );
}