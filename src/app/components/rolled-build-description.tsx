"use client";

import { useContext } from "react";
import { GenerationContext } from "./generation/generation-provider";

export default function RolledBuildDescription() {
    const { rolledChampion, rolledTag } = useContext(GenerationContext);
    return (
        <h2 id="buildDescription" style={{
            textAlign: "left",
            marginBottom: 0
        }}>
            {rolledChampion.name}, {rolledTag}
        </h2>
    );
}