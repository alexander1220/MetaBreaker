import { LeagueType } from "./enums/LeagueType";
import { Tag } from "./enums/Tag";

export interface StarterItem {
	name: string;
	id: number;
	tags: Tag[];
}

export const starterItems: StarterItem[] = [

	{
		name: "Doran's Shield",
		id: 1054,
		tags: [
			Tag.Tank,
			Tag.Bulk_Mage
		]
	},
	{
		name: "Doran's Blade",
		id: 1055,
		tags: [
			Tag.AD_Assassin,
			Tag.Fighter,
			Tag.Marksman,
			Tag.OnHit
		]
	},
	{
		name: "Doran's Ring",
		id: 1056,
		tags: [
			Tag.Mage,
			Tag.AP_Assassin,
			Tag.Bulk_Mage,
			Tag.OnHit_Mage
		]
	},
	{
		name: "Long Sword",
		id: 1036,
		tags: [
			Tag.AD_Assassin,
			Tag.Fighter,
			Tag.Marksman,
			Tag.OnHit
		]
	},
	{
		name: "Gustwalker Hatchling",
		id: 1102,
		tags: [
			Tag.Jungle
		]
	},
	{
		name: "Scorchclaw Pup",
		id: 1101,
		tags: [
			Tag.Jungle
		]
	},
	{
		name: "Mosstomper Seedling",
		id: 1103,
		tags: [
			Tag.Jungle
		]
	},
	{
		name: "Spectral Sickle",
		id: 3862,
		tags: [
			Tag.Assassin_Support
		]
	},
	{
		name: "Relic Shield",
		id: 3858,
		tags: []
	},
	{
		name: "Spellthief's Edge",
		id: 3850,
		tags: [
			Tag.Mage_Support,
			Tag.Enchanter_Support
		]
	},
	{
		name: "Steel Shoulderguards",
		id: 3854,
		tags: [
			Tag.Tank_Support
		]
	}
];