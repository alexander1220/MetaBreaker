import Image from "next/image";
import { Champion } from "./types/Champions";
import { ddragonUrl } from "./types/Constants";
import { TooltipPlacement } from "./types/enums/TooltipPlacement";

export default function RolledChampion({ champion: rolledChampion }: { champion: Champion }) {
    return (
        <div style={{
            display: "inline-block",
            margin: 1.5
        }} data-tooltip={rolledChampion.name} data-placement={TooltipPlacement.Bottom}>
            <Image alt={rolledChampion.name} width={120} height={120} src={`${ddragonUrl}${rolledChampion.normalizedName}.png`} />
        </div>
    );
}