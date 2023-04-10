"use client";
import Element, { ElementType, HighlightType } from "./element";
import RolledBuildDescription from "./rolled-build-description";
import RolledChampion from "./rolled-champion";
import RolledFirstSummonerSpell from "./rolled-first-summoner-spell";
import RolledItems from "./rolled-items";
import RolledLane from "./rolled-lane";
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
                                <Element id="rune1" type={ElementType.Rune} name={"darkharvest"} description={"Dark Harvest"} height={64} width={64} />
                                <Element id="rune2" type={ElementType.Rune} name={"darkharvest"} description={"Dark Harvest"} height={32} width={32} />
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