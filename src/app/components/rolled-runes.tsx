"use client";

import Image from "next/image";
import { useContext } from "react";
import { TooltipPlacement } from "./element";
import { GenerationContext } from "./generation/generation-provider";

export default function RolledRunes() {
    const { rolledKeystone: rolledKeyStone, rolledRune } = useContext(GenerationContext);
    return (
        <>
            <div style={{
                display: "inline-block",
                margin: 1.5
            }} data-tooltip={rolledKeyStone.name} data-placement={TooltipPlacement.Bottom}>
                <Image alt={rolledKeyStone.name} height={64} width={64} src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/${rolledKeyStone.iconPath}.png`} />
            </div>
            <div style={{
                display: "inline-block",
                margin: 1.5
            }} data-tooltip={rolledRune.name} data-placement={TooltipPlacement.Bottom}>
                <Image alt={rolledRune.name} height={32} width={32} src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/${rolledRune.iconFileName}.png`} />
            </div>
        </>
    );
}