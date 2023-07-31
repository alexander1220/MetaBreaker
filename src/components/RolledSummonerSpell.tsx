import Image from "next/image";
import { TooltipPlacement } from "./types/enums/TooltipPlacement";
import { SummonerSpell } from "./types/Summoners";
import { ddragonUrl } from "./types/Constants";

export default function RolledSummonerSpell({ summonerSpell }: { summonerSpell: SummonerSpell }) {
    return (
        <div style={{
            display: "inline-block",
            margin: 1.5
        }} data-tooltip={summonerSpell?.name} data-placement={TooltipPlacement.Bottom}>
            <Image alt={summonerSpell?.name} width={40} height={40} src={`${ddragonUrl}/spell/${summonerSpell?.fullName}.png`} />
        </div>
    );
}