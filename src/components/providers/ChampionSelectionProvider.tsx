"use client";

import { Champion, champions as rawChampions } from "components/types/Champions";
import React, { createContext, startTransition } from "react";
import { useImmer } from "use-immer";

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
        startTransition(() => {
            updateSelectedChampions(draft => {
                let champToDeselect = draft.find(c => c.name === champion.name)!;
                champToDeselect.selected = !champToDeselect.selected;
            });
        });
    }

    function selectAll() {
        startTransition(() => {
            updateSelectedChampions(draft => {
                draft.forEach(c => c.selected = true);
            });
        });
    }

    function deselectAll() {
        startTransition(() => {
            updateSelectedChampions(draft => {
                draft.forEach(c => c.selected = false);
            });
        });
    }

    return (
        <ChampionSelectionContext.Provider value={{ champions, toggleChampionSelection, selectAll, deselectAll }}>
            {children}
        </ChampionSelectionContext.Provider>
    );
}
