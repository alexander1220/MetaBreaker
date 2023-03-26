import { LeagueType, Tag } from "./enums";

interface BootItem {
    name: string;
    id: number;
    tags: Tag[];
}

abstract class BootItem implements BootItem {
    type = LeagueType.Item_Boots;
}

export class BerserkersGreaves extends BootItem {
    name = "Berserker's Greaves";
    id = 3006;
    tags = [
        Tag.Fighter,
        Tag.Marksman,
        Tag.OnHit,
        Tag.OnHit_Mage
    ]
};
export class BootsOfSwiftness extends BootItem {
    name = "Boots of Swiftness";
    id = 3009;
    tags = []
};
export class SorcerersShoes extends BootItem {
    name = "Sorcerer's Shoes";
    id = 3020;
    tags = [
        Tag.Mage,
        Tag.Mage_Support,
        Tag.Enchanter_Support,
        Tag.AP_Assassin,
        Tag.OnHit_Mage,
        Tag.Bulk_Mage
    ]
};
export class PlatedSteelcaps extends BootItem {
    name = "Plated Steelcaps";
    id = 3047;
    tags = [
        Tag.Tank,
        Tag.Fighter,
        Tag.OnHit,
        Tag.Bulk_Mage,
        Tag.Tank_Support
    ]
};
export class MercurysTreads extends BootItem {
    name = "Mercury's Treads";
    id = 3111;
    tags = [
        Tag.Tank,
        Tag.Fighter,
        Tag.Bulk_Mage,
        Tag.OnHit,
        Tag.Tank_Support
    ]
};
export class MobilityBoots extends BootItem {
    name = "Mobility Boots";
    id = 3117;
    tags = [
        Tag.Tank_Support,
        Tag.Assassin_Support,
        Tag.AD_Assassin
    ]
};
export class IonianBootsOfLucidity extends BootItem {
    name = "Ionian Boots of Lucidity";
    id = 3158;
    tags = [
        Tag.AD_Assassin,
        Tag.AP_Assassin,
        Tag.Enchanter_Support,
        Tag.Mage_Support,
        Tag.Mage,
        Tag.Bulk_Mage,
        Tag.OnHit_Mage
    ]
};