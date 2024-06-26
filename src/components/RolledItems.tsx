import Image from "next/image";
import { Item } from "./types/Item";
import { TooltipPlacement } from "./types/enums/TooltipPlacement";
import { HighlightType } from "./types/enums/HighlightType";
import { ddragonUrl } from "./types/Constants";
export default function RolledItems({ items: rolledItems }: { items: Item[] }) {
    return (
        <>
            {rolledItems?.map((item, index) => (

                <div key={item.id} style={{
                    display: "inline-block",
                    margin: 1.5
                }} data-tooltip={item.name} data-placement={TooltipPlacement.Bottom}>
                    <Image alt={item.name} height={67.2} width={67.2} src={`${ddragonUrl}/item/${item.id}.png`}
                        style={{
                            border: 2, borderStyle: "solid", borderRadius: 5, borderColor: (() => {
                                switch (index) {
                                    case 0:
                                        return HighlightType.Gold;
                                    case 1:
                                        return HighlightType.Light;
                                    default:
                                        return HighlightType.Black;
                                }
                            })()
                        }} />
                </div>
            ))
            }
        </>
    );
}