import { Tag, LeagueType } from './enums';
interface Champion {
    tags: Tag[];
    type: LeagueType;
}

abstract class Champion implements Champion {
    type = LeagueType.Champion;
}

export class Aatrox extends Champion {
    tags = [
        Tag.Fighter,
        Tag.Tank,
        Tag.AD_Assassin
    ]
};

export class Ahri extends Champion {
    tags = [
        Tag.Mage,
        Tag.AP_Assassin,
        Tag.Mage_Support,
        Tag.Marksman
    ]
};

export class Akali extends Champion {
    tags = [
        Tag.AP_Assassin,
        Tag.AD_Assassin,
        Tag.Bulk_Mage,
        Tag.Mage,
        Tag.OnHit_Mage
    ]
};

export class Akshan extends Champion {
    tags = [
        Tag.Marksman,
        Tag.AD_Assassin,
        Tag.OnHit
    ]
};

export class Alistar extends Champion {
    tags = [
        Tag.Tank,
        Tag.Tank_Support,
        Tag.Mage_Support,
        Tag.Bulk_Mage,
        Tag.Fighter,
        Tag.AP_Assassin
    ]
};

export class Amumu extends Champion {
    tags = [
        Tag.Tank,
        Tag.Mage,
        Tag.Bulk_Mage,
        Tag.AP_Assassin,
        Tag.Mage_Support,
        Tag.Tank_Support
    ]
};

export class Anivia extends Champion {
    tags = [
        Tag.Mage,
        Tag.Mage_Support,
        Tag.Marksman
    ]
};

export class Annie extends Champion {
    tags = [
        Tag.Mage,
        Tag.Enchanter_Support,
        Tag.Mage_Support,
        Tag.Marksman,
        Tag.AP_Assassin
    ]
};

export class Aphelios extends Champion {
    tags = [
        Tag.Marksman,
        Tag.OnHit,
        Tag.Fighter
    ]
};

export class Ashe extends Champion {
    tags = [
        Tag.Marksman,
        Tag.Assassin_Support,
        Tag.OnHit
    ]
};

export class AurelionSol extends Champion {
    tags = [
        Tag.Mage,
        Tag.Bulk_Mage,
        Tag.AP_Assassin
    ]
};

export class Azir extends Champion {
    tags = [
        Tag.Mage,
        Tag.AP_Assassin,
        Tag.OnHit_Mage
    ]
};

export class Bard extends Champion {
    tags = [
        Tag.OnHit_Mage,
        Tag.Mage_Support,
        Tag.Mage,
        Tag.Enchanter_Support,
        Tag.AP_Assassin,
        Tag.Marksman,
        Tag.OnHit,
        Tag.Fighter,
        Tag.Bulk_Mage
    ]
};

export class Belveth extends Champion {
    tags = [
        Tag.Fighter,
        Tag.OnHit,
        Tag.Marksman,
        Tag.AD_Assassin
    ]
};

export class Blitzcrank extends Champion {
    tags = [
        Tag.Tank,
        Tag.Fighter,
        Tag.Tank_Support,
        Tag.Mage_Support,
        Tag.Mage,
        Tag.Bulk_Mage,
        Tag.AP_Assassin,
        Tag.Marksman
    ]
};

export class Brand extends Champion {
    tags = [
        Tag.Mage,
        Tag.Mage_Support,
        Tag.Marksman,
        Tag.Bulk_Mage,
        Tag.AP_Assassin
    ]
};

export class Braum extends Champion {
    tags = [
        Tag.Tank_Support,
        Tag.Tank,
        Tag.Fighter,
        Tag.OnHit,
        Tag.OnHit_Mage
    ]
};

export class Caitlyn extends Champion {
    tags = [
        Tag.Marksman,
        Tag.OnHit,
        Tag.Assassin_Support,
        Tag.AD_Assassin
    ]
};

export class Camille extends Champion {
    tags = [
        Tag.Fighter,
        Tag.AD_Assassin,
        Tag.Assassin_Support
    ]
};

export class Cassiopeia extends Champion {
    tags = [
        Tag.Mage,
        Tag.Marksman,
        Tag.Mage_Support,
        Tag.Bulk_Mage
    ]
};

export class Chogath extends Champion {
    tags = [
        Tag.Tank,
        Tag.Mage,
        Tag.OnHit,
        Tag.Tank_Support,
        Tag.Mage_Support
    ]
};

export class Corki extends Champion {
    tags = [
        Tag.Marksman,
        Tag.Mage,
        Tag.AP_Assassin,
        Tag.AD_Assassin,
        Tag.OnHit_Mage
    ]
};

export class Darius extends Champion {
    tags = [
        Tag.Fighter,
        Tag.Tank,
        Tag.AD_Assassin,
        Tag.Tank_Support
    ]
};

export class Diana extends Champion {
    tags = [
        Tag.Fighter,
        Tag.Mage,
        Tag.Bulk_Mage,
        Tag.Fighter,
        Tag.OnHit_Mage
    ]
};

export class Draven extends Champion {
    tags = [
        Tag.Marksman,
        Tag.OnHit,
        Tag.AD_Assassin
    ]
};

export class DrMundo extends Champion {
    tags = [
        Tag.Fighter,
        Tag.Tank,
        Tag.Tank_Support
    ]
};

export class Ekko extends Champion {
    tags = [
        Tag.AP_Assassin,
        Tag.Fighter,
        Tag.Mage,
        Tag.OnHit_Mage,
        Tag.Mage_Support
    ]
};

export class Elise extends Champion {
    tags = [
        Tag.Mage,
        Tag.Fighter,
        Tag.AP_Assassin,
        Tag.Mage_Support,
        Tag.Bulk_Mage
    ]
};

export class Evelynn extends Champion {
    tags = [
        Tag.Mage,
        Tag.AP_Assassin,
        Tag.Mage_Support,
        Tag.Bulk_Mage
    ]
};

export class Ezreal extends Champion {
    tags = [
        Tag.Marksman,
        Tag.Mage,
        Tag.OnHit_Mage,
        Tag.Assassin_Support,
        Tag.OnHit,
        Tag.AD_Assassin
    ]
};

export class Fiddlesticks extends Champion {
    tags = [
        Tag.Mage,
        Tag.Mage_Support,
        Tag.Bulk_Mage,
        Tag.AP_Assassin,
        Tag.Marksman
    ]
};

export class Fiora extends Champion {
    tags = [
        Tag.Fighter,
        Tag.AD_Assassin,
        Tag.OnHit
    ]
};

export class Fizz extends Champion {
    tags = [
        Tag.Mage,
        Tag.OnHit_Mage,
        Tag.Mage_Support,
        Tag.Bulk_Mage,
        Tag.AD_Assassin,
        Tag.AP_Assassin
    ]
};

export class Galio extends Champion {
    tags = [
        Tag.Tank,
        Tag.Mage,
        Tag.Bulk_Mage,
        Tag.AD_Assassin,
        Tag.Mage_Support,
        Tag.Tank_Support,
        Tag.Fighter
    ]
};

export class Gangplank extends Champion {
    tags = [
        Tag.Fighter,
        Tag.AD_Assassin,
        Tag.Marksman
    ]
};

export class Garen extends Champion {
    tags = [
        Tag.Fighter,
        Tag.Tank,
        Tag.AD_Assassin,
        Tag.Marksman
    ]
};

export class Gnar extends Champion {
    tags = [
        Tag.Fighter,
        Tag.Tank,
        Tag.OnHit,
        Tag.Marksman,
        Tag.Tank_Support
    ]
};

export class Gragas extends Champion {
    tags = [
        Tag.Fighter,
        Tag.Mage,
        Tag.Bulk_Mage,
        Tag.Tank,
        Tag.Mage_Support,
        Tag.Tank_Support
    ]
};

export class Graves extends Champion {
    tags = [
        Tag.Marksman,
        Tag.AD_Assassin,
        Tag.Fighter
    ]
};

export class Gwen extends Champion {
    tags = [
        Tag.AP_Assassin,
        Tag.Bulk_Mage,
        Tag.OnHit_Mage
    ]
};

export class Hecarim extends Champion {
    tags = [
        Tag.Fighter,
        Tag.Tank,
        Tag.AD_Assassin,
        Tag.AP_Assassin,
        Tag.Bulk_Mage,
        Tag.Mage
    ]
};

export class Heimerdinger extends Champion {
    tags = [
        Tag.Mage,
        Tag.Mage_Support,
        Tag.AP_Assassin,
        Tag.Bulk_Mage
    ]
};

export class Illaoi extends Champion {
    tags = [
        Tag.Fighter,
        Tag.Tank,
        Tag.AD_Assassin,
        Tag.Assassin_Support,
        Tag.Tank_Support
    ]
};

export class Irelia extends Champion {
    tags = [
        Tag.Fighter,
        Tag.AD_Assassin,
        Tag.OnHit,
        Tag.Assassin_Support
    ]
};

export class Ivern extends Champion {
    tags = [
        Tag.Mage_Support,
        Tag.Mage,
        Tag.Bulk_Mage,
        Tag.Enchanter_Support
    ]
};

export class Janna extends Champion {
    tags = [
        Tag.Mage_Support,
        Tag.Mage,
        Tag.Marksman,
        Tag.Enchanter_Support,
        Tag.Bulk_Mage
    ]
};

export class JarvanIV extends Champion {
    tags = [
        Tag.Tank,
        Tag.Fighter,
        Tag.AD_Assassin,
        Tag.Assassin_Support,
        Tag.Tank_Support
    ]
};

export class Jax extends Champion {
    tags = [
        Tag.Fighter,
        Tag.AD_Assassin,
        Tag.OnHit,
        Tag.Marksman
    ]
};

export class Jayce extends Champion {
    tags = [
        Tag.Fighter,
        Tag.Marksman,
        Tag.OnHit,
        Tag.AD_Assassin,
        Tag.Assassin_Support
    ]
};

export class Jhin extends Champion {
    tags = [
        Tag.Marksman,
        Tag.AD_Assassin,
        Tag.Assassin_Support
    ]
};

export class Jinx extends Champion {
    tags = [
        Tag.Marksman,
        Tag.OnHit,
        Tag.AD_Assassin
    ]
};

export class Kaisa extends Champion {
    tags = [
        Tag.Marksman,
        Tag.AP_Assassin,
        Tag.AD_Assassin,
        Tag.OnHit_Mage,
        Tag.AP_Assassin,
        Tag.Mage,
        Tag.Mage_Support,
        Tag.OnHit
    ]
};

export class Kalista extends Champion {
    tags = [
        Tag.Marksman,
        Tag.OnHit,
        Tag.AD_Assassin
    ]
};

export class Karma extends Champion {
    tags = [
        Tag.Mage,
        Tag.Tank_Support,
        Tag.Mage_Support,
        Tag.Enchanter_Support,
        Tag.AP_Assassin,
        Tag.Bulk_Mage
    ]
};

export class Karthus extends Champion {
    tags = [
        Tag.Mage,
        Tag.Bulk_Mage,
        Tag.Mage_Support
    ]
};

export class Kassadin extends Champion {
    tags = [
        Tag.Mage,
        Tag.Bulk_Mage,
        Tag.AD_Assassin,
        Tag.OnHit_Mage,
        Tag.Marksman
    ]
};

export class Katarina extends Champion {
    tags = [
        Tag.AP_Assassin,
        Tag.Mage,
        Tag.OnHit_Mage,
        Tag.Bulk_Mage
    ]
};

export class Kayle extends Champion {
    tags = [
        Tag.Fighter,
        Tag.OnHit_Mage,
        Tag.OnHit,
        Tag.Marksman,
        Tag.Bulk_Mage,
        Tag.Mage_Support
    ]
};

export class Kayn extends Champion {
    tags = [
        Tag.Fighter,
        Tag.AD_Assassin,
        Tag.Assassin_Support
    ]
};

export class Kennen extends Champion {
    tags = [
        Tag.Mage,
        Tag.Marksman,
        Tag.Bulk_Mage,
        Tag.OnHit,
        Tag.OnHit_Mage,
        Tag.Mage_Support,
        Tag.AP_Assassin
    ]
};

export class Khazix extends Champion {
    tags = [
        Tag.AD_Assassin,
        Tag.Fighter,
        Tag.Assassin_Support
    ]
};

export class Kindred extends Champion {
    tags = [
        Tag.Marksman,
        Tag.OnHit,
        Tag.Fighter,
        Tag.AD_Assassin,
        Tag.Assassin_Support
    ]
};

export class Kled extends Champion {
    tags = [
        Tag.Fighter,
        Tag.Tank,
        Tag.AD_Assassin,
        Tag.Tank_Support,
        Tag.Assassin_Support
    ]
};

export class KogMaw extends Champion {
    tags = [
        Tag.Marksman,
        Tag.Mage,
        Tag.Bulk_Mage,
        Tag.AP_Assassin,
        Tag.OnHit,
        Tag.OnHit_Mage,
        Tag.Mage_Support
    ]
};

export class KSante extends Champion {
    tags = [
        Tag.Tank,
        Tag.Fighter,
        Tag.OnHit,
        Tag.AD_Assassin,
        Tag.Assassin_Support,
        Tag.Tank_Support,
        Tag.Marksman
    ]
};

export class Leblanc extends Champion {
    tags = [
        Tag.AP_Assassin,
        Tag.Mage,
        Tag.Bulk_Mage,
        Tag.Marksman,
        Tag.Mage_Support
    ]
};

export class LeeSin extends Champion {
    tags = [
        Tag.Fighter,
        Tag.AD_Assassin,
        Tag.Tank,
        Tag.Assassin_Support,
        Tag.Tank_Support
    ]
};

export class Leona extends Champion {
    tags = [
        Tag.Tank,
        Tag.Tank_Support,
        Tag.Fighter
    ]
};

export class Lillia extends Champion {
    tags = [
        Tag.Fighter,
        Tag.Mage,
        Tag.Bulk_Mage,
        Tag.Mage_Support
    ]
};

export class Lissandra extends Champion {
    tags = [
        Tag.Mage,
        Tag.Bulk_Mage,
        Tag.Mage_Support,
        Tag.Marksman,
        Tag.AP_Assassin
    ]
};

export class Lucian extends Champion {
    tags = [
        Tag.Marksman,
        Tag.OnHit,
        Tag.Fighter,
        Tag.AD_Assassin,
        Tag.Assassin_Support
    ]
};

export class Lulu extends Champion {
    tags = [
        Tag.Enchanter_Support,
        Tag.Mage,
        Tag.Mage_Support,
        Tag.Marksman,
        Tag.OnHit_Mage,
        Tag.Bulk_Mage
    ]
};

export class Lux extends Champion {
    tags = [
        Tag.Mage,
        Tag.Mage_Support,
        Tag.Marksman
    ]
};

export class Malphite extends Champion {
    tags = [
        Tag.Tank,
        Tag.Fighter,
        Tag.AP_Assassin,
        Tag.Bulk_Mage,
        Tag.AD_Assassin,
        Tag.Mage_Support,
        Tag.Tank_Support
    ]
};

export class Malzahar extends Champion {
    tags = [
        Tag.Mage,
        Tag.AP_Assassin,
        Tag.Bulk_Mage,
        Tag.Mage,
        Tag.Mage_Support
    ]
};

export class Maokai extends Champion {
    tags = [
        Tag.Tank,
        Tag.Mage,
        Tag.Fighter,
        Tag.Bulk_Mage,
        Tag.AP_Assassin,
        Tag.Mage_Support,
        Tag.Tank_Support
    ]
};

export class MasterYi extends Champion {
    tags = [
        Tag.AD_Assassin,
        Tag.Fighter,
        Tag.OnHit
    ]
};

export class MissFortune extends Champion {
    tags = [
        Tag.Marksman,
        Tag.OnHit,
        Tag.Mage,
        Tag.AP_Assassin,
        Tag.Mage_Support,
        Tag.AD_Assassin,
        Tag.OnHit_Mage
    ]
};

export class MonkeyKing extends Champion {
    tags = [
        Tag.Fighter,
        Tag.Tank,
        Tag.AD_Assassin,
        Tag.Marksman,
        Tag.Assassin_Support,
        Tag.Tank_Support
    ]
};

export class Mordekaiser extends Champion {
    tags = [
        Tag.Mage,
        Tag.Bulk_Mage,
        Tag.Fighter,
        Tag.Mage_Support,
        Tag.Tank,
        Tag.Tank_Support,
        Tag.OnHit_Mage
    ]
};

export class Morgana extends Champion {
    tags = [
        Tag.Mage,
        Tag.Mage_Support,
        Tag.AP_Assassin,
        Tag.Bulk_Mage,
        Tag.Tank,
        Tag.Tank_Support
    ]
};

export class Nami extends Champion {
    tags = [
        Tag.Mage_Support,
        Tag.Mage,
        Tag.Enchanter_Support,
        Tag.AP_Assassin,
        Tag.Marksman,
        Tag.Tank,
        Tag.Tank_Support,
        Tag.Bulk_Mage,
        Tag.OnHit_Mage
    ]
};

export class Nasus extends Champion {
    tags = [
        Tag.Fighter,
        Tag.Tank,
        Tag.AD_Assassin,
        Tag.Bulk_Mage,
        Tag.Mage,
        Tag.Mage_Support,
        Tag.Tank_Support,
        Tag.Marksman
    ]
};

export class Nautilus extends Champion {
    tags = [
        Tag.Tank,
        Tag.Mage_Support,
        Tag.Mage,
        Tag.Fighter,
        Tag.Bulk_Mage,
        Tag.AP_Assassin
    ]
};

export class Neeko extends Champion {
    tags = [
        Tag.Mage,
        Tag.Mage_Support,
        Tag.Bulk_Mage,
        Tag.AP_Assassin,
        Tag.Marksman
    ]
};

export class Nidalee extends Champion {
    tags = [
        Tag.AP_Assassin,
        Tag.Mage,
        Tag.Fighter,
        Tag.Bulk_Mage,
        Tag.Mage_Support,
        Tag.Enchanter_Support,
        Tag.Marksman
    ]
};

export class Nilah extends Champion {
    tags = [
        Tag.Fighter,
        Tag.AD_Assassin,
        Tag.Marksman,
        Tag.OnHit
    ]
};

export class Nocturne extends Champion {
    tags = [
        Tag.AD_Assassin,
        Tag.Fighter,
        Tag.Assassin_Support,
        Tag.OnHit,
        Tag.Marksman
    ]
};

export class Nunu extends Champion {
    tags = [
        Tag.Tank,
        Tag.Fighter,
        Tag.Mage,
        Tag.Bulk_Mage,
        Tag.AP_Assassin,
        Tag.Mage_Support,
        Tag.Tank_Support
    ]
};

export class Olaf extends Champion {
    tags = [
        Tag.Fighter,
        Tag.Tank,
        Tag.OnHit,
        Tag.Tank_Support
    ]
};

export class Orianna extends Champion {
    tags = [
        Tag.Mage,
        Tag.Mage_Support,
        Tag.Enchanter_Support,
        Tag.AP_Assassin
    ]
};

export class Ornn extends Champion {
    tags = [
        Tag.Tank,
        Tag.Fighter,
        Tag.AD_Assassin,
        Tag.Tank_Support
    ]
};

export class Pantheon extends Champion {
    tags = [
        Tag.Fighter,
        Tag.AD_Assassin,
        Tag.Assassin_Support,
        Tag.Tank_Support,
        Tag.Tank
    ]
};

export class Poppy extends Champion {
    tags = [
        Tag.Tank,
        Tag.Fighter,
        Tag.AD_Assassin,
        Tag.Tank_Support,
        Tag.Assassin_Support
    ]
};

export class Pyke extends Champion {
    tags = [
        Tag.Assassin_Support,
        Tag.AD_Assassin,
        Tag.Fighter,
        Tag.Tank,
        Tag.Tank_Support
    ]
};

export class Qiyana extends Champion {
    tags = [
        Tag.AD_Assassin,
        Tag.Fighter,
        Tag.Assassin_Support
    ]
};

export class Quinn extends Champion {
    tags = [
        Tag.Marksman,
        Tag.AD_Assassin,
        Tag.OnHit,
        Tag.Assassin_Support,
        Tag.Fighter
    ]
};

export class Rakan extends Champion {
    tags = [
        Tag.Mage_Support,
        Tag.Enchanter_Support,
        Tag.Mage,
        Tag.AP_Assassin,
        Tag.Bulk_Mage,
        Tag.Tank_Support,
        Tag.Fighter,
        Tag.Tank
    ]
};

export class Rammus extends Champion {
    tags = [
        Tag.Tank,
        Tag.Fighter,
        Tag.AP_Assassin,
        Tag.Bulk_Mage,
        Tag.Mage,
        Tag.Tank_Support,
        Tag.Mage_Support
    ]
};

export class RekSai extends Champion {
    tags = [
        Tag.Fighter,
        Tag.AD_Assassin,
        Tag.OnHit
    ]
};

export class Rell extends Champion {
    tags = [
        Tag.Tank,
        Tag.Tank_Support,
        Tag.Fighter
    ]
};

export class Renata extends Champion {
    tags = [
        Tag.Mage_Support,
        Tag.Mage,
        Tag.Enchanter_Support,
        Tag.Bulk_Mage
    ]
};

export class Renekton extends Champion {
    tags = [
        Tag.Fighter,
        Tag.Tank,
        Tag.AD_Assassin,
        Tag.Tank_Support,
        Tag.Assassin_Support
    ]
};

export class Rengar extends Champion {
    tags = [
        Tag.AD_Assassin,
        Tag.Fighter,
        Tag.AP_Assassin,
        Tag.Bulk_Mage,
        Tag.Assassin_Support,
        Tag.Mage_Support,
        Tag.OnHit_Mage
    ]
};

export class Riven extends Champion {
    tags = [
        Tag.Fighter,
        Tag.AD_Assassin,
        Tag.Assassin_Support
    ]
};

export class Rumble extends Champion {
    tags = [
        Tag.Fighter,
        Tag.Mage,
        Tag.Bulk_Mage,
        Tag.AP_Assassin,
        Tag.Mage_Support
    ]
};

export class Ryze extends Champion {
    tags = [
        Tag.Mage,
        Tag.Bulk_Mage,
        Tag.Mage_Support,
        Tag.Marksman
    ]
};

export class Samira extends Champion {
    tags = [
        Tag.Marksman,
        Tag.AD_Assassin,
        Tag.Fighter
    ]
};

export class Sejuani extends Champion {
    tags = [
        Tag.Tank,
        Tag.Fighter,
        Tag.Bulk_Mage,
        Tag.Mage,
        Tag.AP_Assassin,
        Tag.Mage_Support,
        Tag.Tank_Support
    ]
};

export class Senna extends Champion {
    tags = [
        Tag.Marksman,
        Tag.Assassin_Support,
        Tag.AD_Assassin
    ]
};

export class Seraphine extends Champion {
    tags = [
        Tag.Mage,
        Tag.Mage_Support,
        Tag.Enchanter_Support,
        Tag.Bulk_Mage
    ]
};

export class Sett extends Champion {
    tags = [
        Tag.Fighter,
        Tag.Tank,
        Tag.AD_Assassin,
        Tag.OnHit,
        Tag.Assassin_Support,
        Tag.Tank_Support
    ]
};

export class Shaco extends Champion {
    tags = [
        Tag.AD_Assassin,
        Tag.AP_Assassin,
        Tag.Mage,
        Tag.Bulk_Mage,
        Tag.Mage_Support,
        Tag.Assassin_Support,
        Tag.Marksman
    ]
};

export class Shen extends Champion {
    tags = [
        Tag.Tank,
        Tag.Fighter,
        Tag.OnHit,
        Tag.Tank_Support
    ]
};

export class Shyvana extends Champion {
    tags = [
        Tag.Fighter,
        Tag.Tank,
        Tag.Bulk_Mage,
        Tag.Mage,
        Tag.AP_Assassin,
        Tag.OnHit_Mage,
        Tag.Tank_Support,
        Tag.Mage_Support
    ]
};

export class Singed extends Champion {
    tags = [
        Tag.Tank,
        Tag.Fighter,
        Tag.Mage,
        Tag.Bulk_Mage,
        Tag.Mage_Support,
        Tag.Tank_Support
    ]
};

export class Sion extends Champion {
    tags = [
        Tag.Tank,
        Tag.Fighter,
        Tag.Tank_Support,
        Tag.Assassin_Support,
        Tag.AD_Assassin
    ]
};

export class Sivir extends Champion {
    tags = [
        Tag.Marksman,
        Tag.OnHit,
        Tag.AD_Assassin
    ]
};

export class Skarner extends Champion {
    tags = [
        Tag.Fighter,
        Tag.Tank,
        Tag.OnHit_Mage,
        Tag.Bulk_Mage,
        Tag.OnHit,
        Tag.Tank_Support
    ]
};

export class Sona extends Champion {
    tags = [
        Tag.Mage_Support,
        Tag.Mage,
        Tag.Enchanter_Support,
        Tag.AP_Assassin,
        Tag.Fighter,
        Tag.Marksman,
        Tag.Bulk_Mage
    ]
};

export class Soraka extends Champion {
    tags = [
        Tag.Mage_Support,
        Tag.Mage,
        Tag.Enchanter_Support,
        Tag.Tank,
        Tag.Bulk_Mage,
        Tag.Marksman,
        Tag.OnHit
    ]
};

export class Swain extends Champion {
    tags = [
        Tag.Mage,
        Tag.Fighter,
        Tag.Mage_Support,
        Tag.Bulk_Mage,
        Tag.Marksman,
        Tag.Tank,
        Tag.Tank_Support
    ]
};

export class Sylas extends Champion {
    tags = [
        Tag.Mage,
        Tag.AP_Assassin,
        Tag.Mage_Support,
        Tag.Bulk_Mage
    ]
};

export class Syndra extends Champion {
    tags = [
        Tag.Mage,
        Tag.AP_Assassin,
        Tag.Marksman,
        Tag.Mage_Support
    ]
};

export class TahmKench extends Champion {
    tags = [
        Tag.Tank_Support,
        Tag.Tank,
        Tag.Mage_Support,
        Tag.Bulk_Mage,
        Tag.Fighter,
        Tag.Mage,
        Tag.OnHit
    ]
};

export class Taliyah extends Champion {
    tags = [
        Tag.Mage,
        Tag.Mage_Support,
        Tag.Bulk_Mage,
        Tag.Marksman
    ]
};

export class Talon extends Champion {
    tags = [
        Tag.AD_Assassin,
        Tag.Marksman,
        Tag.Assassin_Support,
        Tag.Fighter
    ]
};

export class Taric extends Champion {
    tags = [
        Tag.Tank_Support,
        Tag.Fighter,
        Tag.Mage_Support,
        Tag.Bulk_Mage,
        Tag.OnHit_Mage,
        Tag.Tank,
        Tag.OnHit
    ]
};

export class Teemo extends Champion {
    tags = [
        Tag.Marksman,
        Tag.AD_Assassin,
        Tag.Mage,
        Tag.Bulk_Mage,
        Tag.OnHit_Mage,
        Tag.OnHit,
        Tag.Mage_Support
    ]
};

export class Thresh extends Champion {
    tags = [
        Tag.Tank_Support,
        Tag.Fighter,
        Tag.Tank,
        Tag.Marksman
    ]
};

export class Tristana extends Champion {
    tags = [
        Tag.Marksman,
        Tag.AD_Assassin,
        Tag.OnHit
    ]
};

export class Trundle extends Champion {
    tags = [
        Tag.Fighter,
        Tag.Tank,
        Tag.OnHit,
        Tag.Marksman,
        Tag.Tank_Support
    ]
};

export class Tryndamere extends Champion {
    tags = [
        Tag.Fighter,
        Tag.AD_Assassin,
        Tag.Assassin_Support,
        Tag.OnHit,
        Tag.Marksman,
        Tag.Bulk_Mage
    ]
};

export class TwistedFate extends Champion {
    tags = [
        Tag.Mage,
        Tag.Marksman,
        Tag.Mage_Support,
        Tag.AP_Assassin,
        Tag.Bulk_Mage,
        Tag.OnHit,
        Tag.OnHit_Mage
    ]
};

export class Twitch extends Champion {
    tags = [
        Tag.Marksman,
        Tag.AD_Assassin,
        Tag.AP_Assassin,
        Tag.OnHit_Mage,
        Tag.OnHit,
        Tag.Mage_Support
    ]
};

export class Udyr extends Champion {
    tags = [
        Tag.Fighter,
        Tag.Tank,
        Tag.Bulk_Mage,
        Tag.AD_Assassin,
        Tag.Tank_Support
    ]
};

export class Urgot extends Champion {
    tags = [
        Tag.Fighter,
        Tag.Tank,
        Tag.Tank_Support,
        Tag.AD_Assassin
    ]
};

export class Varus extends Champion {
    tags = [
        Tag.Marksman,
        Tag.Mage,
        Tag.AP_Assassin,
        Tag.OnHit_Mage,
        Tag.OnHit,
        Tag.Mage_Support
    ]
};

export class Vayne extends Champion {
    tags = [
        Tag.Marksman,
        Tag.AD_Assassin,
        Tag.OnHit
    ]
};

export class Veigar extends Champion {
    tags = [
        Tag.Mage,
        Tag.Mage_Support,
        Tag.Bulk_Mage,
        Tag.Marksman,
        Tag.AP_Assassin
    ]
};

export class Velkoz extends Champion {
    tags = [
        Tag.Mage,
        Tag.Mage_Support,
        Tag.AP_Assassin,
        Tag.Bulk_Mage
    ]
};

export class Vex extends Champion {
    tags = [
        Tag.Mage,
        Tag.Mage_Support,
        Tag.AP_Assassin,
        Tag.Bulk_Mage
    ]
};

export class Vi extends Champion {
    tags = [
        Tag.Fighter,
        Tag.AD_Assassin,
        Tag.Tank,
        Tag.Tank_Support,
        Tag.Assassin_Support
    ]
};

export class Viego extends Champion {
    tags = [
        Tag.AD_Assassin,
        Tag.Fighter,
        Tag.OnHit,
        Tag.Marksman
    ]
};

export class Viktor extends Champion {
    tags = [
        Tag.Mage,
        Tag.AP_Assassin
    ]
};

export class Vladimir extends Champion {
    tags = [
        Tag.Mage,
        Tag.Bulk_Mage,
        Tag.Mage_Support,
        Tag.Marksman
    ]
};

export class Volibear extends Champion {
    tags = [
        Tag.Fighter,
        Tag.Tank,
        Tag.Mage,
        Tag.Bulk_Mage,
        Tag.Mage_Support,
        Tag.Tank_Support
    ]
};

export class Warwick extends Champion {
    tags = [
        Tag.Fighter,
        Tag.Tank,
        Tag.OnHit,
        Tag.AD_Assassin,
        Tag.Tank_Support
    ]
};

export class Xayah extends Champion {
    tags = [
        Tag.Marksman,
        Tag.OnHit,
        Tag.Fighter,
        Tag.AD_Assassin
    ]
};

export class Xerath extends Champion {
    tags = [
        Tag.Mage,
        Tag.Mage_Support,
        Tag.AP_Assassin,
        Tag.Marksman
    ]
};

export class XinZhao extends Champion {
    tags = [
        Tag.Fighter,
        Tag.AD_Assassin,
        Tag.OnHit,
        Tag.Assassin_Support,
        Tag.Marksman
    ]
};

export class Yasuo extends Champion {
    tags = [
        Tag.Fighter,
        Tag.AD_Assassin,
        Tag.Marksman,
        Tag.OnHit
    ]
};

export class Yone extends Champion {
    tags = [
        Tag.AD_Assassin,
        Tag.Fighter,
        Tag.Marksman,
        Tag.OnHit,
        Tag.Assassin_Support
    ]
};

export class Yorick extends Champion {
    tags = [
        Tag.Fighter,
        Tag.Tank,
        Tag.OnHit,
        Tag.Tank_Support
    ]
};

export class Yuumi extends Champion {
    tags = [
        Tag.Mage_Support,
        Tag.Mage,
        Tag.Enchanter_Support,
        Tag.Marksman,
        Tag.Fighter
    ]
};

export class Zac extends Champion {
    tags = [
        Tag.Tank,
        Tag.Fighter,
        Tag.Mage,
        Tag.Bulk_Mage,
        Tag.Mage_Support,
        Tag.Tank_Support,
        Tag.AP_Assassin
    ]
};

export class Zed extends Champion {
    tags = [
        Tag.AD_Assassin,
        Tag.Marksman,
        Tag.Fighter
    ]
};

export class Zeri extends Champion {
    tags = [
        Tag.Marksman,
        Tag.OnHit,
        Tag.Fighter
    ]
};

export class Ziggs extends Champion {
    tags = [
        Tag.Mage,
        Tag.AP_Assassin
    ]
};

export class Zilean extends Champion {
    tags = [
        Tag.Mage_Support,
        Tag.Mage,
        Tag.Marksman
    ]
};

export class Zoe extends Champion {
    tags = [
        Tag.Mage,
        Tag.Mage_Support,
        Tag.AP_Assassin,
        Tag.Marksman
    ]
};

export class Zyra extends Champion {
    tags = [
        Tag.Mage,
        Tag.Mage_Support,
        Tag.Bulk_Mage
    ]
};

