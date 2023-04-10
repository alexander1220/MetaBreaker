import { Tag, LeagueType } from "../enums";

interface LegendaryItem {
  name: string;
  id: number;
  tags: Tag[];
  blocking?: number[];
}

export const legendaryItems: LegendaryItem[] = [{
  name: "Archangel's Staff",
  id: 3003,
  tags: [
    Tag.Bulk_Mage,
    Tag.Mage,
    Tag.Mage_Support
  ],
  blocking: [
    3004,
    3053,
    3119,
    3156,
    6673
  ]
},

{
  name: "Manamune",
  id: 3004,
  tags: [
    Tag.AD_Assassin,
    Tag.OnHit_Mage,
    Tag.OnHit,
    Tag.Fighter,
    Tag.Assassin_Support
  ],
  blocking: [
    3003,
    3119
  ]
},

{
  name: "Chemtech Putrifier",
  id: 3011,
  tags: [
    Tag.Mage_Support,
    Tag.Enchanter_Support
  ],
},

{
  name: "Guardian Angel",
  id: 3026,
  tags: [
    Tag.AD_Assassin,
    Tag.Fighter,
    Tag.Marksman,
    Tag.OnHit,
    Tag.Assassin_Support
  ],
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
  name: "Mortal Reminder",
  id: 3033,
  tags: [
    Tag.Marksman
  ],
  blocking: [
    3036,
    6694
  ]
},

{
  name: "Lord Dominik's Regards",
  id: 3036,
  tags: [
    Tag.AD_Assassin,
    Tag.Marksman
  ],
  blocking: [
    3033,
    6694
  ]
},

{
  name: "Mejai's Soulstealer",
  id: 3041,
  tags: [
    Tag.Mage,
    Tag.Mage_Support,
    Tag.AP_Assassin
  ],
},

{
  name: "Phantom Dancer",
  id: 3046,
  tags: [
    Tag.OnHit,
    Tag.Marksman
  ],
},

{
  name: "Zeke's Convergence",
  id: 3050,
  tags: [
    Tag.Tank_Support,
    Tag.Enchanter_Support
  ],
},

{
  name: "Sterak's Gage",
  id: 3053,
  tags: [
    Tag.Tank,
    Tag.AD_Assassin,
    Tag.Fighter
  ],
  blocking: [
    3003,
    3156,
    6673
  ]
},

{
  name: "Spirit Visage",
  id: 3065,
  tags: [
    Tag.Tank,
    Tag.Bulk_Mage,
    Tag.Tank_Support,
    Tag.Fighter
  ],
},

{
  name: "Sunfire Aegis",
  id: 3068,
  tags: [
    Tag.Tank,
    Tag.Bulk_Mage,
    Tag.Fighter
  ],
},

{
  name: "Black Cleaver",
  id: 3071,
  tags: [
    Tag.AD_Assassin,
    Tag.Fighter
  ],
},

{
  name: "Bloodthirster",
  id: 3072,
  tags: [
    Tag.AD_Assassin,
    Tag.Fighter,
    Tag.Marksman
  ],
},

{
  name: "Ravenous Hydra",
  id: 3074,
  tags: [
    Tag.AD_Assassin,
    Tag.Fighter,
    Tag.OnHit
  ],
  blocking: [
    3748
  ]
},

{
  name: "Thornmail",
  id: 3075,
  tags: [
    Tag.Tank,
    Tag.Fighter,
    Tag.Tank_Support
  ],
},

{
  name: "Warmog's Armor",
  id: 3083,
  tags: [
    Tag.Tank,
    Tag.Bulk_Mage,
    Tag.Tank_Support
  ],
},

{
  name: "Runaan's Hurricane",
  id: 3085,
  tags: [
    Tag.Marksman
  ],
},

{
  name: "Rabadon's Deathcap",
  id: 3089,
  tags: [
    Tag.Mage,
    Tag.AP_Assassin,
    Tag.Bulk_Mage,
    Tag.Mage_Support,
    Tag.Enchanter_Support
  ],
},

{
  name: "Wit's End",
  id: 3091,
  tags: [
    Tag.OnHit,
    Tag.OnHit_Mage
  ],
},

{
  name: "Rapid Firecannon",
  id: 3094,
  tags: [
    Tag.Marksman
  ],
},

{
  name: "Stormrazor",
  id: 3095,
  tags: [
    Tag.AD_Assassin,
    Tag.Fighter,
    Tag.Marksman
  ],
},

{
  name: "Lich Bane",
  id: 3100,
  tags: [
    Tag.Mage,
    Tag.AP_Assassin,
    Tag.OnHit_Mage
  ],
},

{
  name: "Banshee's Veil",
  id: 3102,
  tags: [
    Tag.Mage,
    Tag.Bulk_Mage
  ],
},

{
  name: "Redemption",
  id: 3107,
  tags: [
    Tag.Enchanter_Support,
    Tag.Tank_Support
  ],
},

{
  name: "Knight's Vow",
  id: 3109,
  tags: [
    Tag.Tank_Support,
    Tag.Enchanter_Support
  ],
},

{
  name: "Frozen Heart",
  id: 3110,
  tags: [
    Tag.Tank,
    Tag.Fighter,
    Tag.Bulk_Mage
  ],
},

{
  name: "Nashor's Tooth",
  id: 3115,
  tags: [
    Tag.OnHit_Mage
  ],
},

{
  name: "Rylai's Crystal Scepter",
  id: 3116,
  tags: [
    Tag.Bulk_Mage,
    Tag.Mage,
    Tag.Mage_Support,
    Tag.Enchanter_Support
  ],
},

{
  name: "Winter's Approach",
  id: 3119,
  tags: [
    Tag.Tank
  ],
  blocking: [
    3003,
    3004
  ]
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
  name: "Void Staff",
  id: 3135,
  tags: [
    Tag.Mage,
    Tag.AP_Assassin
  ],
},

{
  name: "Mercurial Scimitar",
  id: 3139,
  tags: [
    Tag.AD_Assassin,
    Tag.Marksman
  ],
  blocking: [
    6035
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
  name: "Randuin's Omen",
  id: 3143,
  tags: [
    Tag.Tank,
    Tag.Fighter,
    Tag.Bulk_Mage
  ],
},

{
  name: "Blade of The Ruined King",
  id: 3153,
  tags: [
    Tag.OnHit,
    Tag.Fighter
  ],
},

{
  name: "Maw of Malmortius",
  id: 3156,
  tags: [
    Tag.Fighter,
    Tag.AD_Assassin,
    Tag.OnHit
  ],
  blocking: [
    3003,
    3053,
    6673
  ]
},

{
  name: "Zhonya's Hourglass",
  id: 3157,
  tags: [
    Tag.Bulk_Mage,
    Tag.Mage,
    Tag.AP_Assassin,
    Tag.OnHit_Mage,
    Tag.Mage_Support
  ],
},

{
  name: "Spear Of Shojin",
  id: 3161,
  tags: [
    Tag.Fighter
  ],
  blocking: [
    6675
  ]
},

{
  name: "Morellonomicon",
  id: 3165,
  tags: [
    Tag.AP_Assassin,
    Tag.Mage,
    Tag.Mage_Support,
    Tag.Enchanter_Support
  ],
},

{
  name: "Umbral Glaive",
  id: 3179,
  tags: [
    Tag.AD_Assassin,
    Tag.Assassin_Support
  ],
},

{
  name: "Hullbreaker",
  id: 3181,
  tags: [
    Tag.Tank,
    Tag.Fighter
  ],
},

{
  name: "Gargoyle Stoneplate",
  id: 3193,
  tags: [
    Tag.Tank,
    Tag.Fighter,
    Tag.Tank_Support
  ],
},

{
  name: "Mikael's Blessing",
  id: 3222,
  tags: [
    Tag.Enchanter_Support
  ],
},

{
  name: "Ardent Censer",
  id: 3504,
  tags: [
    Tag.Enchanter_Support
  ],
},

{
  name: "Essence Reaver",
  id: 3508,
  tags: [
    Tag.AD_Assassin,
    Tag.Marksman
  ],
},

{
  name: "Dead Man's Plate",
  id: 3742,
  tags: [
    Tag.Tank,
    Tag.Fighter,
    Tag.Tank_Support
  ],
},

{
  name: "Titanic Hydra",
  id: 3748,
  tags: [
    Tag.Tank,
    Tag.Fighter,
    Tag.OnHit
  ],
  blocking: [
    3074
  ]
},

{
  name: "Edge of Night",
  id: 3814,
  tags: [
    Tag.AD_Assassin
  ],
},

{
  name: "Force of Nature",
  id: 4401,
  tags: [
    Tag.Tank,
    Tag.Tank_Support,
    Tag.Bulk_Mage
  ],
},

{
  name: "Horizon Focus",
  id: 4628,
  tags: [
    Tag.Mage
  ],
},

{
  name: "Cosmic Drive",
  id: 4629,
  tags: [
    Tag.Mage
  ],
},

{
  name: "Demonic Embrace",
  id: 4637,
  tags: [
    Tag.Mage_Support,
    Tag.Mage,
    Tag.Bulk_Mage
  ],
},

{
  name: "Shadowflame",
  id: 4645,
  tags: [
    Tag.Mage,
    Tag.Bulk_Mage,
    Tag.Mage_Support
  ],
},

{
  name: "Silvermere Dawn",
  id: 6035,
  tags: [
    Tag.Fighter
  ],
  blocking: [
    3139
  ]
},

{
  name: "Death's Dance",
  id: 6333,
  tags: [
    Tag.AD_Assassin,
    Tag.Fighter,
    Tag.OnHit
  ],
},

{
  name: "Chempunk Chainsword",
  id: 6609,
  tags: [
    Tag.Assassin_Support,
    Tag.AD_Assassin,
    Tag.Fighter
  ],
},

{
  name: "Staff of Flowing Water",
  id: 6616,
  tags: [
    Tag.Enchanter_Support
  ],
},

{
  name: "Turbo Chemtank",
  id: 6664,
  tags: [
    Tag.Tank,
    Tag.Fighter,
    Tag.Tank_Support
  ],
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
  name: "The Collector",
  id: 6676,
  tags: [
    Tag.AD_Assassin,
    Tag.Marksman,
    Tag.OnHit
  ],
},

{
  name: "Serylda's Grudge",
  id: 6694,
  tags: [
    Tag.AD_Assassin,
    Tag.Fighter,
    Tag.OnHit,
    Tag.Assassin_Support
  ],
  blocking: [
    3033,
    3036
  ]
},

{
  name: "Serpent's Fang",
  id: 6695,
  tags: [
    Tag.AD_Assassin,
    Tag.Fighter,
    Tag.Assassin_Support
  ],
},

{
  name: "Axiom Arc",
  id: 6696,
  tags: [
    Tag.AD_Assassin,
    Tag.Assassin_Support
  ],
},

{
  name: "Anathema's Chains",
  id: 8001,
  tags: [
    Tag.Tank,
    Tag.Tank_Support
  ],
},

{
  name: "Abyssal Mask",
  id: 8020,
  tags: [
    Tag.Tank,
    Tag.Tank_Support,
    Tag.Bulk_Mage
  ],
  blocking: [
    6657
  ]
}
];