import { LeagueType } from "./enums/LeagueType";
import { Tag } from "./enums/Tag";
export interface Champion {
    name: string,
    normalizedName: string,
    tags: Tag[];
    type: LeagueType;
}

export const champions: Champion[] = [
    {
        name: "Aatrox",
        normalizedName: "Aatrox",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.Tank,
            Tag.AD_Assassin
        ]
    },
    {
        name: "Ahri",
        normalizedName: "Ahri",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.AP_Assassin,
            Tag.Mage_Support,
            Tag.Marksman
        ]
    },
    {
        name: "Akali",
        normalizedName: "Akali",
        type: LeagueType.Champion,
        tags: [
            Tag.AP_Assassin,
            Tag.AD_Assassin,
            Tag.Bulk_Mage,
            Tag.Mage,
            Tag.OnHit_Mage
        ]
    },
    {
        name: "Akshan",
        normalizedName: "Akshan",
        type: LeagueType.Champion,
        tags: [
            Tag.Marksman,
            Tag.AD_Assassin,
            Tag.OnHit
        ]
    },
    {
        name: "Alistar",
        normalizedName: "Alistar",
        type: LeagueType.Champion,
        tags: [
            Tag.Tank,
            Tag.Tank_Support,
            Tag.Mage_Support,
            Tag.Bulk_Mage,
            Tag.Fighter,
            Tag.AP_Assassin
        ]
    },
    {
        name: "Amumu",
        normalizedName: "Amumu",
        type: LeagueType.Champion,
        tags: [
            Tag.Tank,
            Tag.Mage,
            Tag.Bulk_Mage,
            Tag.AP_Assassin,
            Tag.Mage_Support,
            Tag.Tank_Support
        ]
    },
    {
        name: "Anivia",
        normalizedName: "Anivia",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.Mage_Support,
            Tag.Marksman
        ]
    },
    {
        name: "Annie",
        normalizedName: "Annie",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.Enchanter_Support,
            Tag.Mage_Support,
            Tag.Marksman,
            Tag.AP_Assassin
        ]
    },
    {
        name: "Aphelios",
        normalizedName: "Aphelios",
        type: LeagueType.Champion,
        tags: [
            Tag.Marksman,
            Tag.OnHit,
            Tag.Fighter
        ]
    },
    {
        name: "Ashe",
        normalizedName: "Ashe",
        type: LeagueType.Champion,
        tags: [
            Tag.Marksman,
            Tag.Assassin_Support,
            Tag.OnHit
        ]
    },
    {
        name: "Aurelion Sol",
        normalizedName: "AurelionSol",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.Bulk_Mage,
            Tag.AP_Assassin
        ]
    },
    {
        name: "Azir",
        normalizedName: "Azir",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.AP_Assassin,
            Tag.OnHit_Mage
        ]
    },
    {
        name: "Bard",
        normalizedName: "Bard",
        type: LeagueType.Champion,
        tags: [
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
    },
    {
        name: "Bel'Veth",
        normalizedName: "Belveth",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.OnHit,
            Tag.Marksman,
            Tag.AD_Assassin
        ]
    },
    {
        name: "Blitzcrank",
        normalizedName: "Blitzcrank",
        type: LeagueType.Champion,
        tags: [
            Tag.Tank,
            Tag.Fighter,
            Tag.Tank_Support,
            Tag.Mage_Support,
            Tag.Mage,
            Tag.Bulk_Mage,
            Tag.AP_Assassin,
            Tag.Marksman
        ]
    },
    {
        name: "Brand",
        normalizedName: "Brand",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.Mage_Support,
            Tag.Marksman,
            Tag.Bulk_Mage,
            Tag.AP_Assassin
        ]
    },
    {
        name: "Braum",
        normalizedName: "Braum",
        type: LeagueType.Champion,
        tags: [
            Tag.Tank_Support,
            Tag.Tank,
            Tag.Fighter,
            Tag.OnHit,
            Tag.OnHit_Mage
        ]
    },
    {
        name: "Caitlyn",
        normalizedName: "Caitlyn",
        type: LeagueType.Champion,
        tags: [
            Tag.Marksman,
            Tag.OnHit,
            Tag.Assassin_Support,
            Tag.AD_Assassin
        ]
    },
    {
        name: "Camille",
        normalizedName: "Camille",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.AD_Assassin,
            Tag.Assassin_Support
        ]
    },
    {
        name: "Cassiopeia",
        normalizedName: "Cassiopeia",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.Marksman,
            Tag.Mage_Support,
            Tag.Bulk_Mage
        ]
    },
    {
        name: "Cho'Gath",
        normalizedName: "Chogath",
        type: LeagueType.Champion,
        tags: [
            Tag.Tank,
            Tag.Mage,
            Tag.OnHit,
            Tag.Tank_Support,
            Tag.Mage_Support
        ]
    },
    {
        name: "Corki",
        normalizedName: "Corki",
        type: LeagueType.Champion,
        tags: [
            Tag.Marksman,
            Tag.Mage,
            Tag.AP_Assassin,
            Tag.AD_Assassin,
            Tag.OnHit_Mage
        ]
    },
    {
        name: "Darius",
        normalizedName: "Darius",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.Tank,
            Tag.AD_Assassin,
            Tag.Tank_Support
        ]
    },
    {
        name: "Diana",
        normalizedName: "Diana",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.Mage,
            Tag.Bulk_Mage,
            Tag.Fighter,
            Tag.OnHit_Mage
        ]
    },
    {
        name: "Draven",
        normalizedName: "Draven",
        type: LeagueType.Champion,
        tags: [
            Tag.Marksman,
            Tag.OnHit,
            Tag.AD_Assassin
        ]
    },
    {
        name: "Dr. Mundo",
        normalizedName: "DrMundo",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.Tank,
            Tag.Tank_Support
        ]
    },
    {
        name: "Ekko",
        normalizedName: "Ekko",
        type: LeagueType.Champion,
        tags: [
            Tag.AP_Assassin,
            Tag.Fighter,
            Tag.Mage,
            Tag.OnHit_Mage,
            Tag.Mage_Support
        ]
    },
    {
        name: "Elise",
        normalizedName: "Elise",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.Fighter,
            Tag.AP_Assassin,
            Tag.Mage_Support,
            Tag.Bulk_Mage
        ]
    },
    {
        name: "Evelynn",
        normalizedName: "Evelynn",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.AP_Assassin,
            Tag.Mage_Support,
            Tag.Bulk_Mage
        ]
    },
    {
        name: "Ezreal",
        normalizedName: "Ezreal",
        type: LeagueType.Champion,
        tags: [
            Tag.Marksman,
            Tag.Mage,
            Tag.OnHit_Mage,
            Tag.Assassin_Support,
            Tag.OnHit,
            Tag.AD_Assassin
        ]
    },
    {
        name: "Fiddlesticks",
        normalizedName: "Fiddlesticks",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.Mage_Support,
            Tag.Bulk_Mage,
            Tag.AP_Assassin,
            Tag.Marksman
        ]
    },
    {
        name: "Fiora",
        normalizedName: "Fiora",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.AD_Assassin,
            Tag.OnHit
        ]
    },
    {
        name: "Fizz",
        normalizedName: "Fizz",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.OnHit_Mage,
            Tag.Mage_Support,
            Tag.Bulk_Mage,
            Tag.AD_Assassin,
            Tag.AP_Assassin
        ]
    },
    {
        name: "Galio",
        normalizedName: "Galio",
        type: LeagueType.Champion,
        tags: [
            Tag.Tank,
            Tag.Mage,
            Tag.Bulk_Mage,
            Tag.AD_Assassin,
            Tag.Mage_Support,
            Tag.Tank_Support,
            Tag.Fighter
        ]
    },
    {
        name: "Gangplank",
        normalizedName: "Gangplank",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.AD_Assassin,
            Tag.Marksman
        ]
    },
    {
        name: "Garen",
        normalizedName: "Garen",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.Tank,
            Tag.AD_Assassin,
            Tag.Marksman
        ]
    },
    {
        name: "Gnar",
        normalizedName: "Gnar",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.Tank,
            Tag.OnHit,
            Tag.Marksman,
            Tag.Tank_Support
        ]
    },
    {
        name: "Gragas",
        normalizedName: "Gragas",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.Mage,
            Tag.Bulk_Mage,
            Tag.Tank,
            Tag.Mage_Support,
            Tag.Tank_Support
        ]
    },
    {
        name: "Graves",
        normalizedName: "Graves",
        type: LeagueType.Champion,
        tags: [
            Tag.Marksman,
            Tag.AD_Assassin,
            Tag.Fighter
        ]
    },
    {
        name: "Gwen",
        normalizedName: "Gwen",
        type: LeagueType.Champion,
        tags: [
            Tag.AP_Assassin,
            Tag.Bulk_Mage,
            Tag.OnHit_Mage
        ]
    },
    {
        name: "Hecarim",
        normalizedName: "Hecarim",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.Tank,
            Tag.AD_Assassin,
            Tag.AP_Assassin,
            Tag.Bulk_Mage,
            Tag.Mage
        ]
    },
    {
        name: "Heimerdinger",
        normalizedName: "Heimerdinger",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.Mage_Support,
            Tag.AP_Assassin,
            Tag.Bulk_Mage
        ]
    },
    {
        name: "Illaoi",
        normalizedName: "Illaoi",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.Tank,
            Tag.AD_Assassin,
            Tag.Assassin_Support,
            Tag.Tank_Support
        ]
    },
    {
        name: "Irelia",
        normalizedName: "Irelia",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.AD_Assassin,
            Tag.OnHit,
            Tag.Assassin_Support
        ]
    },
    {
        name: "Ivern",
        normalizedName: "Ivern",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage_Support,
            Tag.Mage,
            Tag.Bulk_Mage,
            Tag.Enchanter_Support
        ]
    },
    {
        name: "Janna",
        normalizedName: "Janna",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage_Support,
            Tag.Mage,
            Tag.Marksman,
            Tag.Enchanter_Support,
            Tag.Bulk_Mage
        ]
    },
    {
        name: "Jarvan IV",
        normalizedName: "JarvanIV",
        type: LeagueType.Champion,
        tags: [
            Tag.Tank,
            Tag.Fighter,
            Tag.AD_Assassin,
            Tag.Assassin_Support,
            Tag.Tank_Support
        ]
    },
    {
        name: "Jax",
        normalizedName: "Jax",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.AD_Assassin,
            Tag.OnHit,
            Tag.Marksman
        ]
    },
    {
        name: "Jayce",
        normalizedName: "Jayce",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.Marksman,
            Tag.OnHit,
            Tag.AD_Assassin,
            Tag.Assassin_Support
        ]
    },
    {
        name: "Jhin",
        normalizedName: "Jhin",
        type: LeagueType.Champion,
        tags: [
            Tag.Marksman,
            Tag.AD_Assassin,
            Tag.Assassin_Support
        ]
    },
    {
        name: "Jinx",
        normalizedName: "Jinx",
        type: LeagueType.Champion,
        tags: [
            Tag.Marksman,
            Tag.OnHit,
            Tag.AD_Assassin
        ]
    },
    {
        name: "Kai'Sa",
        normalizedName: "Kaisa",
        type: LeagueType.Champion,
        tags: [
            Tag.Marksman,
            Tag.AP_Assassin,
            Tag.AD_Assassin,
            Tag.OnHit_Mage,
            Tag.AP_Assassin,
            Tag.Mage,
            Tag.Mage_Support,
            Tag.OnHit
        ]
    },
    {
        name: "Kalista",
        normalizedName: "Kalista",
        type: LeagueType.Champion,
        tags: [
            Tag.Marksman,
            Tag.OnHit,
            Tag.AD_Assassin
        ]
    },
    {
        name: "Karma",
        normalizedName: "Karma",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.Tank_Support,
            Tag.Mage_Support,
            Tag.Enchanter_Support,
            Tag.AP_Assassin,
            Tag.Bulk_Mage
        ]
    },
    {
        name: "Karthus",
        normalizedName: "Karthus",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.Bulk_Mage,
            Tag.Mage_Support
        ]
    },
    {
        name: "Kassadin",
        normalizedName: "Kassadin",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.Bulk_Mage,
            Tag.AD_Assassin,
            Tag.OnHit_Mage,
            Tag.Marksman
        ]
    },
    {
        name: "Katarina",
        normalizedName: "Katarina",
        type: LeagueType.Champion,
        tags: [
            Tag.AP_Assassin,
            Tag.Mage,
            Tag.OnHit_Mage,
            Tag.Bulk_Mage
        ]
    },
    {
        name: "Kayle",
        normalizedName: "Kayle",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.OnHit_Mage,
            Tag.OnHit,
            Tag.Marksman,
            Tag.Bulk_Mage,
            Tag.Mage_Support
        ]
    },
    {
        name: "Kayn",
        normalizedName: "Kayn",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.AD_Assassin,
            Tag.Assassin_Support
        ]
    },
    {
        name: "Kennen",
        normalizedName: "Kennen",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.Marksman,
            Tag.Bulk_Mage,
            Tag.OnHit,
            Tag.OnHit_Mage,
            Tag.Mage_Support,
            Tag.AP_Assassin
        ]
    },
    {
        name: "Kha'Zix",
        normalizedName: "Khazix",
        type: LeagueType.Champion,
        tags: [
            Tag.AD_Assassin,
            Tag.Fighter,
            Tag.Assassin_Support
        ]
    },
    {
        name: "Kindred",
        normalizedName: "Kindred",
        type: LeagueType.Champion,
        tags: [
            Tag.Marksman,
            Tag.OnHit,
            Tag.Fighter,
            Tag.AD_Assassin,
            Tag.Assassin_Support
        ]
    },
    {
        name: "Kled",
        normalizedName: "Kled",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.Tank,
            Tag.AD_Assassin,
            Tag.Tank_Support,
            Tag.Assassin_Support
        ]
    },
    {
        name: "Kog'Maw",
        normalizedName: "KogMaw",
        type: LeagueType.Champion,
        tags: [
            Tag.Marksman,
            Tag.Mage,
            Tag.Bulk_Mage,
            Tag.AP_Assassin,
            Tag.OnHit,
            Tag.OnHit_Mage,
            Tag.Mage_Support
        ]
    },
    {
        name: "K'Sante",
        normalizedName: "KSante",
        type: LeagueType.Champion,
        tags: [
            Tag.Tank,
            Tag.Fighter,
            Tag.OnHit,
            Tag.AD_Assassin,
            Tag.Assassin_Support,
            Tag.Tank_Support,
            Tag.Marksman
        ]
    },
    {
        name: "LeBlanc",
        normalizedName: "Leblanc",
        type: LeagueType.Champion,
        tags: [
            Tag.AP_Assassin,
            Tag.Mage,
            Tag.Bulk_Mage,
            Tag.Marksman,
            Tag.Mage_Support
        ]
    },
    {
        name: "Lee Sin",
        normalizedName: "LeeSin",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.AD_Assassin,
            Tag.Tank,
            Tag.Assassin_Support,
            Tag.Tank_Support
        ]
    },
    {
        name: "Leona",
        normalizedName: "Leona",
        type: LeagueType.Champion,
        tags: [
            Tag.Tank,
            Tag.Tank_Support,
            Tag.Fighter
        ]
    },
    {
        name: "Lillia",
        normalizedName: "Lillia",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.Mage,
            Tag.Bulk_Mage,
            Tag.Mage_Support
        ]
    },
    {
        name: "Lissandra",
        normalizedName: "Lissandra",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.Bulk_Mage,
            Tag.Mage_Support,
            Tag.Marksman,
            Tag.AP_Assassin
        ]
    },
    {
        name: "Lucian",
        normalizedName: "Lucian",
        type: LeagueType.Champion,
        tags: [
            Tag.Marksman,
            Tag.OnHit,
            Tag.Fighter,
            Tag.AD_Assassin,
            Tag.Assassin_Support
        ]
    },
    {
        name: "Lulu",
        normalizedName: "Lulu",
        type: LeagueType.Champion,
        tags: [
            Tag.Enchanter_Support,
            Tag.Mage,
            Tag.Mage_Support,
            Tag.Marksman,
            Tag.OnHit_Mage,
            Tag.Bulk_Mage
        ]
    },
    {
        name: "Lux",
        normalizedName: "Lux",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.Mage_Support,
            Tag.Marksman
        ]
    },
    {
        name: "Malphite",
        normalizedName: "Malphite",
        type: LeagueType.Champion,
        tags: [
            Tag.Tank,
            Tag.Fighter,
            Tag.AP_Assassin,
            Tag.Bulk_Mage,
            Tag.AD_Assassin,
            Tag.Mage_Support,
            Tag.Tank_Support
        ]
    },
    {
        name: "Malzahar",
        normalizedName: "Malzahar",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.AP_Assassin,
            Tag.Bulk_Mage,
            Tag.Mage,
            Tag.Mage_Support
        ]
    },
    {
        name: "Maokai",
        normalizedName: "Maokai",
        type: LeagueType.Champion,
        tags: [
            Tag.Tank,
            Tag.Mage,
            Tag.Fighter,
            Tag.Bulk_Mage,
            Tag.AP_Assassin,
            Tag.Mage_Support,
            Tag.Tank_Support
        ]
    },
    {
        name: "Master Yi",
        normalizedName: "MasterYi",
        type: LeagueType.Champion,
        tags: [
            Tag.AD_Assassin,
            Tag.Fighter,
            Tag.OnHit
        ]
    },
    {
        name: "Miss Fortune",
        normalizedName: "MissFortune",
        type: LeagueType.Champion,
        tags: [
            Tag.Marksman,
            Tag.OnHit,
            Tag.Mage,
            Tag.AP_Assassin,
            Tag.Mage_Support,
            Tag.AD_Assassin,
            Tag.OnHit_Mage
        ]
    },
    {
        name: "Wukong",
        normalizedName: "MonkeyKing",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.Tank,
            Tag.AD_Assassin,
            Tag.Marksman,
            Tag.Assassin_Support,
            Tag.Tank_Support
        ]
    },
    {
        name: "Mordekaiser",
        normalizedName: "Mordekaiser",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.Bulk_Mage,
            Tag.Fighter,
            Tag.Mage_Support,
            Tag.Tank,
            Tag.Tank_Support,
            Tag.OnHit_Mage
        ]
    },
    {
        name: "Morgana",
        normalizedName: "Morgana",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.Mage_Support,
            Tag.AP_Assassin,
            Tag.Bulk_Mage,
            Tag.Tank,
            Tag.Tank_Support
        ]
    },
    {
        name: "Nami",
        normalizedName: "Nami",
        type: LeagueType.Champion,
        tags: [
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
    },
    {
        name: "Nasus",
        normalizedName: "Nasus",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.Tank,
            Tag.AD_Assassin,
            Tag.Bulk_Mage,
            Tag.Mage,
            Tag.Mage_Support,
            Tag.Tank_Support,
            Tag.Marksman
        ]
    },
    {
        name: "Nautilus",
        normalizedName: "Nautilus",
        type: LeagueType.Champion,
        tags: [
            Tag.Tank,
            Tag.Mage_Support,
            Tag.Mage,
            Tag.Fighter,
            Tag.Bulk_Mage,
            Tag.AP_Assassin
        ]
    },
    {
        name: "Neeko",
        normalizedName: "Neeko",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.Mage_Support,
            Tag.Bulk_Mage,
            Tag.AP_Assassin,
            Tag.Marksman
        ]
    },
    {
        name: "Nidalee",
        normalizedName: "Nidalee",
        type: LeagueType.Champion,
        tags: [
            Tag.AP_Assassin,
            Tag.Mage,
            Tag.Fighter,
            Tag.Bulk_Mage,
            Tag.Mage_Support,
            Tag.Enchanter_Support,
            Tag.Marksman
        ]
    },
    {
        name: "Nilah",
        normalizedName: "Nilah",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.AD_Assassin,
            Tag.Marksman,
            Tag.OnHit
        ]
    },
    {
        name: "Nocturne",
        normalizedName: "Nocturne",
        type: LeagueType.Champion,
        tags: [
            Tag.AD_Assassin,
            Tag.Fighter,
            Tag.Assassin_Support,
            Tag.OnHit,
            Tag.Marksman
        ]
    },
    {
        name: "Nunu & Willump",
        normalizedName: "Nunu",
        type: LeagueType.Champion,
        tags: [
            Tag.Tank,
            Tag.Fighter,
            Tag.Mage,
            Tag.Bulk_Mage,
            Tag.AP_Assassin,
            Tag.Mage_Support,
            Tag.Tank_Support
        ]
    },
    {
        name: "Olaf",
        normalizedName: "Olaf",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.Tank,
            Tag.OnHit,
            Tag.Tank_Support
        ]
    },
    {
        name: "Orianna",
        normalizedName: "Orianna",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.Mage_Support,
            Tag.Enchanter_Support,
            Tag.AP_Assassin
        ]
    },
    {
        name: "Ornn",
        normalizedName: "Ornn",
        type: LeagueType.Champion,
        tags: [
            Tag.Tank,
            Tag.Fighter,
            Tag.AD_Assassin,
            Tag.Tank_Support
        ]
    },
    {
        name: "Pantheon",
        normalizedName: "Pantheon",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.AD_Assassin,
            Tag.Assassin_Support,
            Tag.Tank_Support,
            Tag.Tank
        ]
    },
    {
        name: "Poppy",
        normalizedName: "Poppy",
        type: LeagueType.Champion,
        tags: [
            Tag.Tank,
            Tag.Fighter,
            Tag.AD_Assassin,
            Tag.Tank_Support,
            Tag.Assassin_Support
        ]
    },
    {
        name: "Pyke",
        normalizedName: "Pyke",
        type: LeagueType.Champion,
        tags: [
            Tag.Assassin_Support,
            Tag.AD_Assassin,
            Tag.Fighter,
            Tag.Tank,
            Tag.Tank_Support
        ]
    },
    {
        name: "Qiyana",
        normalizedName: "Qiyana",
        type: LeagueType.Champion,
        tags: [
            Tag.AD_Assassin,
            Tag.Fighter,
            Tag.Assassin_Support
        ]
    },
    {
        name: "Quinn",
        normalizedName: "Quinn",
        type: LeagueType.Champion,
        tags: [
            Tag.Marksman,
            Tag.AD_Assassin,
            Tag.OnHit,
            Tag.Assassin_Support,
            Tag.Fighter
        ]
    },
    {
        name: "Rakan",
        normalizedName: "Rakan",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage_Support,
            Tag.Enchanter_Support,
            Tag.Mage,
            Tag.AP_Assassin,
            Tag.Bulk_Mage,
            Tag.Tank_Support,
            Tag.Fighter,
            Tag.Tank
        ]
    },
    {
        name: "Rammus",
        normalizedName: "Rammus",
        type: LeagueType.Champion,
        tags: [
            Tag.Tank,
            Tag.Fighter,
            Tag.AP_Assassin,
            Tag.Bulk_Mage,
            Tag.Mage,
            Tag.Tank_Support,
            Tag.Mage_Support
        ]
    },
    {
        name: "Rek'Sai",
        normalizedName: "RekSai",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.AD_Assassin,
            Tag.OnHit
        ]
    },
    {
        name: "Rell",
        normalizedName: "Rell",
        type: LeagueType.Champion,
        tags: [
            Tag.Tank,
            Tag.Tank_Support,
            Tag.Fighter
        ]
    },
    {
        name: "Renata Glasc",
        normalizedName: "Renata",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage_Support,
            Tag.Mage,
            Tag.Enchanter_Support,
            Tag.Bulk_Mage
        ]
    },
    {
        name: "Renekton",
        normalizedName: "Renekton",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.Tank,
            Tag.AD_Assassin,
            Tag.Tank_Support,
            Tag.Assassin_Support
        ]
    },
    {
        name: "Rengar",
        normalizedName: "Rengar",
        type: LeagueType.Champion,
        tags: [
            Tag.AD_Assassin,
            Tag.Fighter,
            Tag.AP_Assassin,
            Tag.Bulk_Mage,
            Tag.Assassin_Support,
            Tag.Mage_Support,
            Tag.OnHit_Mage
        ]
    },
    {
        name: "Riven",
        normalizedName: "Riven",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.AD_Assassin,
            Tag.Assassin_Support
        ]
    },
    {
        name: "Rumble",
        normalizedName: "Rumble",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.Mage,
            Tag.Bulk_Mage,
            Tag.AP_Assassin,
            Tag.Mage_Support
        ]
    },
    {
        name: "Ryze",
        normalizedName: "Ryze",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.Bulk_Mage,
            Tag.Mage_Support,
            Tag.Marksman
        ]
    },
    {
        name: "Samira",
        normalizedName: "Samira",
        type: LeagueType.Champion,
        tags: [
            Tag.Marksman,
            Tag.AD_Assassin,
            Tag.Fighter
        ]
    },
    {
        name: "Sejuani",
        normalizedName: "Sejuani",
        type: LeagueType.Champion,
        tags: [
            Tag.Tank,
            Tag.Fighter,
            Tag.Bulk_Mage,
            Tag.Mage,
            Tag.AP_Assassin,
            Tag.Mage_Support,
            Tag.Tank_Support
        ]
    },
    {
        name: "Senna",
        normalizedName: "Senna",
        type: LeagueType.Champion,
        tags: [
            Tag.Marksman,
            Tag.Assassin_Support,
            Tag.AD_Assassin
        ]
    },
    {
        name: "Seraphine",
        normalizedName: "Seraphine",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.Mage_Support,
            Tag.Enchanter_Support,
            Tag.Bulk_Mage
        ]
    },
    {
        name: "Sett",
        normalizedName: "Sett",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.Tank,
            Tag.AD_Assassin,
            Tag.OnHit,
            Tag.Assassin_Support,
            Tag.Tank_Support
        ]
    },
    {
        name: "Shaco",
        normalizedName: "Shaco",
        type: LeagueType.Champion,
        tags: [
            Tag.AD_Assassin,
            Tag.AP_Assassin,
            Tag.Mage,
            Tag.Bulk_Mage,
            Tag.Mage_Support,
            Tag.Assassin_Support,
            Tag.Marksman
        ]
    },
    {
        name: "Shen",
        normalizedName: "Shen",
        type: LeagueType.Champion,
        tags: [
            Tag.Tank,
            Tag.Fighter,
            Tag.OnHit,
            Tag.Tank_Support
        ]
    },
    {
        name: "Shyvana",
        normalizedName: "Shyvana",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.Tank,
            Tag.Bulk_Mage,
            Tag.Mage,
            Tag.AP_Assassin,
            Tag.OnHit_Mage,
            Tag.Tank_Support,
            Tag.Mage_Support
        ]
    },
    {
        name: "Singed",
        normalizedName: "Singed",
        type: LeagueType.Champion,
        tags: [
            Tag.Tank,
            Tag.Fighter,
            Tag.Mage,
            Tag.Bulk_Mage,
            Tag.Mage_Support,
            Tag.Tank_Support
        ]
    },
    {
        name: "Sion",
        normalizedName: "Sion",
        type: LeagueType.Champion,
        tags: [
            Tag.Tank,
            Tag.Fighter,
            Tag.Tank_Support,
            Tag.Assassin_Support,
            Tag.AD_Assassin
        ]
    },
    {
        name: "Sivir",
        normalizedName: "Sivir",
        type: LeagueType.Champion,
        tags: [
            Tag.Marksman,
            Tag.OnHit,
            Tag.AD_Assassin
        ]
    },
    {
        name: "Skarner",
        normalizedName: "Skarner",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.Tank,
            Tag.OnHit_Mage,
            Tag.Bulk_Mage,
            Tag.OnHit,
            Tag.Tank_Support
        ]
    },
    {
        name: "Sona",
        normalizedName: "Sona",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage_Support,
            Tag.Mage,
            Tag.Enchanter_Support,
            Tag.AP_Assassin,
            Tag.Fighter,
            Tag.Marksman,
            Tag.Bulk_Mage
        ]
    },
    {
        name: "Soraka",
        normalizedName: "Soraka",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage_Support,
            Tag.Mage,
            Tag.Enchanter_Support,
            Tag.Tank,
            Tag.Bulk_Mage,
            Tag.Marksman,
            Tag.OnHit
        ]
    },
    {
        name: "Swain",
        normalizedName: "Swain",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.Fighter,
            Tag.Mage_Support,
            Tag.Bulk_Mage,
            Tag.Marksman,
            Tag.Tank,
            Tag.Tank_Support
        ]
    },
    {
        name: "Sylas",
        normalizedName: "Sylas",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.AP_Assassin,
            Tag.Mage_Support,
            Tag.Bulk_Mage
        ]
    },
    {
        name: "Syndra",
        normalizedName: "Syndra",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.AP_Assassin,
            Tag.Marksman,
            Tag.Mage_Support
        ]
    },
    {
        name: "Tahm Kench",
        normalizedName: "TahmKench",
        type: LeagueType.Champion,
        tags: [
            Tag.Tank_Support,
            Tag.Tank,
            Tag.Mage_Support,
            Tag.Bulk_Mage,
            Tag.Fighter,
            Tag.Mage,
            Tag.OnHit
        ]
    },
    {
        name: "Taliyah",
        normalizedName: "Taliyah",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.Mage_Support,
            Tag.Bulk_Mage,
            Tag.Marksman
        ]
    },
    {
        name: "Talon",
        normalizedName: "Talon",
        type: LeagueType.Champion,
        tags: [
            Tag.AD_Assassin,
            Tag.Marksman,
            Tag.Assassin_Support,
            Tag.Fighter
        ]
    },
    {
        name: "Taric",
        normalizedName: "Taric",
        type: LeagueType.Champion,
        tags: [
            Tag.Tank_Support,
            Tag.Fighter,
            Tag.Mage_Support,
            Tag.Bulk_Mage,
            Tag.OnHit_Mage,
            Tag.Tank,
            Tag.OnHit
        ]
    },
    {
        name: "Teemo",
        normalizedName: "Teemo",
        type: LeagueType.Champion,
        tags: [
            Tag.Marksman,
            Tag.AD_Assassin,
            Tag.Mage,
            Tag.Bulk_Mage,
            Tag.OnHit_Mage,
            Tag.OnHit,
            Tag.Mage_Support
        ]
    },
    {
        name: "Thresh",
        normalizedName: "Thresh",
        type: LeagueType.Champion,
        tags: [
            Tag.Tank_Support,
            Tag.Fighter,
            Tag.Tank,
            Tag.Marksman
        ]
    },
    {
        name: "Tristana",
        normalizedName: "Tristana",
        type: LeagueType.Champion,
        tags: [
            Tag.Marksman,
            Tag.AD_Assassin,
            Tag.OnHit
        ]
    },
    {
        name: "Trundle",
        normalizedName: "Trundle",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.Tank,
            Tag.OnHit,
            Tag.Marksman,
            Tag.Tank_Support
        ]
    },
    {
        name: "Tryndamere",
        normalizedName: "Tryndamere",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.AD_Assassin,
            Tag.Assassin_Support,
            Tag.OnHit,
            Tag.Marksman,
            Tag.Bulk_Mage
        ]
    },
    {
        name: "Twisted Fate",
        normalizedName: "TwistedFate",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.Marksman,
            Tag.Mage_Support,
            Tag.AP_Assassin,
            Tag.Bulk_Mage,
            Tag.OnHit,
            Tag.OnHit_Mage
        ]
    },
    {
        name: "Twitch",
        normalizedName: "Twitch",
        type: LeagueType.Champion,
        tags: [
            Tag.Marksman,
            Tag.AD_Assassin,
            Tag.AP_Assassin,
            Tag.OnHit_Mage,
            Tag.OnHit,
            Tag.Mage_Support
        ]
    },
    {
        name: "Udyr",
        normalizedName: "Udyr",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.Tank,
            Tag.Bulk_Mage,
            Tag.AD_Assassin,
            Tag.Tank_Support
        ]
    },
    {
        name: "Urgot",
        normalizedName: "Urgot",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.Tank,
            Tag.Tank_Support,
            Tag.AD_Assassin
        ]
    },
    {
        name: "Varus",
        normalizedName: "Varus",
        type: LeagueType.Champion,
        tags: [
            Tag.Marksman,
            Tag.Mage,
            Tag.AP_Assassin,
            Tag.OnHit_Mage,
            Tag.OnHit,
            Tag.Mage_Support
        ]
    },
    {
        name: "Vayne",
        normalizedName: "Vayne",
        type: LeagueType.Champion,
        tags: [
            Tag.Marksman,
            Tag.AD_Assassin,
            Tag.OnHit
        ]
    },
    {
        name: "Veigar",
        normalizedName: "Veigar",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.Mage_Support,
            Tag.Bulk_Mage,
            Tag.Marksman,
            Tag.AP_Assassin
        ]
    },
    {
        name: "Vel'Koz",
        normalizedName: "Velkoz",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.Mage_Support,
            Tag.AP_Assassin,
            Tag.Bulk_Mage
        ]
    },
    {
        name: "Vex",
        normalizedName: "Vex",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.Mage_Support,
            Tag.AP_Assassin,
            Tag.Bulk_Mage
        ]
    },
    {
        name: "Vi",
        normalizedName: "Vi",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.AD_Assassin,
            Tag.Tank,
            Tag.Tank_Support,
            Tag.Assassin_Support
        ]
    },
    {
        name: "Viego",
        normalizedName: "Viego",
        type: LeagueType.Champion,
        tags: [
            Tag.AD_Assassin,
            Tag.Fighter,
            Tag.OnHit,
            Tag.Marksman
        ]
    },
    {
        name: "Viktor",
        normalizedName: "Viktor",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.AP_Assassin
        ]
    },
    {
        name: "Vladimir",
        normalizedName: "Vladimir",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.Bulk_Mage,
            Tag.Mage_Support,
            Tag.Marksman
        ]
    },
    {
        name: "Volibear",
        normalizedName: "Volibear",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.Tank,
            Tag.Mage,
            Tag.Bulk_Mage,
            Tag.Mage_Support,
            Tag.Tank_Support
        ]
    },
    {
        name: "Warwick",
        normalizedName: "Warwick",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.Tank,
            Tag.OnHit,
            Tag.AD_Assassin,
            Tag.Tank_Support
        ]
    },
    {
        name: "Xayah",
        normalizedName: "Xayah",
        type: LeagueType.Champion,
        tags: [
            Tag.Marksman,
            Tag.OnHit,
            Tag.Fighter,
            Tag.AD_Assassin
        ]
    },
    {
        name: "Xerath",
        normalizedName: "Xerath",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.Mage_Support,
            Tag.AP_Assassin,
            Tag.Marksman
        ]
    },
    {
        name: "Xin Zhao",
        normalizedName: "XinZhao",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.AD_Assassin,
            Tag.OnHit,
            Tag.Assassin_Support,
            Tag.Marksman
        ]
    },
    {
        name: "Yasuo",
        normalizedName: "Yasuo",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.AD_Assassin,
            Tag.Marksman,
            Tag.OnHit
        ]
    },
    {
        name: "Yone",
        normalizedName: "Yone",
        type: LeagueType.Champion,
        tags: [
            Tag.AD_Assassin,
            Tag.Fighter,
            Tag.Marksman,
            Tag.OnHit,
            Tag.Assassin_Support
        ]
    },
    {
        name: "Yorick",
        normalizedName: "Yorick",
        type: LeagueType.Champion,
        tags: [
            Tag.Fighter,
            Tag.Tank,
            Tag.OnHit,
            Tag.Tank_Support
        ]
    },
    {
        name: "Yuumi",
        normalizedName: "Yuumi",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage_Support,
            Tag.Mage,
            Tag.Enchanter_Support,
            Tag.Marksman,
            Tag.Fighter
        ]
    },
    {
        name: "Zac",
        normalizedName: "Zac",
        type: LeagueType.Champion,
        tags: [
            Tag.Tank,
            Tag.Fighter,
            Tag.Mage,
            Tag.Bulk_Mage,
            Tag.Mage_Support,
            Tag.Tank_Support,
            Tag.AP_Assassin
        ]
    },
    {
        name: "Zed",
        normalizedName: "Zed",
        type: LeagueType.Champion,
        tags: [
            Tag.AD_Assassin,
            Tag.Marksman,
            Tag.Fighter
        ]
    },
    {
        name: "Zeri",
        normalizedName: "Zeri",
        type: LeagueType.Champion,
        tags: [
            Tag.Marksman,
            Tag.OnHit,
            Tag.Fighter
        ]
    },
    {
        name: "Ziggs",
        normalizedName: "Ziggs",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.AP_Assassin
        ]
    },
    {
        name: "Zilean",
        normalizedName: "Zilean",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage_Support,
            Tag.Mage,
            Tag.Marksman
        ]
    },
    {
        name: "Zoe",
        normalizedName: "Zoe",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.Mage_Support,
            Tag.AP_Assassin,
            Tag.Marksman
        ]
    },
    {
        name: "Zyra",
        normalizedName: "Zyra",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.Mage_Support,
            Tag.Bulk_Mage
        ]
    }
];

