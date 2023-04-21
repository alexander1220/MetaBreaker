import { Item } from "components/providers/GenerationProvider";
import { Tag } from "../enums/Tag";

export const boots: Item[] = [{
    name: "Berserker's Greaves",
    id: 3006,
    tags: [
        Tag.Fighter,
        Tag.Marksman,
        Tag.OnHit,
        Tag.OnHit_Mage
    ]
},
{
    name: "Boots of Swiftness",
    id: 3009,
    tags: []
},
{
    name: "Sorcerer's Shoes",
    id: 3020,
    tags: [
        Tag.Mage,
        Tag.Mage_Support,
        Tag.Enchanter_Support,
        Tag.AP_Assassin,
        Tag.OnHit_Mage,
        Tag.Bulk_Mage
    ]
},
{
    name: "Plated Steelcaps",
    id: 3047,
    tags: [
        Tag.Tank,
        Tag.Fighter,
        Tag.OnHit,
        Tag.Bulk_Mage,
        Tag.Tank_Support
    ]
},
{
    name: "Mercury's Treads",
    id: 3111,
    tags: [
        Tag.Tank,
        Tag.Fighter,
        Tag.Bulk_Mage,
        Tag.OnHit,
        Tag.Tank_Support
    ]
},
{
    name: "Mobility Boots",
    id: 3117,
    tags: [
        Tag.Tank_Support,
        Tag.Assassin_Support,
        Tag.AD_Assassin
    ]
},
{
    name: "Ionian Boots of Lucidity",
    id: 3158,
    tags: [
        Tag.AD_Assassin,
        Tag.AP_Assassin,
        Tag.Enchanter_Support,
        Tag.Mage_Support,
        Tag.Mage,
        Tag.Bulk_Mage,
        Tag.OnHit_Mage
    ]
}
];