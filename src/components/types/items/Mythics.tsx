import { Item } from "components/types/Item";
import { LeagueType } from "../enums/LeagueType";
import { Tag } from "../enums/Tag";

export const mythics: Item[] = [

  {
    name: "Shurelya's Battlesong",
    id: 2065,
    tags: [
      Tag.Enchanter_Support,
      Tag.Tank_Support
    ],
    blocking: [],
  },

  {
    name: "Evenshroud",
    id: 3001,
    tags: [
      Tag.Tank
    ],
    blocking: [],
  },

  {
    name: "Infinity Edge",
    id: 3031,
    tags: [
      Tag.Marksman
    ],
    blocking: [
      3124,
      6675
    ]
  },

  {
    name: "Trinity Force",
    id: 3078,
    tags: [Tag.Fighter
    ],
    blocking: [],
  },

  {
    name: "Heartsteel",
    id: 3084,
    tags: [
      Tag.Tank,
      Tag.Tank_Support
    ],
    blocking: [],
  },

  {
    name: "Guinsoo's Rageblade",
    id: 3124,
    tags: [
      Tag.OnHit
    ],
    blocking: [
      3031,
      6675
    ]
  },

  {
    name: "Youmuu's Ghostblade",
    id: 3142,
    tags: [
      Tag.AD_Assassin,
      Tag.Fighter,
      Tag.Assassin_Support
    ],
  },

  {
    name: "Hextech Rocketbelt",
    id: 3152,
    tags: [
      Tag.Mage,
      Tag.AP_Assassin,
      Tag.Mage_Support
    ],
    blocking: [],
  },

  {
    name: "Locket of the Iron Solari",
    id: 3190,
    tags: [
      Tag.Tank,
      Tag.Tank_Support,
      Tag.Enchanter_Support
    ],
    blocking: [],
  },

  {
    name: "Riftmaker",
    id: 4633,
    tags: [
      Tag.Bulk_Mage,
      Tag.Mage,
      Tag.OnHit_Mage
    ],
    blocking: [],
  },

  {
    name: "Night Harvester",
    id: 4636,
    tags: [
      Tag.Mage,
      Tag.Bulk_Mage,
      Tag.OnHit_Mage
    ],
    blocking: [],
  },

  {
    name: "Crown of the Shattered Queen",
    id: 4644,
    tags: [
      Tag.Mage,
      Tag.OnHit_Mage
    ],
    blocking: [],
  },

  {
    name: "Moonstone Renewer",
    id: 6617,
    tags: [
      Tag.Enchanter_Support
    ],
    blocking: [],
  },

  {
    name: "Echoes of Helia",
    id: 6620,
    tags: [
      Tag.Enchanter_Support
    ],
    blocking: [],
  },

  {
    name: "Goredrinker",
    id: 6630,
    tags: [Tag.Fighter,
    Tag.Tank
    ],
    blocking: [],
  },

  {
    name: "Stridebreaker",
    id: 6631,
    tags: [Tag.Fighter
    ],
    blocking: [],
  },

  {
    name: "Divine Sunderer",
    id: 6632,
    tags: [Tag.Fighter
    ],
    blocking: [],
  },

  {
    name: "Liandry's Anguish",
    id: 6653,
    tags: [
      Tag.Mage,
      Tag.Bulk_Mage,
      Tag.Mage_Support
    ],
    blocking: [],
  },

  {
    name: "Luden's Tempest",
    id: 6655,
    tags: [
      Tag.AP_Assassin,
      Tag.Mage_Support
    ],
    blocking: [],
  },

  {
    name: "Everfrost",
    id: 6656,
    tags: [
      Tag.Mage
    ],
    blocking: [],
  },

  {
    name: "Rod of Ages",
    id: 6657,
    tags: [
      Tag.Bulk_Mage
    ],
    blocking: [
      8020
    ]
  },

  {
    name: "Iceborn Gauntlet",
    id: 6662,
    tags: [
      Tag.Tank, Tag.Fighter,
      Tag.Tank_Support
    ],
    blocking: [],
  },

  {
    name: "Jak'Sho, The Protean",
    id: 6665,
    tags: [
      Tag.Tank, Tag.Fighter,
      Tag.Tank_Support
    ],
    blocking: [],
  },

  {
    name: "Radiant Virtue",
    id: 6667,
    tags: [
      Tag.Tank, Tag.Fighter
    ],
    blocking: [],
  },

  {
    name: "Galeforce",
    id: 6671,
    tags: [
      Tag.Marksman,
      Tag.OnHit
    ],
    blocking: [],
  },

  {
    name: "Navori Quickblades",
    id: 6675,
    tags: [
      Tag.AD_Assassin,
      Tag.Marksman
    ],
    blocking: [
      3031,
      3161,
      3124
    ]
  },

  {
    name: "Duskblade of Draktharr",
    id: 6691,
    tags: [
      Tag.AD_Assassin,
      Tag.Assassin_Support
    ],
    blocking: [],
  },

  {
    name: "Eclipse",
    id: 6692,
    tags: [
      Tag.AD_Assassin
    ],
    blocking: [],
  }
];