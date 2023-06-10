"use client";

import { Champion, champions } from "components/types/Champions";
import { Lane } from "components/types/enums/Lane";
import { Tag } from "components/types/enums/Tag";
import { Item } from "components/types/Item";
import { Keystone } from "components/types/Keystones";
import { Rune } from "components/types/Runes";
import { StarterItem } from "components/types/StarterItems";
import { SummonerSpell } from "components/types/Summoners";
import { createContext } from "react";
import { useImmer, useImmerReducer } from "use-immer";
import { unknown } from "zod";
import { Selectable } from "./ChampionSelectionProvider";

type SelectableLane = { lane: Lane } & Selectable;

export interface RolledBuild {
    champion: Champion,
    lane: Lane,
    tag: Tag,
    starterItem: StarterItem,
    summonerSpells: SummonerSpell[],
    items: Item[],
    keystone: Keystone,
    rune: Rune
}

export interface GenerationContextType {
    rolledBuild: RolledBuild;
    selectedLanes: SelectableLane[];
    toggleLane: (lane: Lane) => void;
    updateSelectedLanes: (lanes: SelectableLane[]) => void;
    updateRolledChampion: (champion: Champion) => void;
    updateRolledLane: (lane: Lane) => void;
    updateRolledTag: (tag: Tag) => void;
    updateRolledStarterItem: (item: StarterItem) => void;
    updateRolledSummonerSpells: (spells: SummonerSpell[]) => void;
    updateRolledItems: (items: Item[]) => void;
    updateRolledKeystone: (keystone: Keystone) => void;
    updateRolledRune: (rune: Rune) => void;
}

export const GenerationContext = createContext<GenerationContextType>({} as GenerationContextType);
enum ActionType {
    UPDATE_ROLLED_CHAMPION = 'UPDATE_ROLLED_CHAMPION',
    UPDATE_ROLLED_LANE = 'UPDATE_ROLLED_LANE',
    UPDATE_ROLLED_TAG = 'UPDATE_ROLLED_TAG',
    UPDATE_ROLLED_STARTER_ITEM = 'UPDATE_ROLLED_STARTER_ITEM',
    UPDATE_ROLLED_SUMMONER_SPELLS = 'UPDATE_ROLLED_SUMMONER_SPELLS',
    UPDATE_ROLLED_ITEMS = 'UPDATE_ROLLED_ITEMS',
    UPDATE_ROLLED_KEYSTONE = 'UPDATE_ROLLED_KEYSTONE',
    UPDATE_ROLLED_RUNE = 'UPDATE_ROLLED_RUNE'
}

function generationProviderReducer(draft: RolledBuild, action: { type: ActionType, payload: any }) {
    switch (action.type) {
        case ActionType.UPDATE_ROLLED_CHAMPION:
            draft.champion = action.payload
            return;
        case ActionType.UPDATE_ROLLED_LANE:
            draft.lane = action.payload
            return;
        case ActionType.UPDATE_ROLLED_TAG:
            draft.tag = action.payload
            return;
        case ActionType.UPDATE_ROLLED_STARTER_ITEM:
            draft.starterItem = action.payload
            return;
        case ActionType.UPDATE_ROLLED_SUMMONER_SPELLS:
            draft.summonerSpells = action.payload
            return;
        case ActionType.UPDATE_ROLLED_ITEMS:
            draft.items = action.payload
            return;
        case ActionType.UPDATE_ROLLED_KEYSTONE:
            draft.keystone = action.payload
            return;
        case ActionType.UPDATE_ROLLED_RUNE:
            draft.rune = action.payload
            return;
        default:
            return draft;
    }
}


export default function GenerationProvider({ children }: { children: React.ReactNode }) {
    const initialState: RolledBuild = {
        champion: null!,
        lane: null!,
        tag: null!,
        starterItem: {} as StarterItem,
        summonerSpells: [] as SummonerSpell[],
        items: [null, null, null, null, null, null] as unknown as Item[],
        keystone: {} as Keystone,
        rune: {} as Rune
    };
    const [state, dispatch] = useImmerReducer(generationProviderReducer, initialState);
    const [selectedLanes, updateSelectedLanes] = useImmer(Object.values(Lane).map(lane => ({ lane: lane, selected: true })));

    function toggleLane(lane: Lane) {
        updateSelectedLanes(draft => {
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
            rolledBuild: state,
            selectedLanes: selectedLanes,
            updateSelectedLanes: updateSelectedLanes,
            toggleLane,
            updateRolledChampion: (champion: Champion) => dispatch({ type: ActionType.UPDATE_ROLLED_CHAMPION, payload: champion }),
            updateRolledLane: (lane: Lane) => dispatch({ type: ActionType.UPDATE_ROLLED_LANE, payload: lane }),
            updateRolledTag: (tag: Tag) => dispatch({ type: ActionType.UPDATE_ROLLED_TAG, payload: tag }),
            updateRolledStarterItem: (item: StarterItem) => dispatch({ type: ActionType.UPDATE_ROLLED_STARTER_ITEM, payload: item }),
            updateRolledSummonerSpells: (spells: SummonerSpell[]) => dispatch({ type: ActionType.UPDATE_ROLLED_SUMMONER_SPELLS, payload: spells }),
            updateRolledItems: (items: Item[]) => dispatch({ type: ActionType.UPDATE_ROLLED_ITEMS, payload: items }),
            updateRolledKeystone: (keystone: Keystone) => dispatch({ type: ActionType.UPDATE_ROLLED_KEYSTONE, payload: keystone }),
            updateRolledRune: (rune: Rune) => dispatch({ type: ActionType.UPDATE_ROLLED_RUNE, payload: rune })
        }}>
            {children}
        </GenerationContext.Provider>
    );
}

