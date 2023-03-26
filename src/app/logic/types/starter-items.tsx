import { LeagueType, Tag } from "./enums";

interface StarterItem {
	name: string;
	id: number;
	tags: Tag[];
}

abstract class StarterItem implements StarterItem {
	type = LeagueType.Item_Starter;
}

export class DoransShield extends StarterItem {
	name = "Doran's Shield";
	id = 1054;
	tags = [
		Tag.Tank,
		Tag.Bulk_Mage
	]
};

export class DoransBlade extends StarterItem {
	name = "Doran's Blade";
	id = 1055;
	tags = [
		Tag.AD_Assassin,
		Tag.Fighter,
		Tag.Marksman,
		Tag.OnHit
	]
};

export class DoransRing extends StarterItem {
	name = "Doran's Ring";
	id = 1056;
	tags = [
		Tag.Mage,
		Tag.AP_Assassin,
		Tag.Bulk_Mage,
		Tag.OnHit_Mage
	]
};

export class LongSword extends StarterItem {
	name = "Long Sword";
	id = 1036;
	tags = [
		Tag.AD_Assassin,
		Tag.Fighter,
		Tag.Marksman,
		Tag.OnHit
	]
};

export class GustwalkerHatchling extends StarterItem {
	name = "Gustwalker Hatchling";
	id = 1102;
	tags = [
		Tag.Jungle
	]
};

export class ScorchclawPup extends StarterItem {
	name = "Scorchclaw Pup";
	id = 1101;
	tags = [
		Tag.Jungle
	]
};

export class MosstomperSeedling extends StarterItem {
	name = "Mosstomper Seedling";
	id = 1103;
	tags = [
		Tag.Jungle
	]
};

export class SpectralSickle extends StarterItem {
	name = "Spectral Sickle";
	id = 3862;
	tags = [
		Tag.Assassin_Support
	]
};

export class RelicShield extends StarterItem {
	name = "Relic Shield";
	id = 3858;
	tags = []
};

export class SpellthiefsEdge extends StarterItem {
	name = "Spellthief's Edge";
	id = 3850;
	tags = [
		Tag.Mage_Support,
		Tag.Enchanter_Support
	]
};

export class SteelShoulderguards extends StarterItem {
	name = "Steel Shoulderguards";
	id = 3854;
	tags = [
		Tag.Tank_Support
	]
};
