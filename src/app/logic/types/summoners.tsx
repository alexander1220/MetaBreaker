import { Tag } from "./enums"

interface SummonerSpell {
  name: string;
  tags: Tag[];
  id: number;
}

export class Ghost implements SummonerSpell {
  name = "SummonerHaste";
  tags = [
    Tag.Fighter,
    Tag.Tank,
    Tag.OnHit,
    Tag.OnHit_Mage,
    Tag.Marksman
  ];
  id = 6
};
export class Heal implements SummonerSpell {
  name = "SummonerHeal";
  tags = [
    Tag.Marksman,
    Tag.Assassin_Support,
    Tag.Enchanter_Support
  ];
  id = 7
};
export class Barrier implements SummonerSpell {
  name = "SummonerBarrier";
  tags = [
    Tag.Marksman,
    Tag.Mage
  ];
  id = 21
};
export class Exhaust implements SummonerSpell {
  name = "SummonerExhaust";
  tags = [
    Tag.Marksman,
    Tag.Mage,
    Tag.Mage_Support,
    Tag.Tank_Support,
    Tag.Enchanter_Support,
    Tag.Assassin_Support,
    Tag.OnHit,
    Tag.Tank,
    Tag.OnHit_Mage
  ];
  id = 3
};
export class Clarity implements SummonerSpell {
  name = "SummonerMana";
  tags = [];
  id = 13
};
export class Flash implements SummonerSpell {
  name = "SummonerFlash";
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
    Tag.Jungle,
    Tag.OnHit_Mage
  ];
  id = 4
};
export class Teleport implements SummonerSpell {
  name = "SummonerTeleport";
  tags = [
    Tag.Fighter,
    Tag.Mage,
    Tag.Tank,
    Tag.Bulk_Mage
  ];
  id = 12
};
export class Cleanse implements SummonerSpell {
  name = "SummonerBoost";
  tags = [
    Tag.Mage,
    Tag.Marksman,
    Tag.AP_Assassin,
    Tag.OnHit,
    Tag.OnHit_Mage
  ];
  id = 1
};
export class Ignite implements SummonerSpell {
  name = "SummonerDot";
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
  id = 14
};
export class Smite implements SummonerSpell {
  name = "SummonerSmite";
  tags = [
    Tag.Jungle
  ];
  id = 11
};