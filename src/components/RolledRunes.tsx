import Image from "next/image";
import { TooltipPlacement } from "./types/enums/TooltipPlacement";
import { Keystone } from "./types/Keystones";
import { Rune } from "./types/Runes";

export default function RolledRunes({ keystone: keystone, rune: rune }: { keystone: Keystone, rune: Rune }) {
    return (
        <>
            <div style={{
                display: "inline-block",
                margin: 1.5
            }} data-tooltip={keystone.name} data-placement={TooltipPlacement.Bottom}>
                <Image alt={keystone.name} height={64} width={64} src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/${keystone.iconPath}.png`} />
            </div>
            <div style={{
                display: "inline-block",
                margin: 1.5
            }} data-tooltip={rune.name} data-placement={TooltipPlacement.Bottom}>
                <Image alt={rune.name} height={32} width={32} src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/${rune.iconFileName}.png`} />
            </div>
        </>
    );
}