"use client";

import { Champion, champions } from "components/types/Champions";
import { Lane } from "components/types/enums/Lane";
import { Tag } from "components/types/enums/Tag";
import { Keystone } from "components/types/Keystones";
import { Rune } from "components/types/Runes";
import { StarterItem } from "components/types/StarterItems";
import { SummonerSpell } from "components/types/Summoners";
import { createContext } from "react";
import { useImmer } from "use-immer";
import { Selectable } from "./ChampionSelectionProvider";

export interface Item {
    name: string;
    id: number;
    tags: Tag[];
    blocking?: number[];
}
// export interface GenerationContextType {
//     lanes: ({
//         lane: Lane;
//     } & Selectable)[];
//     updateLanes: (lanes: ({
//         lane: Lane;
//     } & Selectable)[]) => void;
//     toggleLane: (role: Lane) => void;
//     rolledChampion: Champion;
//     updateRolledChampion: (champion: Champion) => void;
//     rolledLane: Lane;
//     updateRolledLane: (lane: Lane) => void;
//     rolledTag: Tag;
//     updateRolledTag: (tag: Tag) => void;
//     rolledStarterItem: StarterItem;
//     updateRolledStarterItem: (item: StarterItem) => void;
//     rolledSummonerSpells: SummonerSpell[];
//     updateRolledSummonerSpells: (spells: SummonerSpell[]) => void;
//     rolledItems: Item[];
//     updateRolledItems: (items: Item[]) => void;
//     rolledKeystone: Keystone;
//     updateRolledKeystone: (keystone: Keystone) => void;
//     rolledRune: Rune;
//     updateRolledRune: (rune: Rune) => void;

// }

// export const GenerationContext = createContext<GenerationContextType>({} as GenerationContextType);

// function mapLanesToObjects() {
//     return Object.values(Lane).map(lane => ({ lane: lane, selected: true }));
// }

// export default function GenerationProvider({ children }: { children: React.ReactNode }) {
//     let [lanes, updateLanes] = useImmer(mapLanesToObjects());
//     let [rolledChampion, updateRolledChampion] = useImmer(champions.find(c => c.name === 'Aatrox')!);
//     let [rolledLane, updateRolledLane] = useImmer(Lane.Top);
//     let [rolledTag, updateRolledTag] = useImmer(Tag.OnHit);
//     let [rolledStarterItem, updateRolledStarterItem] = useImmer({} as StarterItem);
//     let [rolledSummonerSpells, updateRolledSummonerSpells] = useImmer([] as SummonerSpell[]);
//     let [rolledItems, updateRolledItems] = useImmer([] as Item[]);
//     let [rolledKeyStone, updateRolledKeystone] = useImmer({} as Keystone);
//     let [rolledRune, updateRolledRune] = useImmer({} as Rune);

//     function toggleLane(lane: Lane) {
//         updateLanes(draft => {
//             let laneToToggle = draft.find(r => r.lane === lane)!;
//             if (laneToToggle.lane === Lane.Fill && !laneToToggle.selected) {
//                 draft.forEach(r => r.selected = true);
//                 return;
//             }

//             if (laneToToggle.lane !== Lane.Fill && laneToToggle.selected) {
//                 let fillLane = draft.find(r => r.lane === Lane.Fill)!;
//                 fillLane.selected = false;
//             }
//             laneToToggle.selected = !laneToToggle.selected;
//         });
//     }

//     return (
//         <GenerationContext.Provider value={{
//             lanes,
//             updateLanes,
//             toggleLane,
//             rolledChampion,
//             updateRolledChampion,
//             rolledLane,
//             updateRolledLane,
//             rolledTag,
//             updateRolledTag,
//             rolledStarterItem,
//             updateRolledStarterItem,
//             rolledSummonerSpells,
//             updateRolledSummonerSpells,
//             rolledItems,
//             updateRolledItems,
//             rolledKeystone: rolledKeyStone,
//             updateRolledKeystone,
//             rolledRune,
//             updateRolledRune
//         }}>
//             {children}
//         </GenerationContext.Provider>
//     );
// }
