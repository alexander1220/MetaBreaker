"use client";

import Image from "next/image";
import { useContext } from "react";
import { ChampionSelectionContext } from "./providers/ChampionSelectionProvider";
import { Champion } from "./types/Champions";

export default function SelectableChampion({ champ, selected }: { champ: Champion, selected: boolean }) {
    let { champions, toggleChampionSelection } = useContext(ChampionSelectionContext);

    function toggleSelected() {
        toggleChampionSelection(champ);
    }

    return (
        <Image id={champ.name}
            alt={champ.name}
            className={selected ? 'selectedChamp' : 'deselectedChamp'}
            width={100}
            height={100}
            draggable={false}
            src={`https://ddragon.leagueoflegends.com/cdn/13.3.1/img/champion/${champ.normalizedName}.png`}
            onClick={toggleSelected}
        />
    );
}