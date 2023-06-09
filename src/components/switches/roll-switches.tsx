"use client";
import { GenerationContext } from "components/providers/GenerationProviderReducer";
import { useContext } from "react";
import { LaneSwitch } from "./lane-switch";
import { Flex } from "@chakra-ui/react";

export default function RollSwitches() {
    const { selectedLanes } = useContext(GenerationContext);
    return (
        <Flex justifyContent={'space-between'} w={'100%'}>
            {selectedLanes.map(selectedLanes => <LaneSwitch key={selectedLanes.lane} lane={selectedLanes.lane} selected={selectedLanes.selected} />)}
        </Flex>
    );
}