"use client";
import { useContext } from 'react';
import { ChampionSelectionContext } from './providers/ChampionSelectionProvider';
import SelectableChampion from './SelectableChampion';

export default function ChampGrid({ searchString }: { searchString: string }) {
    const { champions } = useContext(ChampionSelectionContext);
    return (
        <div className="container" id="champselect">
            {
                champions.filter(champ => searchString !== '' ? champ.name.toLowerCase().startsWith(searchString.toLowerCase()) : true).map((champ) => {
                    return (
                        <SelectableChampion champ={champ} key={champ.name} selected={champ.selected} />
                    )
                })
            }
        </div>
    )
}