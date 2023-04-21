import Image from "next/image";
import { TooltipPlacement } from "./types/enums/TooltipPlacement";
import { Lane } from "./types/enums/Lane";

const laneMappings = new Map([
    [Lane.Top, "top"],
    [Lane.Jungle, "jungle"],
    [Lane.Mid, "middle"],
    [Lane.Adc, "bottom"],
    [Lane.Support, "utility"],
]);

export default function RolledLane({ lane }: { lane: Lane }) {
    return (
        <div style={{
            display: "inline-block",
            margin: 1.5
        }} data-tooltip={lane} data-placement={TooltipPlacement.Bottom}>
            <Image alt={lane} width={60} height={60} src={`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-${laneMappings.get(lane)}-blue.png`} />
        </div>
    );
}