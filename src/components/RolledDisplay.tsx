"use client";
import { useContext } from "react";
import RolledBuildDescription from "./RolledBuildDescription";
import RolledChampion from "./RolledChampion";
import RolledFirstSummonerSpell from "./RolledFirstSummonerSpell";
import RolledItems from "./RolledItems";
import RolledLane from "./RolledLane";
import RolledRunes from "./RolledRunes";
import RolledSummonerSpell from "./RolledSummonerSpell";
import RolledStarterItem from "./RolledStarterItem";
import { GenerationContext } from "./providers/GenerationProviderReducer";


export default function RolledDisplay() {
    const { rolledBuild } = useContext(GenerationContext);
    return (
        <>
            <div className="container">
                <table>
                    <tbody>
                        <tr>
                            <td colSpan={2} rowSpan={2}>
                                <RolledChampion champion={rolledBuild.champion} />
                            </td>
                            <td>
                                <RolledBuildDescription champion={rolledBuild.champion} tag={rolledBuild.tag} />
                                <RolledStarterItem starterItem={rolledBuild.starterItem} />
                            </td>
                            <td style={{ textAlign: "right" }}>
                                <RolledLane lane={rolledBuild.lane} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} id="itemslots">
                                <RolledItems items={rolledBuild.items} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <RolledSummonerSpell summonerSpell={rolledBuild.summonerSpells[1]} />
                            </td>
                            <td colSpan={2} rowSpan={2} style={{ textAlign: "right" }}>
                                <RolledRunes keystone={rolledBuild.keystone} rune={rolledBuild.rune} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <RolledSummonerSpell summonerSpell={rolledBuild.summonerSpells[0]} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}