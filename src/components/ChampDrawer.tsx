"use client";
import { useImmer } from 'use-immer';
import ChampGrid from './ChampGrid';
import { Button, HStack, Input } from '@chakra-ui/react'
import { ChampionSelectionContext } from "components/providers/ChampionSelectionProvider";
import { useContext } from "react";

export default function ChampDrawer() {
    const [searchValue, updateSearchValue] = useImmer('');
    let { selectAll, deselectAll } = useContext(ChampionSelectionContext);
    return (
        <>
            <HStack w={'100%'}>
                <Input placeholder='Filter for champions ...' w={'100%'} onChange={(event) => { updateSearchValue(event.target.value) }} />
                <HStack display={{ base: 'none', md: 'inline-flex' }}>
                    <Button onClick={selectAll}>Select All</Button>
                    <Button onClick={deselectAll}>Deselect All</Button>
                </HStack>
            </HStack>
            <HStack w={'100%'} display={{ base: 'inline-flex', md: 'none' }}>
                <Button w={'100%'} onClick={selectAll}>Select All</Button>
                <Button w={'100%'} onClick={deselectAll}>Deselect All</Button>
            </HStack>
            <ChampGrid searchString={searchValue} />
        </>
    );
}