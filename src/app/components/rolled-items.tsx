"use client";

import Image from "next/image";
import { useContext } from "react";
import Element, { ElementType, HighlightType, TooltipPlacement } from "./element";
import { GenerationContext } from "./generation/generation-provider";

export default function RolledItems() {
    let { rolledItems } = useContext(GenerationContext);

    return (
        <>
            {rolledItems.map((item, index) => (

                <div key={item.id} style={{
                    display: "inline-block",
                    margin: 1.5
                }} data-tooltip={item.name} data-placement={TooltipPlacement.Bottom}>
                    <Image alt={item.name} height={67.2} width={67.2} src={`https://ddragon.leagueoflegends.com/cdn/13.3.1/img/item/${item.id}.png`}
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