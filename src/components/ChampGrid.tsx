"use client";
import { useContext } from 'react';
import { ChampionSelectionContext } from './providers/ChampionSelectionProvider';
import SelectableChampion from './SelectableChampion';
import { SimpleGrid, Text } from '@chakra-ui/react';

export default function ChampGrid({ searchString }: { searchString: string }) {
    const { champions } = useContext(ChampionSelectionContext);
    let filteredChamps = champions.filter(champ => searchString !== '' ? champ.name.toLowerCase().startsWith(searchString.toLowerCase()) : true);
    return (
        <>
            {filteredChamps.length > 0 ? <SimpleGrid columns={{ base: 3, md: 6, lg: 8 }} spacing={'5px'}>{filteredChamps.map((champ) => {
                return (
                    <SelectableChampion champ={champ} key={champ.name} selected={champ.selected} />
                )
            })}</SimpleGrid> : <Text maxW={'100%'}>"No champions found"</Text>}
        </>
    )
}