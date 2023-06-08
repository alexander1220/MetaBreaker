'use client';

import { Center, VStack } from "@chakra-ui/react";

export default function CenterStackWrapper({ children }: { children: any }) {
    return (
        <Center>
            <VStack>
                {children}
            </VStack>
        </Center>
    );
}