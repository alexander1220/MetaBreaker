'use client';
import { Box, Heading, VStack } from "@chakra-ui/react";
import { useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import ImageWithLoading from "./images/ImageWithLoading";
import { laneMappings } from "./types/Constants";

export function CasinoGeneralDrawer({ casinoItems, size, url, propertyName }: { casinoItems: any[], size: number, url: string, propertyName: string }) {
    const [animationScope, animate] = useAnimate();
    const durationTime = randomNumber(0, 5) / 10 + 0.5;

    useEffect(() => {
        animate(animationScope.current, { y: [0, -size * (casinoItems.length - 1)] }, { duration: durationTime, ease: "easeInOut" });
    }, [casinoItems]);

    return (
        <Box h={size + "px"} overflow={'hidden'}>
            {/* <VStack spacing={0} w={size + "px"} ref={animationScope}>{
                casinoItems.map((rollItem, index) =>
                    //is the key really correct? {rollItem.name} seems to be slower thatn {index} (they cant be reused anyway because there are no duplicates in each roll no?) 
                    <ImageWithLoading key={index} tooltip={rollItem.name} boxSize={size + "px"} src={url + rollItem[propertyName] + '.png'} alt={rollItem.name} />
                )}
            </VStack> */}
        </Box>
    )
}

export function CasinoLaneDrawer({ casinoItems, size }: { casinoItems: any[], size: number }) {
    const [animationScope, animate] = useAnimate();
    const durationTime = randomNumber(0, 5) / 10 + 0.5;

    useEffect(() => {
        animate(animationScope.current, { y: [0, -size * (casinoItems.length - 1)] }, { duration: durationTime, ease: "easeInOut" });
    }, [casinoItems]);

    return (
        <Box h={size + "px"} overflow={'hidden'}>
            {/* <VStack spacing={0} w={size + "px"} ref={animationScope}>{
                casinoItems.map((rollItem, index) =>
                    <ImageWithLoading key={index} tooltip={rollItem} boxSize={size + "px"} src={`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-${laneMappings.get(rollItem)}-blue.png`} alt={rollItem} />
                )}
            </VStack> */}
        </Box>
    )
}

export function CasinoNameDrawer({ casinoItems }: { casinoItems: string[] }) {
    const [text, setText] = useState(casinoItems[0]);

    useEffect(() => {
        changeText(1);
    }, [casinoItems]);

    function changeText(index: number) {
        setTimeout(() => {
            if (index < casinoItems.length) {
                setText(casinoItems[index])
                changeText(index + 1);
            }
        }, index * (index / 1.4) * 10);
    }

    return (
        <Heading>{text}</Heading>
    )
}

function randomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
}