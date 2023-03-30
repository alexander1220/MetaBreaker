"use client";

import Image from "next/image";
import { useContext } from "react";
import { HighlightType, TooltipPlacement } from "./element";
import { GenerationContext } from "./generation/generation-provider";

export default function RolledStarterItem() {
    const { rolledStarterItem } = useContext(GenerationContext);

    return (
        <div style={{
            display: "inline-block",
            margin: 1.5
        }} data-tooltip={rolledStarterItem.name} data-placement={TooltipPlacement.Bottom}>
            <Image alt={rolledStarterItem.name} width={67.2} height={67.2} src={`https://ddragon.leagueoflegends.com/cdn/13.3.1/img/item/${rolledStarterItem.id}.png`} style={{ border: 2, borderStyle: "solid", borderRadius: 5, borderColor: HighlightType.Light }} />
        </div>
    );
}