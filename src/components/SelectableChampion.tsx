"use client";

// import Image from "next/image";
import { useContext } from "react";
import { ChampionSelectionContext } from "./providers/ChampionSelectionProvider";
import { Champion } from "./types/champions";
import { Image, Tooltip } from "@chakra-ui/react";

export default function SelectableChampion({ champ, selected }: { champ: Champion, selected: boolean }) {
    let { champions, toggleChampionSelection } = useContext(ChampionSelectionContext);

    function toggleSelected() {
        toggleChampionSelection(champ);
    }

    return (
        <Tooltip label={champ.name}>
            <Image id={champ.name}
                alt={champ.name}
                className={selected ? 'selectedChamp' : 'deselectedChamp'}
                boxSize='100px'
                draggable={false}
                src={`https://ddragon.leagueoflegends.com/cdn/13.11.1/img/champion/${champ.normalizedName}.png`}
                onClick={toggleSelected}
            />
        </Tooltip>
    );
}