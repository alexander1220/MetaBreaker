import Image from "next/image";
import { TooltipPlacement } from "./types/enums/TooltipPlacement";
import { SummonerSpell } from "./types/Summoners";

export default function RolledSummonerSpell({ summonerSpell }: { summonerSpell: SummonerSpell }) {
    return (
        <div style={{
            display: "inline-block",
            margin: 1.5
        }} data-tooltip={summonerSpell?.name} data-placement={TooltipPlacement.Bottom}>
            <Image alt={summonerSpell?.name} width={40} height={40} src={`https://ddragon.leagueoflegends.com/cdn/13.11.1/img/spell/${summonerSpell?.fullName}.png`} />
        </div>
    );
}