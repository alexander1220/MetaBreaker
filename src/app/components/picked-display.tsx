import Element, { ElementType, HighlightType } from "./element";

export default function PickedDisplay() {

    return (
        <>
            <div className="container">
                <table>
                    <tbody>
                        <tr>
                            <td colSpan={2} rowSpan={2}>
                                <Element id="champion" type={ElementType.Champion} name={"Aatrox"} description={"Aatrox"} height={120} width={120} />
                            </td>
                            <td>
                                <h2 id="buildDescription" style={{ textAlign: "left", marginBottom: 0 }}>
                                    Nasus, OnHit
                                </h2>
                                <Element id="starterItem" type={ElementType.Item} name={"1055"} description={"Doran's Shield"} height={67.2} width={67.2} highlight={HighlightType.Light} />
                            </td>
                            <td style={{ textAlign: "right" }}>
                                <Element id="lane" type={ElementType.Lane} name={"bottom"} description={"Bottom"} height={60} width={60} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} id="itemslots">
                                <Element id="item1" type={ElementType.Item} name={"1001"} description={"Boots of Speed"} height={67.2} width={67.2} highlight={HighlightType.Gold} />
                                <Element id="item2" type={ElementType.Item} name={"1001"} description={"Boots of Speed"} height={67.2} width={67.2} highlight={HighlightType.Light} />
                                <Element id="item3" type={ElementType.Item} name={"1001"} description={"Boots of Speed"} height={67.2} width={67.2} highlight={HighlightType.Black} />
                                <Element id="item4" type={ElementType.Item} name={"1001"} description={"Boots of Speed"} height={67.2} width={67.2} highlight={HighlightType.Black} />
                                <Element id="item5" type={ElementType.Item} name={"1001"} description={"Boots of Speed"} height={67.2} width={67.2} highlight={HighlightType.Black} />
                                <Element id="item6" type={ElementType.Item} name={"1001"} description={"Boots of Speed"} height={67.2} width={67.2} highlight={HighlightType.Black} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <Element id="sumSpell2" type={ElementType.Spell} name={"SummonerFlash"} description={"Flash"} height={40} width={40} />
                            </td>
                            <td colSpan={2} rowSpan={2} style={{ textAlign: "right" }}>
                                <Element id="rune1" type={ElementType.Rune} name={"darkharvest"} description={"Dark Harvest"} height={64} width={64} />
                                <Element id="rune2" type={ElementType.Rune} name={"darkharvest"} description={"Dark Harvest"} height={32} width={32} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Element id="sumSpell1" type={ElementType.Spell} name={"SummonerFlash"} description={"Flash"} height={40} width={40} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}