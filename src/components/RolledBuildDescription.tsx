import { Champion } from "./types/Champions";

export default function RolledBuildDescription({ champion: rolledChampion, tag: rolledTag }: { champion: Champion, tag: string }) {
    return (
        <h2 id="buildDescription" style={{
            textAlign: "left",
            marginBottom: 0
        }}>
            {rolledChampion.name}, {rolledTag}
        </h2>
    );
}