"use client";
import { useImmer } from 'use-immer';
import ChampGrid from './champ-grid';
import ChampSelectionButtons from './champ-selection-buttons';
import ChampionSelectionProvider from './champion-selection-provider';

export default function ChampDrawer() {
    const [searchValue, updateSearchValue] = useImmer('');
    return (
        <>
            <div className="grid" style={{ marginTop: 20 }}>
                <input type="search" id="search-input" name="search" placeholder="Search" value={searchValue} onChange={(event) => {
                    updateSearchValue(event.target.value)
                }} />
                <ChampSelectionButtons />
            </div>
            <ChampGrid searchString={searchValue} />
        </>
    );
}