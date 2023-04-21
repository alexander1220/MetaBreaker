"use client";

import React, { createContext } from "react";
import { useImmer } from "use-immer";
import { Champion, champions as rawChampions } from "../../app/logic/types/champions";

export interface Selectable {
    selected: boolean;
}

export type ChampionSelectionContextType = {
    champions: (Selectable & Champion)[];
    toggleChampionSelection: (champion: Champion) => void;
    selectAll: () => void;
    deselectAll: () => void;
};

export const ChampionSelectionContext = createContext({} as ChampionSelectionContextType);

export default function ChampionSelectionProvider({ children }: { children: React.ReactNode }) {
    const [champions, updateSelectedChampions] = useImmer(rawChampions.map((c) => { return { ...c, selected: true } }));

    function toggleChampionSelection(champion: Champion) {
        updateSelectedChampions(draft => {
            let champToDeselect = draft.find(c => c.name === champion.name)!;
            champToDeselect.selected = !champToDeselect.selected;
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
        <ChampionSelectionContext.Provider value={{ champions, toggleChampionSelection, selectAll, deselectAll }}>
            {children}
        </ChampionSelectionContext.Provider>
    );
}
