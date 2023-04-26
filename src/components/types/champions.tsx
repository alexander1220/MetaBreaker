import { LeagueType } from "./enums/LeagueType";
import { Tag } from "./enums/Tag";
export interface Champion {
    id: number,
    name: string,
    normalizedName: string,
    tags: Tag[];
    type: LeagueType;
}

export const champions: Champion[] = [
    {
        id: 0,
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
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 10,
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
        id: 11,
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
        id: 12,
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
        id: 13,
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
        id: 14,
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
        id: 15,
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
        id: 16,
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
        id: 17,
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
        id: 18,
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
        id: 19,
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
        id: 20,
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
        id: 21,
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
        id: 22,
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
        id: 23,
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
        id: 24,
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
        id: 25,
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
        id: 26,
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
        id: 27,
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
        id: 28,
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
        id: 29,
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
        id: 30,
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
        id: 31,
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
        id: 32,
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
        id: 33,
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
        id: 34,
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
        id: 35,
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
        id: 36,
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
        id: 37,
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
        id: 38,
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
        id: 39,
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
        id: 40,
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
        id: 41,
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
        id: 42,
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
        id: 43,
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
        id: 44,
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
        id: 45,
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
        id: 46,
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
        id: 47,
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
        id: 48,
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
        id: 49,
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
        id: 50,
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
        id: 51,
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
        id: 52,
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
        id: 53,
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
        id: 54,
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
        id: 55,
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
        id: 56,
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
        id: 57,
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
        id: 58,
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
        id: 59,
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
        id: 60,
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
        id: 61,
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
        id: 62,
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
        id: 63,
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
        id: 64,
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
        id: 65,
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
        id: 66,
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
        id: 67,
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
        id: 68,
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
        id: 69,
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
        id: 70,
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
        id: 71,
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
        id: 72,
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
        id: 73,
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
        id: 74,
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
        id: 75,
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
        id: 76,
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
        id: 77,
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
        id: 78,
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
        id: 79,
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
        id: 80,
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
        id: 81,
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
        id: 82,
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
        id: 83,
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
        id: 84,
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
        id: 85,
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
        id: 86,
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
        id: 87,
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
        id: 88,
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
        id: 89,
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
        id: 90,
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
        id: 91,
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
        id: 92,
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
        id: 93,
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
        id: 94,
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
        id: 95,
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
        id: 96,
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
        id: 97,
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
        id: 98,
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
        id: 99,
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
        id: 100,
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
        id: 101,
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
        id: 102,
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
        id: 103,
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
        id: 104,
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
        id: 105,
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
        id: 106,
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
        id: 107,
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
        id: 108,
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
        id: 109,
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
        id: 110,
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
        id: 111,
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
        id: 112,
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
        id: 113,
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
        id: 114,
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
        id: 115,
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
        id: 116,
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
        id: 117,
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
        id: 118,
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
        id: 119,
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
        id: 120,
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
        id: 121,
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
        id: 122,
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
        id: 123,
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
        id: 124,
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
        id: 125,
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
        id: 126,
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
        id: 127,
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
        id: 128,
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
        id: 129,
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
        id: 130,
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
        id: 131,
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
        id: 132,
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
        id: 133,
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
        id: 134,
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
        id: 135,
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
        id: 136,
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
        id: 137,
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
        id: 138,
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
        id: 139,
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
        id: 140,
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
        id: 141,
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
        id: 142,
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
        id: 143,
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
        id: 144,
        name: "Viktor",
        normalizedName: "Viktor",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.AP_Assassin
        ]
    },
    {
        id: 145,
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
        id: 146,
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
        id: 147,
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
        id: 148,
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
        id: 149,
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
        id: 150,
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
        id: 151,
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
        id: 152,
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
        id: 153,
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
        id: 154,
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
        id: 155,
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
        id: 156,
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
        id: 157,
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
        id: 158,
        name: "Ziggs",
        normalizedName: "Ziggs",
        type: LeagueType.Champion,
        tags: [
            Tag.Mage,
            Tag.AP_Assassin
        ]
    },
    {
        id: 159,
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
        id: 160,
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
        id: 161,
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

