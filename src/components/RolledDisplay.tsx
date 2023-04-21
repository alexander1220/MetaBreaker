"use client";
import { useContext } from "react";
import { GenerationContext } from "./providers/GenerationProvider";
import RolledBuildDescription from "./RolledBuildDescription";
import RolledChampion from "./RolledChampion";
import RolledFirstSummonerSpell from "./RolledFirstSummonerSpell";
import RolledItems from "./RolledItems";
import RolledLane from "./RolledLane";
import RolledRunes from "./RolledRunes";
import RolledSummonerSpell from "./RolledSummonerSpell";
import RolledStarterItem from "./RolledStarterItem";


export default function RolledDisplay() {
    const { rolledChampion, rolledTag, rolledStarterItem, rolledLane, rolledItems, rolledSummonerSpells, rolledRune, rolledKeystone } = useContext(GenerationContext);
    return (
        <>
            <div className="container">
                <table>
                    <tbody>
                        <tr>
                            <td colSpan={2} rowSpan={2}>
                                <RolledChampion champion={rolledChampion} />
                            </td>
                            <td>
                                <RolledBuildDescription champion={rolledChampion} tag={rolledTag} />
                                <RolledStarterItem starterItem={rolledStarterItem} />
                            </td>
                            <td style={{ textAlign: "right" }}>
                                <RolledLane lane={rolledLane} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} id="itemslots">
                                <RolledItems items={rolledItems} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <RolledSummonerSpell summonerSpell={rolledSummonerSpells[1]} />
                            </td>
                            <td colSpan={2} rowSpan={2} style={{ textAlign: "right" }}>
                                <RolledRunes keystone={rolledKeystone} rune={rolledRune} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <RolledSummonerSpell summonerSpell={rolledSummonerSpells[0]} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}