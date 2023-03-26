import { Tag, LeagueType } from "./enums";

interface Keystone {
  name: string;
  id: number;
  iconUrl: string;
  tags: Tag[];
  blocking: number[];
  type: LeagueType;
}

abstract class Keystone implements Keystone {
  type = LeagueType.Keystone;
  iconUrl = `perk-images/Styles/Domination/${this.name}/${this.name}.png`;
}

export class Electrocute extends Keystone {
  name = "Electrocute";
  id = 8112;
  tags = [
    Tag.AP_Assassin,
    Tag.AD_Assassin
  ];
  blocking = [
    8100
  ]
};

export class Predator extends Keystone {
  name = "Predator";
  id = 8124;
  tags = [];
  blocking = [
    8100
  ]
};

export class DarkHarvest extends Keystone {
  name = "Dark Harvest";
  id = 8128;
  tags = [
    Tag.Mage,
    Tag.Bulk_Mage,
    Tag.AP_Assassin,
    Tag.AD_Assassin,
    Tag.Assassin_Support,
    Tag.Mage_Support
  ];
  blocking = [
    8100
  ]
};

export class HailOfBlades extends Keystone {
  name = "Hail of Blades";
  id = 9923;
  tags = [
    Tag.Marksman,
    Tag.OnHit,
    Tag.OnHit_Mage,
    Tag.Assassin_Support
  ];
  blocking = [
    8100
  ]
};

export class GlacialAugment extends Keystone {
  name = "Glacial Augment";
  id = 8351;
  tags = [
    Tag.Tank_Support,
    Tag.Enchanter_Support
  ];
  blocking = [
    8300
  ]
};

export class UnsealedSpellbook extends Keystone {
  name = "Unsealed Spellbook";
  id = 8360;
  tags = [];
  blocking = [
    8300
  ]
};

export class FirstStrike extends Keystone {
  name = "First Strike";
  id = 8369;
  tags = [
    Tag.AP_Assassin,
    Tag.AD_Assassin,
    Tag.Assassin_Support
  ];
  blocking = [
    8300
  ]
};

export class PressTheAttack extends Keystone {
  name = "Press the Attack";
  id = 8005;
  tags = [
    Tag.Marksman,
    Tag.OnHit
  ];
  blocking = [
    8000
  ]
};

export class LethalTempo extends Keystone {
  name = "Lethal Tempo";
  id = 8008;
  tags = [
    Tag.Marksman,
    Tag.OnHit
  ];
  blocking = [
    8000
  ]
};

export class FleetFootwork extends Keystone {
  name = "Fleet Footwork";
  id = 8021;
  tags = [];
  blocking = [
    8000
  ]
};

export class Conqueror extends Keystone {
  name = "Conqueror";
  id = 8010;
  tags = [Tag.Fighter,
  Tag.Tank,
  Tag.OnHit_Mage
  ];
  blocking = [
    8000
  ]
};

export class GraspOfTheUndying extends Keystone {
  name = "Grasp of the Undying";
  id = 8437;
  tags = [
    Tag.Tank, Tag.Fighter
  ];
  blocking = [
    8400
  ]
};

export class Aftershock extends Keystone {
  name = "Aftershock";
  id = 8439;
  tags = [
    Tag.Tank
  ];
  blocking = [
    8400
  ]
};

export class Guardian extends Keystone {
  name = "Guardian";
  id = 8465;
  tags = [
    Tag.Tank_Support
  ];
  blocking = [
    8400
  ]
};

export class SummonAery extends Keystone {
  name = "Summon Aery";
  id = 8214;
  tags = [
    Tag.Enchanter_Support,
    Tag.Mage_Support
  ];
  blocking = [
    8200
  ]
};

export class ArcaneComet extends Keystone {
  name = "Arcane Comet";
  id = 8229;
  tags = [
    Tag.Mage_Support,
    Tag.Mage,
    Tag.Bulk_Mage
  ];
  blocking = [
    8200
  ]
};

export class PhaseRush extends Keystone {
  name = "Phase Rush";
  id = 8230;
  tags = [];
  blocking = [
    8200
  ]
};