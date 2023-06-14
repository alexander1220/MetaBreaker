'use client';

import { Box, VStack } from "@chakra-ui/react";
import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import ImageWithLoading from "./images/ImageWithLoading";
import { ddragonUrl } from "./types/Constants";

export default function CasinoChampDrawer({ casinoItems, size }: { casinoItems: any[], size: number }) {

    const [animChampScope, animateChamp] = useAnimate();
    const durationTime = randomNumber(0, 10) / 10 + 1;
    useEffect(() => {
        animateChamp(animChampScope.current, { y: [0, -size * (casinoItems.length - 1)] }, { duration: durationTime, ease: "easeInOut" });
    }, [casinoItems]);

    return (
        <Box h={size + "px"} overflow={'hidden'}>
            <VStack spacing={0} w={size + "px"} ref={animChampScope}>{
                casinoItems.map((rollItem, index) =>
                    <ImageWithLoading key={rollItem.name} tooltip={rollItem.name} boxSize={size + "px"} src={`${ddragonUrl}/champion/${rollItem.normalizedName}.png`} alt={rollItem.name} />
                )}</VStack>
        </Box>
    )
}

export function CasinoItemDrawer({ casinoItems, size }: { casinoItems: any[], size: number }) {

    const [animChampScope, animateChamp] = useAnimate();
    const durationTime = randomNumber(0, 10) / 10 + 1;

    useEffect(() => {
        animateChamp(animChampScope.current, { y: [0, -size * (casinoItems.length - 1)] }, { duration: durationTime, ease: "easeInOut" });
    }, [casinoItems]);

    return (
        <Box h={size + "px"} overflow={'hidden'}>
            <VStack spacing={0} w={size + "px"} ref={animChampScope}>{
                casinoItems.map((rollItem, index) =>
                    <ImageWithLoading key={rollItem.name} tooltip={rollItem.name} boxSize={size + "px"} src={`${ddragonUrl}/item/${rollItem.id}.png`} alt={rollItem.name} />
                )}</VStack>
        </Box>
    )
}

function randomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
}