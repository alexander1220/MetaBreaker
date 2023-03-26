import { Tag, LeagueType } from "./enums";

interface LegendaryItem {
  name: string;
  id: number;
  tags: Tag[];
  type: LeagueType;
  blocking?: number[];
}

abstract class LegendaryItem implements LegendaryItem {
  type = LeagueType.Item_Legendary;
}

export class ArchangelsStaff extends LegendaryItem {
  name = "Archangel's Staff";
  id = 3003;
  tags = [
    Tag.Bulk_Mage,
    Tag.Mage,
    Tag.Mage_Support
  ];
  blocking = [
    3004,
    3053,
    3119,
    3156,
    6673
  ]
};

export class Manamune extends LegendaryItem {
  name = "Manamune";
  id = 3004;
  tags = [
    Tag.AD_Assassin,
    Tag.OnHit_Mage,
    Tag.OnHit,
    Tag.Fighter,
    Tag.Assassin_Support
  ];
  blocking = [
    3003,
    3119
  ]
};

export class ChemtechPutrifier extends LegendaryItem {
  name = "Chemtech Putrifier";
  id = 3011;
  tags = [
    Tag.Mage_Support,
    Tag.Enchanter_Support
  ];
};

export class GuardianAngel extends LegendaryItem {
  name = "Guardian Angel";
  id = 3026;
  tags = [
    Tag.AD_Assassin,
    Tag.Fighter,
    Tag.Marksman,
    Tag.OnHit,
    Tag.Assassin_Support
  ];
};

export class InfinityEdge extends LegendaryItem {
  name = "Infinity Edge";
  id = 3031;
  tags = [
    Tag.Marksman
  ];
  blocking = [
    3124,
    6675
  ]
};

export class MortalReminder extends LegendaryItem {
  name = "Mortal Reminder";
  id = 3033;
  tags = [
    Tag.Marksman
  ];
  blocking = [
    3036,
    6694
  ]
};

export class LordDominiksRegards extends LegendaryItem {
  name = "Lord Dominik's Regards";
  id = 3036;
  tags = [
    Tag.AD_Assassin,
    Tag.Marksman
  ];
  blocking = [
    3033,
    6694
  ]
};

export class MejaisSoulstealer extends LegendaryItem {
  name = "Mejai's Soulstealer";
  id = 3041;
  tags = [
    Tag.Mage,
    Tag.Mage_Support,
    Tag.AP_Assassin
  ];
};

export class PhantomDancer extends LegendaryItem {
  name = "Phantom Dancer";
  id = 3046;
  tags = [
    Tag.OnHit,
    Tag.Marksman
  ];
};

export class ZekesConvergence extends LegendaryItem {
  name = "Zeke's Convergence";
  id = 3050;
  tags = [
    Tag.Tank_Support,
    Tag.Enchanter_Support
  ];
};

export class SteraksGage extends LegendaryItem {
  name = "Sterak's Gage";
  id = 3053;
  tags = [
    Tag.Tank,
    Tag.AD_Assassin,
    Tag.Fighter
  ];
  blocking = [
    3003,
    3156,
    6673
  ]
};

export class SpiritVisage extends LegendaryItem {
  name = "Spirit Visage";
  id = 3065;
  tags = [
    Tag.Tank,
    Tag.Bulk_Mage,
    Tag.Tank_Support,
    Tag.Fighter
  ];
};

export class SunfireAegis extends LegendaryItem {
  name = "Sunfire Aegis";
  id = 3068;
  tags = [
    Tag.Tank,
    Tag.Bulk_Mage,
    Tag.Fighter
  ];
};

export class BlackCleaver extends LegendaryItem {
  name = "Black Cleaver";
  id = 3071;
  tags = [
    Tag.AD_Assassin,
    Tag.Fighter
  ];
};

export class Bloodthirster extends LegendaryItem {
  name = "Bloodthirster";
  id = 3072;
  tags = [
    Tag.AD_Assassin,
    Tag.Fighter,
    Tag.Marksman
  ];
};

export class RavenousHydra extends LegendaryItem {
  name = "Ravenous Hydra";
  id = 3074;
  tags = [
    Tag.AD_Assassin,
    Tag.Fighter,
    Tag.OnHit
  ];
  blocking = [
    3748
  ]
};

export class Thornmail extends LegendaryItem {
  name = "Thornmail";
  id = 3075;
  tags = [
    Tag.Tank,
    Tag.Fighter,
    Tag.Tank_Support
  ];
};

export class WarmogsArmor extends LegendaryItem {
  name = "Warmog's Armor";
  id = 3083;
  tags = [
    Tag.Tank,
    Tag.Bulk_Mage,
    Tag.Tank_Support
  ];
};

export class RunaansHurricane extends LegendaryItem {
  name = "Runaan's Hurricane";
  id = 3085;
  tags = [
    Tag.Marksman
  ];
};

export class RabadonsDeathcap extends LegendaryItem {
  name = "Rabadon's Deathcap";
  id = 3089;
  tags = [
    Tag.Mage,
    Tag.AP_Assassin,
    Tag.Bulk_Mage,
    Tag.Mage_Support,
    Tag.Enchanter_Support
  ];
};

export class WitsEnd extends LegendaryItem {
  name = "Wit's End";
  id = 3091;
  tags = [
    Tag.OnHit,
    Tag.OnHit_Mage
  ];
};

export class RapidFirecannon extends LegendaryItem {
  name = "Rapid Firecannon";
  id = 3094;
  tags = [
    Tag.Marksman
  ];
};

export class Stormrazor extends LegendaryItem {
  name = "Stormrazor";
  id = 3095;
  tags = [
    Tag.AD_Assassin,
    Tag.Fighter,
    Tag.Marksman
  ];
};

export class LichBane extends LegendaryItem {
  name = "Lich Bane";
  id = 3100;
  tags = [
    Tag.Mage,
    Tag.AP_Assassin,
    Tag.OnHit_Mage
  ];
};

export class BansheesVeil extends LegendaryItem {
  name = "Banshee's Veil";
  id = 3102;
  tags = [
    Tag.Mage,
    Tag.Bulk_Mage
  ];
};

export class Redemption extends LegendaryItem {
  name = "Redemption";
  id = 3107;
  tags = [
    Tag.Enchanter_Support,
    Tag.Tank_Support
  ];
};

export class KnightsVow extends LegendaryItem {
  name = "Knight's Vow";
  id = 3109;
  tags = [
    Tag.Tank_Support,
    Tag.Enchanter_Support
  ];
};

export class FrozenHeart extends LegendaryItem {
  name = "Frozen Heart";
  id = 3110;
  tags = [
    Tag.Tank,
    Tag.Fighter,
    Tag.Bulk_Mage
  ];
};

export class NashorsTooth extends LegendaryItem {
  name = "Nashor's Tooth";
  id = 3115;
  tags = [
    Tag.OnHit_Mage
  ];
};

export class RylaisCrystalScepter extends LegendaryItem {
  name = "Rylai's Crystal Scepter";
  id = 3116;
  tags = [
    Tag.Bulk_Mage,
    Tag.Mage,
    Tag.Mage_Support,
    Tag.Enchanter_Support
  ];
};

export class WintersApproach extends LegendaryItem {
  name = "Winter's Approach";
  id = 3119;
  tags = [
    Tag.Tank
  ];
  blocking = [
    3003,
    3004
  ]
};

export class GuinsoosRageblade extends LegendaryItem {
  name = "Guinsoo's Rageblade";
  id = 3124;
  tags = [
    Tag.OnHit
  ];
  blocking = [
    3031,
    6675
  ]
};

export class VoidStaff extends LegendaryItem {
  name = "Void Staff";
  id = 3135;
  tags = [
    Tag.Mage,
    Tag.AP_Assassin
  ];
};

export class MercurialScimitar extends LegendaryItem {
  name = "Mercurial Scimitar";
  id = 3139;
  tags = [
    Tag.AD_Assassin,
    Tag.Marksman
  ];
  blocking = [
    6035
  ]
};

export class YoumuusGhostblade extends LegendaryItem {
  name = "Youmuu's Ghostblade";
  id = 3142;
  tags = [
    Tag.AD_Assassin,
    Tag.Fighter,
    Tag.Assassin_Support
  ];
};

export class RanduinsOmen extends LegendaryItem {
  name = "Randuin's Omen";
  id = 3143;
  tags = [
    Tag.Tank,
    Tag.Fighter,
    Tag.Bulk_Mage
  ];
};

export class BladeOfTheRuinedKing extends LegendaryItem {
  name = "Blade of The Ruined King";
  id = 3153;
  tags = [
    Tag.OnHit,
    Tag.Fighter
  ];
};

export class MawOfMalmortius extends LegendaryItem {
  name = "Maw of Malmortius";
  id = 3156;
  tags = [
    Tag.Fighter,
    Tag.AD_Assassin,
    Tag.OnHit
  ];
  blocking = [
    3003,
    3053,
    6673
  ]
};

export class ZhonyasHourglass extends LegendaryItem {
  name = "Zhonya's Hourglass";
  id = 3157;
  tags = [
    Tag.Bulk_Mage,
    Tag.Mage,
    Tag.AP_Assassin,
    Tag.OnHit_Mage,
    Tag.Mage_Support
  ];
};

export class SpearOfShojin extends LegendaryItem {
  name = "Spear Of Shojin";
  id = 3161;
  tags = [
    Tag.Fighter
  ];
  blocking = [
    6675
  ]
};

export class Morellonomicon extends LegendaryItem {
  name = "Morellonomicon";
  id = 3165;
  tags = [
    Tag.AP_Assassin,
    Tag.Mage,
    Tag.Mage_Support,
    Tag.Enchanter_Support
  ];
};

export class UmbralGlaive extends LegendaryItem {
  name = "Umbral Glaive";
  id = 3179;
  tags = [
    Tag.AD_Assassin,
    Tag.Assassin_Support
  ];
};

export class Hullbreaker extends LegendaryItem {
  name = "Hullbreaker";
  id = 3181;
  tags = [
    Tag.Tank,
    Tag.Fighter
  ];
};

export class GargoyleStoneplate extends LegendaryItem {
  name = "Gargoyle Stoneplate";
  id = 3193;
  tags = [
    Tag.Tank,
    Tag.Fighter,
    Tag.Tank_Support
  ];
};

export class MikaelsBlessing extends LegendaryItem {
  name = "Mikael's Blessing";
  id = 3222;
  tags = [
    Tag.Enchanter_Support
  ];
};

export class ArdentCenser extends LegendaryItem {
  name = "Ardent Censer";
  id = 3504;
  tags = [
    Tag.Enchanter_Support
  ];
};

export class EssenceReaver extends LegendaryItem {
  name = "Essence Reaver";
  id = 3508;
  tags = [
    Tag.AD_Assassin,
    Tag.Marksman
  ];
};

export class DeadMansPlate extends LegendaryItem {
  name = "Dead Man's Plate";
  id = 3742;
  tags = [
    Tag.Tank,
    Tag.Fighter,
    Tag.Tank_Support
  ];
};

export class TitanicHydra extends LegendaryItem {
  name = "Titanic Hydra";
  id = 3748;
  tags = [
    Tag.Tank,
    Tag.Fighter,
    Tag.OnHit
  ];
  blocking = [
    3074
  ]
};

export class EdgeOfNight extends LegendaryItem {
  name = "Edge of Night";
  id = 3814;
  tags = [
    Tag.AD_Assassin
  ];
};

export class ForceOfNature extends LegendaryItem {
  name = "Force of Nature";
  id = 4401;
  tags = [
    Tag.Tank,
    Tag.Tank_Support,
    Tag.Bulk_Mage
  ];
};

export class HorizonFocus extends LegendaryItem {
  name = "Horizon Focus";
  id = 4628;
  tags = [
    Tag.Mage
  ];
};

export class CosmicDrive extends LegendaryItem {
  name = "Cosmic Drive";
  id = 4629;
  tags = [
    Tag.Mage
  ];
};

export class DemonicEmbrace extends LegendaryItem {
  name = "Demonic Embrace";
  id = 4637;
  tags = [
    Tag.Mage_Support,
    Tag.Mage,
    Tag.Bulk_Mage
  ];
};

export class Shadowflame extends LegendaryItem {
  name = "Shadowflame";
  id = 4645;
  tags = [
    Tag.Mage,
    Tag.Bulk_Mage,
    Tag.Mage_Support
  ];
};

export class SilvermereDawn extends LegendaryItem {
  name = "Silvermere Dawn";
  id = 6035;
  tags = [
    Tag.Fighter
  ];
  blocking = [
    3139
  ]
};

export class DeathsDance extends LegendaryItem {
  name = "Death's Dance";
  id = 6333;
  tags = [
    Tag.AD_Assassin,
    Tag.Fighter,
    Tag.OnHit
  ];
};

export class ChempunkChainsword extends LegendaryItem {
  name = "Chempunk Chainsword";
  id = 6609;
  tags = [
    Tag.Assassin_Support,
    Tag.AD_Assassin,
    Tag.Fighter
  ];
};

export class StaffOfFlowingWater extends LegendaryItem {
  name = "Staff of Flowing Water";
  id = 6616;
  tags = [
    Tag.Enchanter_Support
  ];
};

export class TurboChemtank extends LegendaryItem {
  name = "Turbo Chemtank";
  id = 6664;
  tags = [
    Tag.Tank,
    Tag.Fighter,
    Tag.Tank_Support
  ];
};

export class NavoriQuickblades extends LegendaryItem {
  name = "Navori Quickblades";
  id = 6675;
  tags = [
    Tag.AD_Assassin,
    Tag.Marksman
  ];
  blocking = [
    3031,
    3161,
    3124
  ]
};

export class TheCollector extends LegendaryItem {
  name = "The Collector";
  id = 6676;
  tags = [
    Tag.AD_Assassin,
    Tag.Marksman,
    Tag.OnHit
  ];
};

export class SeryldasGrudge extends LegendaryItem {
  name = "Serylda's Grudge";
  id = 6694;
  tags = [
    Tag.AD_Assassin,
    Tag.Fighter,
    Tag.OnHit,
    Tag.Assassin_Support
  ];
  blocking = [
    3033,
    3036
  ]
};

export class SerpentsFang extends LegendaryItem {
  name = "Serpent's Fang";
  id = 6695;
  tags = [
    Tag.AD_Assassin,
    Tag.Fighter,
    Tag.Assassin_Support
  ];
};

export class AxiomArc extends LegendaryItem {
  name = "Axiom Arc";
  id = 6696;
  tags = [
    Tag.AD_Assassin,
    Tag.Assassin_Support
  ];
};

export class AnathemasChains extends LegendaryItem {
  name = "Anathema's Chains";
  id = 8001;
  tags = [
    Tag.Tank,
    Tag.Tank_Support
  ];
};

export class AbyssalMask extends LegendaryItem {
  name = "Abyssal Mask";
  id = 8020;
  tags = [
    Tag.Tank,
    Tag.Tank_Support,
    Tag.Bulk_Mage
  ];
  blocking = [
    6657
  ]
};
