"use client";

import { useContext, useState } from "react";
import { ChampionSelectionContext } from "./champion-selection-provider";

export default function ChampSelectionButtons() {
    let { selectAll, deselectAll } = useContext(ChampionSelectionContext);

    return (
        <div className="grid">
            <button onClick={deselectAll}>Deselect All</button>
            <button onClick={selectAll}>Select All</button>
        </div>
    )
}