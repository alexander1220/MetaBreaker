import Image from "next/image";
import { TooltipPlacement } from "./types/enums/TooltipPlacement";
import { HighlightType } from "./types/enums/HighlightType";
import { StarterItem } from "./types/StarterItems";

export default function RolledStarterItem({ starterItem }: { starterItem: StarterItem }) {

    return (
        <div style={{
            display: "inline-block",
            margin: 1.5
        }} data-tooltip={starterItem.name} data-placement={TooltipPlacement.Bottom}>
            <Image alt={starterItem.name} width={67.2} height={67.2} src={`https://ddragon.leagueoflegends.com/cdn/13.11.1/img/item/${starterItem.id}.png`} style={{ border: 2, borderStyle: "solid", borderRadius: 5, borderColor: HighlightType.Light }} />
        </div>
    );
}