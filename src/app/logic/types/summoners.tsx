import { Tag } from "./enums"

export interface SummonerSpell {
  name: string;
  fullName: string;
  tags: Tag[],
  id: number;
}
export const summonerSpells: SummonerSpell[] = [
  {
    name: "Ghost",
    fullName: "SummonerHaste",
    tags: [
      Tag.Fighter,
      Tag.Tank,
      Tag.OnHit,
      Tag.OnHit_Mage,
      Tag.Marksman
    ],
    id: 6
  },
  {
    name: "Heal",
    fullName: "SummonerHeal",
    tags: [
      Tag.Marksman,
      Tag.Assassin_Support,
      Tag.Enchanter_Support
    ],
    id: 7
  },
  {
    name: "Barrier",
    fullName: "SummonerBarrier",
    tags: [
      Tag.Marksman,
      Tag.Mage
    ],
    id: 21
  },
  {
    name: "Exhaust",
    fullName: "SummonerExhaust",
    tags: [
      Tag.Marksman,
      Tag.Mage,
      Tag.Mage_Support,
      Tag.Tank_Support,
      Tag.Enchanter_Support,
      Tag.Assassin_Support,
      Tag.OnHit,
      Tag.Tank,
      Tag.OnHit_Mage
    ],
    id: 3
  },
  {
    name: "Clarity",
    fullName: "SummonerMana",
    tags: [],
    id: 13
  },
  {
    name: "Flash",
    fullName: "SummonerFlash",
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
      Tag.Jungle,
      Tag.OnHit_Mage
    ],
    id: 4
  },
  {
    name: "Teleport",
    fullName: "SummonerTeleport",
    tags: [
      Tag.Fighter,
      Tag.Mage,
      Tag.Tank,
      Tag.Bulk_Mage
    ],
    id: 12
  },
  {
    name: "Cleanse",
    fullName: "SummonerBoost",
    tags: [
      Tag.Mage,
      Tag.Marksman,
      Tag.AP_Assassin,
      Tag.OnHit,
      Tag.OnHit_Mage
    ],
    id: 1
  },
  {
    name: "Ignite",
    fullName: "SummonerDot",
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
    id: 14
  },
  {
    name: "Smite",
    fullName: "SummonerSmite",
    tags: [
      Tag.Jungle
    ],
    id: 11
  }
];