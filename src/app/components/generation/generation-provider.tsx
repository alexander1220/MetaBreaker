"use client";

import { Champion, champions } from "app/logic/types/champions";
import { createContext } from "react";
import { useImmer } from "use-immer";
import { Selectable } from "../champ-selection/champion-selection-provider";
import { Lane } from "./Lane";

export interface GenerationContextType {
    lanes: ({
        lane: Lane;
    } & Selectable)[];
    toggleLane: (role: Lane) => void;
    rolledChampion: Champion;
    updateRolledChampion: (champion: Champion) => void;
    rolledLane: Lane;
    updateRolledLane: (lane: Lane) => void;

}

export const GenerationContext = createContext<GenerationContextType>({} as GenerationContextType);

function mapLanesToObjects() {
    return Object.values(Lane).map(lane => ({ lane: lane, selected: true }));
}

export default function GenerationProvider({ children }: { children: React.ReactNode }) {
    let [lanes, updateLanes] = useImmer(mapLanesToObjects());
    let [rolledChampion, updateRolledChampion] = useImmer(champions.find(c => c.name === 'Aatrox')!);
    let [rolledLane, updateRolledLane] = useImmer(Lane.Top);

    function toggleLane(lane: Lane) {
        updateLanes(draft => {
            let laneToToggle = draft.find(r => r.lane === lane)!;
            if (laneToToggle.lane === Lane.Fill && !laneToToggle.selected) {
                draft.forEach(r => r.selected = true);
                return;
            }

            if (laneToToggle.lane !== Lane.Fill && laneToToggle.selected) {
                let fillLane = draft.find(r => r.lane === Lane.Fill)!;
                fillLane.selected = false;
            }
            laneToToggle.selected = !laneToToggle.selected;
        });
    }

    return (
        <GenerationContext.Provider value={{
            lanes,
            toggleLane,
            rolledChampion,
            updateRolledChampion,
            rolledLane,
            updateRolledLane
        }}>
            {children}
        </GenerationContext.Provider>
    );
}