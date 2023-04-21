import { Tag } from "./enums/Tag";

export interface Rune {
  iconFileName: string;
  name: string;
  id: number;
  tags: Tag[];
}

export const runes: Rune[] = [
  {
    iconFileName: "7200_domination",
    name: "Domination",
    id: 8100,
    tags: [
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
    ],
  },
  {
    iconFileName: "7203_whimsy",
    name: "Inspiration",
    id: 8300,
    tags: [
      Tag.AD_Assassin,
      Tag.AP_Assassin,
      Tag.Enchanter_Support,
      Tag.Mage_Support,
      Tag.Tank_Support
    ],
  },
  {
    iconFileName: "7201_precision",
    name: "Precision",
    id: 8000,
    tags: [
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
    ],
  },
  {
    iconFileName: "7204_resolve",
    name: "Resolve",
    id: 8400,
    tags: [Tag.Fighter,
    Tag.Bulk_Mage,
    Tag.Tank,
    Tag.Tank_Support
    ],
  },
  {
    iconFileName: "7202_sorcery",
    name: "Sorcery",
    id: 8200,
    tags: [
      Tag.Mage,
      Tag.Bulk_Mage,
      Tag.AP_Assassin,
      Tag.Enchanter_Support,
      Tag.Mage_Support,
      Tag.OnHit_Mage
    ],
  }
];