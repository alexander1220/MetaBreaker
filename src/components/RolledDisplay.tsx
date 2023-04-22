import RolledBuildDescription from "./RolledBuildDescription";
import RolledChampion from "./RolledChampion";
import RolledItems from "./RolledItems";
import RolledLane from "./RolledLane";
import RolledRunes from "./RolledRunes";
import RolledSummonerSpell from "./RolledSummonerSpell";
import RolledStarterItem from "./RolledStarterItem";
import { Item } from "./providers/GenerationProviderReducer";
import { Champion, champions } from "./types/Champions";
import { Lane } from "./types/enums/Lane";
import { Tag } from "./types/enums/Tag";
import { boots } from "./types/items/Boots";
import { legendaryItems } from "./types/items/Legendaries";
import { mythics } from "./types/items/Mythics";
import { keystones, Keystone } from "./types/Keystones";
import { runes } from "./types/Runes";
import { starterItems } from "./types/StarterItems";
import { summonerSpells, SummonerSpell } from "./types/Summoners";
import * as random from "random-seed";
import { RollingOptions } from "app/[[...options]]/page";


const supportTags = [Tag.Mage_Support, Tag.Assassin_Support, Tag.Enchanter_Support, Tag.Tank_Support];

let rnd: random.RandomSeed;

export default function RolledDisplay({ rollingOptions }: { rollingOptions?: RollingOptions }) {
    let selectedSupportChamps,
        rolledLane,
        rolledChampion,
        rolledTag,
        rolledStarterItem,
        rolledSummonerSpells,
        rolledItems,
        rolledKeystone,
        rolledRune;

    if (rollingOptions === undefined) {
        return;
    }

    const selectedLanes = Array.from(rollingOptions!.lanes).map(([lane, selected]) => ({ lane, selected })).filter(r => r.selected && r.lane !== Lane.Fill).map(o => o.lane);
    rnd = random.create(rollingOptions.seed);

    if (selectedLanes.length === 0) {
        console.error('Please select at least one lane');
        return;
    }

    selectedSupportChamps = getSelectedSupportChamps(champions);
    rolledLane = rollLane(selectedSupportChamps, selectedLanes);
    rolledChampion = rollChampion(champions, selectedSupportChamps, rolledLane);
    rolledTag = rollTag(rolledChampion, rolledLane);
    rolledStarterItem = rollStarterItem(rolledLane, rolledTag);
    rolledSummonerSpells = rollSummonerSpells(rolledChampion, rolledLane, rolledTag);
    rolledItems = rollItems(rolledChampion, rolledLane, rolledTag);
    rolledKeystone = rollKeyStone(rolledTag);
    rolledRune = rollRune(rolledTag, rolledKeystone);

    return (
        <>
            <div className="container">
                <table>
                    <tbody>
                        <tr>
                            <td colSpan={2} rowSpan={2}>
                                <RolledChampion champion={rolledChampion} />
                            </td>
                            <td>
                                <RolledBuildDescription champion={rolledChampion} tag={rolledTag} />
                                <RolledStarterItem starterItem={rolledStarterItem} />
                            </td>
                            <td style={{ textAlign: "right" }}>
                                <RolledLane lane={rolledLane} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} id="itemslots">
                                <RolledItems items={rolledItems} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <RolledSummonerSpell summonerSpell={rolledSummonerSpells[1]} />
                            </td>
                            <td colSpan={2} rowSpan={2} style={{ textAlign: "right" }}>
                                <RolledRunes keystone={rolledKeystone} rune={rolledRune} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <RolledSummonerSpell summonerSpell={rolledSummonerSpells[0]} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}


function rollLane(selectedSupportChamps: Champion[], selectedselectedLanes: Lane[]) {
    let availableselectedLanes = selectedSupportChamps.length > 0 ? selectedselectedLanes : selectedselectedLanes.filter(lane => lane !== Lane.Support);

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
    return items[rnd(items.length - 1)];
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