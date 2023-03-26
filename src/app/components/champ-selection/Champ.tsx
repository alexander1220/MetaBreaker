"use client";

import Image from "next/image";
import { Champion } from '../../logic/types/champions';
import { useContext, useEffect, useState } from "react";
import { ChampionSelectionContext } from "./champion-selection-provider";

export default function Champ({ champ, selected }: { champ: Champion, selected: boolean }) {
    let { toogleChampionSelection } = useContext(ChampionSelectionContext);

    function toggleSelected() {
        toogleChampionSelection(champ);
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