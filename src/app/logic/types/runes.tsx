import { Tag, LeagueType } from "./enums";

interface Rune {
  name: string;
  id: number;
  iconUrl: string;
  tags: Tag[];
  blocking: number[];
  type: LeagueType;
}

abstract class Rune implements Rune {
  type = LeagueType.Rune;
}

export class Domination extends Rune {
  name = "Domination";
  id = 8100;
  tags = [
    Tag.Fighter,
    Tag.Mage,
    Tag.Bulk_Mage,
    Tag.AP_Assassin,
    Tag.AD_Assassin,
    Tag.OnHit,
    Tag.OnHit_Mage,
    Tag.Mage_Support,
    Tag.Assassin_Support,
    Tag.Marksman
  ];
  blocking = []
};
export class Inspiration extends Rune {
  name = "Inspiration";
  id = 8300;
  tags = [
    Tag.AD_Assassin,
    Tag.AP_Assassin,
    Tag.Enchanter_Support,
    Tag.Mage_Support,
    Tag.Tank_Support
  ];
  blocking = []
};
export class Precision extends Rune {
  name = "Precision";
  id = 8000;
  tags = [
    Tag.Fighter,
    Tag.Mage,
    Tag.Bulk_Mage,
    Tag.AP_Assassin,
    Tag.AD_Assassin,
    Tag.Marksman,
    Tag.OnHit,
    Tag.Tank,
    Tag.Enchanter_Support,
    Tag.Tank_Support,
    Tag.Assassin_Support,
    Tag.Mage_Support,
    Tag.OnHit_Mage
  ];
  blocking = []
};
export class Resolve extends Rune {
  name = "Resolve";
  id = 8400;
  tags = [Tag.Fighter,
  Tag.Bulk_Mage,
  Tag.Tank,
  Tag.Tank_Support
  ];
  blocking = []
};
export class Sorcery extends Rune {
  name = "Sorcery";
  id = 8200;
  tags = [
    Tag.Mage,
    Tag.Bulk_Mage,
    Tag.AP_Assassin,
    Tag.Enchanter_Support,
    Tag.Mage_Support,
    Tag.OnHit_Mage
  ];
  blocking = []
};