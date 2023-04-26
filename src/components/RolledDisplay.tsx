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
import ShareButton from "./ShareButton";
import { redirect } from "next/navigation";


const lanesWithoutFill = Object.values(Lane).filter(l => l !== Lane.Fill);
const supportTags = [Tag.Mage_Support, Tag.Assassin_Support, Tag.Enchanter_Support, Tag.Tank_Support];

let rnd: random.RandomSeed;
let rndCalls = 0;

export default function RolledDisplay({ rollingOptions }: { rollingOptions?: RollingOptions }) {
    let selectedSupportChamps,
        rolledLane,
        rolledChampion: null | Champion = null,
        rolledTag,
        rolledStarterItem,
        rolledSummonerSpells,
        rolledItems,
        rolledKeystone,
        rolledRune;

    rndCalls = 0;

    let selectedLanes = lanesWithoutFill;
    let seed: number;

    if (rollingOptions) {
        selectedLanes = Array.from(rollingOptions!.lanes).map(([lane, selected]) => ({ lane, selected })).filter(r => r.selected && r.lane !== Lane.Fill).map(o => o.lane);
        seed = rollingOptions.seed;
        rolledChampion = champions.find(c => c.id === rollingOptions.champId)!;
    }
    else {
        seed = Math.fround(Math.random());
    }
    console.log("seed: " + seed);
    rnd = random.create(seed.toString());

    if (selectedLanes.length === 0) {
        redirect("/");
        alert("You must select at least one lane"); //TODO FIX
    }

    selectedSupportChamps = getSelectedSupportChamps(champions);
    rolledLane = rollLane(selectedSupportChamps, selectedLanes);
    console.log("rolledLane");
    let rollChampionResult = rollChampion(champions, selectedSupportChamps, rolledLane); //roll even if we already have a champion, to make sure the rnd is advanced
    console.log("rollChampionResult");
    rolledChampion = rolledChampion ?? rollChampionResult as Champion;
    rolledTag = rollTag(rolledChampion, rolledLane);
    console.log("rolledTag");
    rolledStarterItem = rollStarterItem(rolledLane, rolledTag);
    console.log("rolledStarterItem");
    rolledSummonerSpells = rollSummonerSpells(rolledChampion, rolledLane, rolledTag);
    console.log("rolledSummonerSpells");
    rolledItems = rollItems(rolledChampion, rolledLane, rolledTag);
    console.log("rolledItems");
    rolledKeystone = rollKeyStone(rolledTag);
    console.log("rolledKeystone");
    rolledRune = rollRune(rolledTag, rolledKeystone);
    console.log("rolledRune");

    return (
        <>
            <ShareButton path={getUrlPath()} />
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

    function getUrlPath() {
        const buffer = Buffer.alloc(6);
        let lanebyte = 0x0;
        for (let i = 0; i < lanesWithoutFill.length; i++) {
            lanebyte |= 1 << i;
        }
        buffer.writeInt8(lanebyte);
        buffer.writeFloatBE(seed, 1);
        buffer.writeUInt8(rolledChampion!.id, 5);
        const encoded = buffer.toString("base64url");
        return encoded;
    }
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
    console.log("random call #" + rndCalls++);
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