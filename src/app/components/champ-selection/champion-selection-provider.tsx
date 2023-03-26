"use client";

import React, { createContext } from "react";
import { useImmer } from "use-immer";
import { Champion, champions as rawChampions } from "../../logic/types/champions";

interface Selectable {
    selected: boolean;
}

export type ChampionSelectionContextType = {
    champions: (Selectable & Champion)[];
    toogleChampionSelection: (champion: Champion) => void;
    selectAll: () => void;
    deselectAll: () => void;
};

const initialSelectedChampions = rawChampions.map((c) => { return { ...c, selected: true } });

export const ChampionSelectionContext = createContext<ChampionSelectionContextType>({
    champions: initialSelectedChampions,
    toogleChampionSelection: () => { },
    selectAll: () => { },
    deselectAll: () => { },
});

export default function ChampionSelectionProvider({ children }: { children: React.ReactNode }) {
    const [champions, updateSelectedChampions] = useImmer(initialSelectedChampions);

    function toogleChampionSelection(champion: Champion) {
        updateSelectedChampions(draft => {
            let champToDeselect = draft.find(c => c.name === champion.name);
            champToDeselect!.selected = !champToDeselect!.selected;
        });
    }

    function selectAll() {
        updateSelectedChampions(draft => {
            draft.forEach(c => c.selected = true);
        });
    }

    function deselectAll() {
        updateSelectedChampions(draft => {
            draft.forEach(c => c.selected = false);
        });
    }

    return (
        <ChampionSelectionContext.Provider value={{ champions, toogleChampionSelection, selectAll, deselectAll }}>
            {children}
        </ChampionSelectionContext.Provider>
    );
}
