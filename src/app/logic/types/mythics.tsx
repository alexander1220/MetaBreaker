import { Tag, LeagueType } from "./enums";

interface Mythic {
  name: string;
  id: number;
  tags: Tag[];
  blocking: number[];
  type: LeagueType;
}

abstract class Mythic implements Mythic {
  type = LeagueType.Item_Mythic;
}

export class ShurelyasBattlesong extends Mythic {
  name = "Shurelya's Battlesong";
  id = 2065;
  tags = [
    Tag.Enchanter_Support,
    Tag.Tank_Support
  ];
};

export class Evenshroud extends Mythic {
  name = "Evenshroud";
  id = 3001;
  tags = [
    Tag.Tank
  ];
};

export class TrinityForce extends Mythic {
  name = "Trinity Force";
  id = 3078;
  tags = [Tag.Fighter
  ];
};

export class Heartsteel extends Mythic {
  name = "Heartsteel";
  id = 3084;
  tags = [
    Tag.Tank,
    Tag.Tank_Support
  ];
};

export class HextechRocketbelt extends Mythic {
  name = "Hextech Rocketbelt";
  id = 3152;
  tags = [
    Tag.Mage,
    Tag.AP_Assassin,
    Tag.Mage_Support
  ];
};

export class LocketOfTheIronSolari extends Mythic {
  name = "Locket of the Iron Solari";
  id = 3190;
  tags = [
    Tag.Tank,
    Tag.Tank_Support,
    Tag.Enchanter_Support
  ];
};

export class ImperialMandate extends Mythic {
  name = "Imperial Mandate";
  id = 4005;
  tags = [
    Tag.Mage_Support,
    Tag.Enchanter_Support
  ];
};

export class Riftmaker extends Mythic {
  name = "Riftmaker";
  id = 4633;
  tags = [
    Tag.Bulk_Mage,
    Tag.Mage,
    Tag.OnHit_Mage
  ];
};

export class NightHarvester extends Mythic {
  name = "Night Harvester";
  id = 4636;
  tags = [
    Tag.Mage,
    Tag.Bulk_Mage,
    Tag.OnHit_Mage
  ];
};

export class CrownOfTheShatteredQueen extends Mythic {
  name = "Crown of the Shattered Queen";
  id = 4644;
  tags = [
    Tag.Mage,
    Tag.OnHit_Mage
  ];
};

export class MoonstoneRenewer extends Mythic {
  name = "Moonstone Renewer";
  id = 6617;
  tags = [
    Tag.Enchanter_Support
  ];
};

export class Goredrinker extends Mythic {
  name = "Goredrinker";
  id = 6630;
  tags = [Tag.Fighter,
  Tag.Tank
  ];
};

export class Stridebreaker extends Mythic {
  name = "Stridebreaker";
  id = 6631;
  tags = [Tag.Fighter
  ];
};

export class DivineSunderer extends Mythic {
  name = "Divine Sunderer";
  id = 6632;
  tags = [Tag.Fighter
  ];
};

export class LiandrysAnguish extends Mythic {
  name = "Liandry's Anguish";
  id = 6653;
  tags = [
    Tag.Mage,
    Tag.Bulk_Mage,
    Tag.Mage_Support
  ];
};

export class LudensTempest extends Mythic {
  name = "Luden's Tempest";
  id = 6655;
  tags = [
    Tag.AP_Assassin,
    Tag.Mage_Support
  ];
};

export class Everfrost extends Mythic {
  name = "Everfrost";
  id = 6656;
  tags = [
    Tag.Mage
  ];
};

export class RodOfAges extends Mythic {
  name = "Rod of Ages";
  id = 6657;
  tags = [
    Tag.Bulk_Mage
  ];
  blocking = [
    8020
  ]
};

export class IcebornGauntlet extends Mythic {
  name = "Iceborn Gauntlet";
  id = 6662;
  tags = [
    Tag.Tank, Tag.Fighter,
    Tag.Tank_Support
  ];
};

export class JakshoTheProtean extends Mythic {
  name = "Jak'Sho, The Protean";
  id = 6665;
  tags = [
    Tag.Tank, Tag.Fighter,
    Tag.Tank_Support
  ];
};

export class RadiantVirtue extends Mythic {
  name = "Radiant Virtue";
  id = 6667;
  tags = [
    Tag.Tank, Tag.Fighter
  ];
};

export class Galeforce extends Mythic {
  name = "Galeforce";
  id = 6671;
  tags = [
    Tag.Marksman,
    Tag.OnHit
  ];
};

export class KrakenSlayer extends Mythic {
  name = "Kraken Slayer";
  id = 6672;
  tags = [
    Tag.Marksman,
    Tag.OnHit
  ];
};

export class ImmortalShieldbow extends Mythic {
  name = "Immortal Shieldbow";
  id = 6673;
  tags = [
    Tag.Marksman
  ];
  blocking = [
    3003,
    3156,
    3053
  ]
};

export class DuskbladeOfDraktharr extends Mythic {
  name = "Duskblade of Draktharr";
  id = 6691;
  tags = [
    Tag.AD_Assassin,
    Tag.Assassin_Support
  ];
};

export class Eclipse extends Mythic {
  name = "Eclipse";
  id = 6692;
  tags = [
    Tag.AD_Assassin
  ];
};

export class ProwlersClaw extends Mythic {
  name = "Prowler's Claw";
  id = 6693;
  tags = [
    Tag.AD_Assassin,
    Tag.Assassin_Support
  ];
};