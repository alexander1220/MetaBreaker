"use client";

import { GenerationContext } from "components/providers/GenerationProviderReducer";
import { useContext } from "react";
import { Lane } from "../types/enums/Lane";
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

export function LaneSwitch({ lane, selected }: { lane: Lane, selected: boolean }) {
    let { toggleLane } = useContext(GenerationContext);

    function toggle() {
        toggleLane(lane);
    }
    return (
        <Checkbox type="checkbox" id={`${lane}Switch`} name={`${lane}Switch`} role="switch" isChecked={selected} onChange={toggle} >{lane}</Checkbox>
    );
}

