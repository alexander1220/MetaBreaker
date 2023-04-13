"use client";

import Image from "next/image";
import { useContext } from "react";
import { TooltipPlacement } from "../logic/types/enums";
import { GenerationContext } from "./generation/generation-provider";

export default function RolledFirstSummonerSpell() {
    const { rolledSummonerSpells } = useContext(GenerationContext);

    return (
        <div style={{
            display: "inline-block",
            margin: 1.5
        }} data-tooltip={rolledSummonerSpells[0]?.name} data-placement={TooltipPlacement.Bottom}>
            <Image alt={rolledSummonerSpells[0]?.name} width={40} height={40} src={`https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/${rolledSummonerSpells[0]?.fullName}.png`} />
        </div>
    );
}