"use client";
import { useContext } from 'react';
import Champ from './Champ';
import { ChampionSelectionContext } from './champion-selection-provider';

export default function ChampGrid({ searchString }: { searchString: string }) {
    const { champions } = useContext(ChampionSelectionContext);
    return (
        <div className="container" id="champselect">
            {
                champions.filter(champ => searchString !== '' ? champ.name.toLowerCase().startsWith(searchString.toLowerCase()) : true).map((champ) => {
                    return (
                        <Champ champ={champ} key={champ.name} selected={champ.selected} />
                    )
                })
            }
        </div>
    )
}