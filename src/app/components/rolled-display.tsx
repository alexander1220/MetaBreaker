"use client";
import Element, { ElementType, HighlightType } from "./element";
import RolledBuildDescription from "./rolled-build-description";
import RolledChampion from "./rolled-champion";
import RolledFirstSummonerSpell from "./rolled-first-summoner-spell";
import RolledItems from "./rolled-items";
import RolledLane from "./rolled-lane";
import RolledRunes from "./rolled-runes";
import RolledSecondSummonerSpell from "./rolled-second-summoner-spell";
import RolledStarterItem from "./rolled-starter-item";


export default function RolledDisplay() {
    return (
        <>
            <div className="container">
                <table>
                    <tbody>
                        <tr>
                            <td colSpan={2} rowSpan={2}>
                                <RolledChampion />
                            </td>
                            <td>
                                <RolledBuildDescription />
                                <RolledStarterItem />
                            </td>
                            <td style={{ textAlign: "right" }}>
                                <RolledLane />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} id="itemslots">
                                <RolledItems />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <RolledSecondSummonerSpell />
                            </td>
                            <td colSpan={2} rowSpan={2} style={{ textAlign: "right" }}>
                                <RolledRunes />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <RolledFirstSummonerSpell />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}