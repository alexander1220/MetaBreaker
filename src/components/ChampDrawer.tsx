"use client";
import { useImmer } from 'use-immer';
import ChampGrid from './ChampGrid';
import ChampSelectionButtons from './buttons/ChampSelectionButtons';
import { Button, HStack, Input } from '@chakra-ui/react'
import { ChampionSelectionContext } from "components/providers/ChampionSelectionProvider";
import { useContext } from "react";

export default function ChampDrawer() {
    const [searchValue, updateSearchValue] = useImmer('');
    let { selectAll, deselectAll } = useContext(ChampionSelectionContext);
    return (
        <>
            <HStack w={'100%'}>
                <Input placeholder='Champion name...' w={'100%'} onChange={(event) => { updateSearchValue(event.target.value) }} />
                <Button onClick={selectAll}>Select All</Button>
                <Button onClick={deselectAll}>Deselect All</Button>
            </HStack>
            <ChampGrid searchString={searchValue} />
        </>
    );
}