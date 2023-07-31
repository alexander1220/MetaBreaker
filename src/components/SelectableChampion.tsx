"use client";

// import Image from "next/image";
import { useContext } from "react";
import { ChampionSelectionContext } from "./providers/ChampionSelectionProvider";
import { Champion } from "./types/Champions";
import { Image, Tooltip } from "@chakra-ui/react";
import { ddragonUrl } from "./types/Constants";

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
                src={`${ddragonUrl}/champion/${champ.normalizedName}.png`}
                onClick={toggleSelected}
            />
        </Tooltip>
    );
}