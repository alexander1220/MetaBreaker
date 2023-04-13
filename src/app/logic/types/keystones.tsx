import { Tag } from "./enums";

export interface Keystone {
  name: string;
  iconPath: string;
  id: number;
  tags: Tag[];
  blocking?: number[];
}

export const keystones: Keystone[] = [
  {
    name: "Electrocute",
    iconPath: "domination/electrocute/electrocute",
    id: 8112,
    tags: [
      Tag.AP_Assassin,
      Tag.AD_Assassin
    ],
    blocking: [
      8100
    ]
  },
  {
    name: "Predator",
    iconPath: "domination/predator/predator",
    id: 8124,
    tags: [],
    blocking: [
      8100
    ]
  },
  {
    name: "Dark Harvest",
    iconPath: "domination/darkharvest/darkharvest",
    id: 8128,
    tags: [
      Tag.Mage,
      Tag.Bulk_Mage,
      Tag.AP_Assassin,
      Tag.AD_Assassin,
      Tag.Assassin_Support,
      Tag.Mage_Support
    ],
    blocking: [
      8100
    ]
  },
  {
    name: "Hail of Blades",
    iconPath: "domination/hailofblades/hailofblades",
    id: 9923,
    tags: [
      Tag.Marksman,
      Tag.OnHit,
      Tag.OnHit_Mage,
      Tag.Assassin_Support
    ],
    blocking: [
      8100
    ]
  },
  {
    name: "Glacial Augment",
    iconPath: "inspiration/glacialaugment/glacialaugment",
    id: 8351,
    tags: [
      Tag.Tank_Support,
      Tag.Enchanter_Support
    ],
    blocking: [
      8300
    ]
  },
  {
    name: "Unsealed Spellbook",
    iconPath: "inspiration/unsealedspellbook/unsealedspellbook",
    id: 8360,
    tags: [],
    blocking: [
      8300
    ]
  },
  {
    name: "First Strike",
    iconPath: "inspiration/firststrike/firststrike",
    id: 8369,
    tags: [
      Tag.AP_Assassin,
      Tag.AD_Assassin,
      Tag.Assassin_Support
    ],
    blocking: [
      8300
    ]
  },
  {
    name: "Press the Attack",
    iconPath: "precision/presstheattack/presstheattack",
    id: 8005,
    tags: [
      Tag.Marksman,
      Tag.OnHit
    ],
    blocking: [
      8000
    ]
  },
  {
    name: "Lethal Tempo",
    iconPath: "precision/lethaltempo/lethaltempotemp",
    id: 8008,
    tags: [
      Tag.Marksman,
      Tag.OnHit
    ],
    blocking: [
      8000
    ]
  },
  {
    name: "Fleet Footwork",
    iconPath: "precision/fleetfootwork/fleetfootwork",
    id: 8021,
    tags: [],
    blocking: [
      8000
    ]
  },
  {
    name: "Conqueror",
    iconPath: "precision/conqueror/conqueror",
    id: 8010,
    tags: [Tag.Fighter,
    Tag.Tank,
    Tag.OnHit_Mage
    ],
    blocking: [
      8000
    ]
  },
  {
    name: "Grasp of the Undying",
    iconPath: "resolve/graspoftheundying/graspoftheundying",
    id: 8437,
    tags: [
      Tag.Tank, Tag.Fighter
    ],
    blocking: [
      8400
    ]
  },
  {
    name: "Aftershock",
    iconPath: "resolve/veteranaftershock/veteranaftershock",
    id: 8439,
    tags: [
      Tag.Tank
    ],
    blocking: [
      8400
    ]
  },
  {
    name: "Guardian",
    iconPath: "resolve/guardian/guardian",
    id: 8465,
    tags: [
      Tag.Tank_Support
    ],
    blocking: [
      8400
    ]
  },
  {
    name: "Summon Aery",
    iconPath: "sorcery/summonaery/summonaery",
    id: 8214,
    tags: [
      Tag.Enchanter_Support,
      Tag.Mage_Support
    ],
    blocking: [
      8200
    ]
  },
  {
    name: "Arcane Comet",
    iconPath: "sorcery/arcanecomet/arcanecomet",
    id: 8229,
    tags: [
      Tag.Mage_Support,
      Tag.Mage,
      Tag.Bulk_Mage
    ],
    blocking: [
      8200
    ]
  },
  {
    name: "Phase Rush",
    iconPath: "sorcery/phaserush/phaserush",
    id: 8230,
    tags: [],
    blocking: [
      8200
    ]
  }
];