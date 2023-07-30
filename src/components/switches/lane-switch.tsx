"use client";

import { GenerationContext } from "components/providers/GenerationProviderReducer";
import { useContext } from "react";
import { Lane } from "../types/enums/Lane";
import { Image, Tooltip } from '@chakra-ui/react'

const laneMappings = new Map([
    [Lane.Top, "top"],
    [Lane.Jungle, "jungle"],
    [Lane.Mid, "middle"],
    [Lane.Adc, "bottom"],
    [Lane.Support, "utility"],
    [Lane.Fill, "fill"],
]);

export function LaneSwitch({ lane, selected }: { lane: Lane, selected: boolean }) {
    let { toggleLane } = useContext(GenerationContext);

    function toggle() {
        toggleLane(lane);
    }
    //<Checkbox type="checkbox" id={`${lane}Switch`} name={`${lane}Switch`} role="switch" isChecked={selected} onChange={toggle} >{lane}</Checkbox>
    //`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-${laneMappings.get(rolledBuild.lane)}-blue.png`
    const src = `https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-${laneMappings.get(lane)}-blue.png`
    return (
        <Tooltip label={lane}>
            <Image _hover={{ cursor: 'pointer' }} boxSize={'50px'} id={`${lane}Switch`} filter={selected ? 'none' : 'grayscale(100%)'} src={src} onClick={toggle} transition={'all 0.1s ease-out'} />
        </Tooltip>
    );
}

