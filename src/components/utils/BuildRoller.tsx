import { Champion } from "../types/Champions";
import { Lane } from "../types/enums/Lane";
import * as random from "random-seed";
import { Item } from "../types/Item";
import { boots } from "../types/items/Boots";
import { legendaryItems } from "../types/items/Legendaries";
import { mythics } from "../types/items/Mythics";
import { keystones, Keystone } from "../types/Keystones";
import { runes } from "../types/Runes";
import { starterItems } from "../types/StarterItems";
import { summonerSpells, SummonerSpell } from "../types/Summoners";
import { Tag } from "../types/enums/Tag";
import { RollingOptions } from "./RollingOptionsReader";

const supportTags = [Tag.Mage_Support, Tag.Assassin_Support, Tag.Enchanter_Support, Tag.Tank_Support];

let rnd: random.RandomSeed;

export function rollBuild(selectedChampions: Champion[], options?: RollingOptions, selectedLanes?: Lane[]) {
    let selectedSupportChamps,
        rolledLane,
        rolledChampion: null | Champion = null,
        rolledTag,
        rolledStarterItem,
        rolledSummonerSpells,
        rolledItems,
        rolledKeystone,
        rolledRune,
        lanesForRolling,
        seed;
    //map to required type

    if (options) {
        lanesForRolling = Array.from(options.lanes).map(([lane, selected]) => ({ lane, selected })).filter(r => r.selected && r.lane !== Lane.Fill).map(o => o.lane);
        seed = options.seed;
        rolledChampion = selectedChampions.find(c => c.id === options.champId)!;
    }
    else {
        if (!selectedLanes)
            throw new Error('selectedLanes is required if options is not provided');
        lanesForRolling = selectedLanes;
        seed = Math.fround(Math.random());
    }

    rnd = random.create(seed.toString());


    selectedSupportChamps = getSelectedSupportChamps(selectedChampions);
    rolledLane = rollLane(selectedSupportChamps, lanesForRolling);


    let rollChampionResult = rollChampion(selectedChampions, selectedSupportChamps, rolledLane); //roll even if we already have a champion, to make sure the rnd is advanced

    rolledChampion = rolledChampion ?? rollChampionResult as Champion;

    rolledTag = rollTag(rolledChampion, rolledLane);

    rolledStarterItem = rollStarterItem(rolledLane, rolledTag);

    rolledSummonerSpells = rollSummonerSpells(rolledChampion, rolledLane, rolledTag);

    rolledItems = rollItems(rolledChampion, rolledLane, rolledTag);

    rolledKeystone = rollKeyStone(rolledTag);

    rolledRune = rollRune(rolledTag, rolledKeystone);

    return {
        lane: rolledLane,
        champion: rolledChampion,
        tag: rolledTag,
        starterItem: rolledStarterItem,
        summonerSpells: rolledSummonerSpells,
        items: rolledItems,
        keystone: rolledKeystone,
        rune: rolledRune,
        lanesForRolling,
        seed
    };
}

function rollLane(selectedSupportChamps: Champion[], selectedLanes: Lane[]) {
    let availableselectedLanes = selectedSupportChamps.length > 0 ? selectedLanes : selectedLanes.filter(lane => lane !== Lane.Support);

    if (availableselectedLanes.length === 0) {
        alert('There is no champion for this specific role selected. Don\'t troll too hard!');
        return;
    }

    return getRandomElement(availableselectedLanes);
}

function rollChampion(selectedChampions: Champion[], selectedSupportChamps: Champion[], rolledLane: Lane) {
    if (rolledLane === Lane.Support) {
        return getRandomElement(selectedSupportChamps);
    }
    return getRandomElement(selectedChampions);
}

function rollTag(rolledChampion: Champion, rolledLane: Lane) {
    if (rolledLane === Lane.Support) {
        return getRandomElement(rolledChampion.tags.filter(tag => supportTags.includes(tag)));
    }
    return getRandomElement(rolledChampion.tags.filter(tag => !supportTags.includes(tag)));
}

function rollStarterItem(rolledLane: Lane, rolledTag: Tag) {
    return getRandomElement(starterItems.filter(item => item.tags.includes(rolledLane === Lane.Jungle ? Tag.Jungle : rolledTag)));
}

function rollSummonerSpells(rolledChampion: Champion, rolledLane: Lane, rolledTag: Tag) {
    let possibleSummonerSpells = summonerSpells.filter(spell => spell.name !== 'Flash' && spell.tags.includes(rolledTag));
    let rolledSummonerSpells = [] as SummonerSpell[];
    rolledSummonerSpells.push(rolledLane === Lane.Jungle ?
        summonerSpells.find(spell => spell.name === 'Smite')! :
        getRandomElement(possibleSummonerSpells));

    if (!isYuumiSupport(rolledChampion, rolledLane)) {
        rolledSummonerSpells.push(summonerSpells.find(spell => spell.name === 'Flash')!);
    }
    else {
        rolledSummonerSpells.push(getRandomElement(possibleSummonerSpells.filter(spell => spell !== rolledSummonerSpells[0])));
    }
    return rolledSummonerSpells;
}

function getSelectedSupportChamps(selectedChampions: Champion[]) {
    return selectedChampions.filter(c => c.tags.some(tag => supportTags.includes(tag)));
}

function getRandomElement(items: any[]) {
    return items[rnd(items.length)];
}

function isYuumiSupport(rolledChampion: Champion, rolledLane: Lane) {
    return rolledChampion.name === 'Yuumi' && rolledLane === Lane.Support;
}

// write the method to generate all 6 items (mythic, boots, 4 items)

function rollItems(rolledChampion: Champion, rolledLane: Lane, rolledTag: Tag): Item[] {
    let items = [] as Item[];

    //roll mythic
    items.push(getRandomElement(mythics.filter(item => item.tags.includes(rolledTag))));

    //roll boots if not cassiopeia or yuumi support
    if (!(rolledChampion.name === "Cassiopeia" || isYuumiSupport(rolledChampion, rolledLane))) {
        items.push(getRandomElement(boots.filter(item => item.tags.includes(rolledTag))));
    }

    //roll the rest of the items
    while (items.length < 6) {
        items.push(getRandomElement(legendaryItems.filter(item =>
            !getBlockedItemIds(items).includes(item.id) &&
            !items.includes(item) &&
            item.tags.includes(rolledTag)))
        );
    }

    return items;
}

function rollKeyStone(rolledTag: Tag) {
    return getRandomElement(keystones.filter(keystone => keystone.tags.includes(rolledTag)));
}

function rollRune(rolledTag: Tag, rolledKeyStone: Keystone) {
    return getRandomElement(runes.filter(rune => !rolledKeyStone.blocking?.includes(rune.id) && rune.tags.includes(rolledTag)));
}

function getBlockedItemIds(items: Item[]) {
    return items.map(item => item.blocking).flat().filter(Number);
}