"use client";

import { ChampionSelectionContext } from "components/providers/ChampionSelectionProvider";
import { useContext } from "react";

export default function ChampSelectionButtons() {
    let { selectAll, deselectAll } = useContext(ChampionSelectionContext);

    return (
        <div className="grid">
            <button onClick={deselectAll}>Deselect All</button>
            <button onClick={selectAll}>Select All</button>
        </div>
    )
}