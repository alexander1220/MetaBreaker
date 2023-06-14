'use client';
import { Box, VStack } from "@chakra-ui/react";
import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import ImageWithLoading from "./images/ImageWithLoading";
import { laneMappings } from "./types/Constants";

export function CasinoGeneralDrawer({ casinoItems, size, url, propertyName }: { casinoItems: any[], size: number, url: string, propertyName: string }) {
    const [animChampScope, animateChamp] = useAnimate();
    const durationTime = randomNumber(0, 5) / 10 + 0.5;

    useEffect(() => {
        animateChamp(animChampScope.current, { y: [0, -size * (casinoItems.length - 1)] }, { duration: durationTime, ease: "easeInOut" });
    }, [casinoItems]);

    return (
        <Box h={size + "px"} overflow={'hidden'}>
            <VStack spacing={0} w={size + "px"} ref={animChampScope}>{
                casinoItems.map((rollItem) =>
                    <ImageWithLoading key={rollItem.name} tooltip={rollItem.name} boxSize={size + "px"} src={url + rollItem[propertyName] + '.png'} alt={rollItem.name} />
                )}
            </VStack>
        </Box>
    )
}

export function CasinoLaneDrawer({ casinoItems, size }: { casinoItems: any[], size: number }) {
    const [animChampScope, animateChamp] = useAnimate();
    const durationTime = randomNumber(0, 5) / 10 + 0.5;

    useEffect(() => {
        animateChamp(animChampScope.current, { y: [0, -size * (casinoItems.length - 1)] }, { duration: durationTime, ease: "easeInOut" });
    }, [casinoItems]);

    return (
        <Box h={size + "px"} overflow={'hidden'}>
            <VStack spacing={0} w={size + "px"} ref={animChampScope}>{
                casinoItems.map((rollItem, index) =>
                    <ImageWithLoading key={index} tooltip={rollItem} boxSize={size + "px"} src={`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-${laneMappings.get(rollItem)}-blue.png`} alt={rollItem} />
                )}
            </VStack>
        </Box>
    )
}

function randomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
}