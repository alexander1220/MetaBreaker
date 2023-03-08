//https://developer.riotgames.com/docs/lol#data-dragon
//runes-community https://raw.communitydragon.org/latest/game/assets/perks/styles/domination/
//runes https://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/runesReforged.json
//individual champ(for abilities) https://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/champion/Aatrox.json

const fullChampionsUrl = 'https://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/champion.json';
const itemsUrl = 'https://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/item.json';
// const legendaryItemUrl = 'https://raw.githubusercontent.com/alexander1220/MetaBreaker/dev/res/legendaries.json';
const legendaryItemUrl = 'res/legendaries.json';
const bootsItemUrl = 'res/boots.json';
const mythicItemUrl = 'res/mythics.json';
const championUrl = 'res/champs.json';
const startersUrl = 'res/starters.json';
const summonersUrl = 'res/summoners.json';
const runesUrl = 'res/runes.json';
const keystonesUrl = 'res/keystones.json';
const runeIconUrl = 'https://ddragon.canisback.com/img/';

let champions;
let fullChampions;
let selectedChampions = [];
let boots;
let legendaries;
let mythics;
let starters;
let summoners;
let runes;
let keystones;

Promise.all([fetchChampions(), fetchFullChampions(), fetchSummoners(), fetchStarters(), fetchBoots(), fetchMythics(), fetchLegendaries(), fetchRunes(), fetchKeystones()]).then(() => {
    fillChampionKeys();
    generate();
    fillChamps();
    searchChampion();
});

const switches = {
    top: document.getElementById('switchTop'),
    jgl: document.getElementById('switchJgl'),
    mid: document.getElementById('switchMid'),
    adc: document.getElementById('switchAdc'),
    sup: document.getElementById('switchSup'),
};

setSwitches();

async function fetchFullChampions() {
    await Promise.resolve(
        fetch(fullChampionsUrl)
            .then(res => res.json())
            .then(out => {
                fullChampions = out.data;
            })
            .catch(err => { throw err }));
}
async function fetchChampions() {
    await Promise.resolve(
        fetch(championUrl)
            .then(res => res.json())
            .then(out => {
                champions = out;
            })
            .catch(err => { throw err }));
}
async function fetchSummoners() {
    await Promise.resolve(
        fetch(summonersUrl)
            .then(res => res.json())
            .then(out => {
                summoners = out;
            })
            .catch(err => { throw err }));
}
async function fetchStarters() {
    await Promise.resolve(
        fetch(startersUrl)
            .then(res => res.json())
            .then(out => {
                starters = out;
            })
            .catch(err => { throw err }));
}
async function fetchBoots() {
    await Promise.resolve(
        fetch(bootsItemUrl)
            .then(res => res.json())
            .then(out => {
                boots = out;
            })
            .catch(err => { throw err }));
}
async function fetchLegendaries() {
    await Promise.resolve(
        fetch(legendaryItemUrl)
            .then(res => res.json())
            .then(out => {
                legendaries = out;
            })
            .catch(err => { throw err }));
}
async function fetchMythics() {
    await Promise.resolve(
        fetch(mythicItemUrl)
            .then(res => res.json())
            .then(out => {
                mythics = out;
            })
            .catch(err => { throw err }));
}
async function fetchRunes() {
    await Promise.resolve(
        fetch(runesUrl)
            .then(res => res.json())
            .then(out => {
                runes = out;
            })
            .catch(err => { throw err }));
}
async function fetchKeystones() {
    await Promise.resolve(
        fetch(keystonesUrl)
            .then(res => res.json())
            .then(out => {
                keystones = out;
            })
            .catch(err => { throw err }));
}
function fillChampionKeys() {
    let keys = Object.keys(champions);
    keys.forEach(element => {
        selectedChampions.push(element);
    });
}

function generate() {
    if (selectedChampions.length <= 0) {
        alert("Please select atleast one champion.");
        return;
    }

    var champKey = selectedChampions[selectedChampions.length * Math.random() << 0];
    var randChamp = champions[champKey];

    console.log(randChamp.name);
    console.log(randChamp.tags);
    var tagKeys = Object.keys(randChamp.tags);
    var tagKey = tagKeys[tagKeys.length * Math.random() << 0];
    var randTag = randChamp.tags[tagKey];
    var givenItems = [];
    var blockedItems = [];

    var isSupp = false;
    var lanes = [switches.top, switches.jgl, switches.mid, switches.adc, switches.sup]
    var enabledLanes = lanes.filter(s => s.checked);
    var randLane;
    var suppChamps = selectedChampions.filter(champ => champions[champ].tags.includes("MageSupport") || champions[champ].tags.includes("TankSupport") || champions[champ].tags.includes("AssassinSupport") || champions[champ].tags.includes("EnchanterSupport"));

    if (enabledLanes.length > 0) {
        var suppsAvailable = suppChamps.length > 0;
        if (!suppsAvailable)
            enabledLanes = enabledLanes.filter(s => !s.id.includes("Sup"));
        if (!enabledLanes.length > 0) {
            alert("There is no champion for this specific role selected. Don't troll too hard!");
            return;
        }

        randLane = enabledLanes[enabledLanes.length * Math.random() << 0];
        isSupp = randLane.id.includes("Sup");
    } else {
        alert("Please select atleast one role.");
        return;
    }

    if (isSupp) {
        if (suppChamps.length > 0) {
            var isPossib = false;
            while (!isPossib) {
                champKey = selectedChampions[selectedChampions.length * Math.random() << 0];
                randChamp = champions[champKey];
                tagKeys = Object.keys(randChamp.tags);
                randTag = randChamp.tags[tagKey];
                for (var i = 0; i < randChamp.tags.length; i++) {
                    if (randChamp.tags[i] == "MageSupport" || randChamp.tags[i] == "EnchanterSupport" || randChamp.tags[i] == "TankSupport" || randChamp.tags[i] == "AssassinSupport")
                        isPossib = true;
                }
            }
        }

        if (!randChamp.tags.includes("MageSupport") && !randChamp.tags.includes("TankSupport") && !randChamp.tags.includes("EnchanterSupport") && !randChamp.tags.includes("AssassinSupport")) {
            alert("There is no champion for this specific role selected. Don't troll too hard!");
            return;
        } else {
            var isPossible = false;
            while (!isPossible) {

                tagKey = tagKeys[tagKeys.length * Math.random() << 0];
                randTag = randChamp.tags[tagKey];
                if (randTag == "MageSupport" || randTag == "EnchanterSupport" || randTag == "TankSupport" || randTag == "AssassinSupport")
                    isPossible = true;
            }
        }
    } else {
        var isPossible = false;
        while (!isPossible) {

            tagKey = tagKeys[tagKeys.length * Math.random() << 0];
            randTag = randChamp.tags[tagKey];
            if (randTag != "MageSupport" && randTag != "EnchanterSupport" && randTag != "TankSupport" && randTag != "AssassinSupport")
                isPossible = true;
        }
    }

    document.getElementById("championIcon").src = "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/champion/" + champKey + ".png";
    document.getElementById("championIcon").parentElement.setAttribute("data-tooltip", randChamp.name);
    var laneLink = "";
    var laneName = "";
    switch (randLane.id) {
        case 'switchSup':
            laneLink = "icon-position-utility-blue.png";
            laneName = "Support";
            break;
        case 'switchAdc':
            laneLink = "icon-position-bottom-blue.png";
            laneName = "ADC";
            break;
        case 'switchJgl':
            laneLink = "icon-position-jungle-blue.png";
            laneName = "Jungle";
            break;
        case 'switchMid':
            laneLink = "icon-position-middle-blue.png";
            laneName = "Mid";
            break;
        case 'switchTop':
            laneLink = "icon-position-top-blue.png";
            laneName = "Top";
            break;
    }

    document.getElementById("lane").src = "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/" + laneLink;
    document.getElementById("lane").parentElement.setAttribute("data-tooltip", laneName);
    document.getElementById("buildDescription").innerHTML = randChamp.name + ", " + randTag.replace("AD", "Ad").replace("AP", "Ap").replace(/([a-z])([A-Z])/g, '$1 $2');

    //STARTER
    var starterArray = objectPropertiesToArray(starters);
    var possibleStarters = starterArray.filter(s => s.objVal.tags.includes(randTag));
    if (randLane.id == "switchJgl") {
        possibleStarters = starterArray.filter(s => s.objVal.tags.includes("Jungle"));
    }
    var chosenStarter = possibleStarters[possibleStarters.length * Math.random() << 0];
    document.getElementById("starterItem").src = "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/item/" + chosenStarter.objKey + ".png";
    document.getElementById("starterItem").parentElement.setAttribute("data-tooltip", chosenStarter.objVal.name);

    var summonerKeys = Object.keys(summoners);
    var summoner = 0;
    var firstSummoner;
    while (summoner == 0) {
        var key = summonerKeys[summonerKeys.length * Math.random() << 0];
        var randItem = summoners[key];
        if (key != "Flash") {
            if (randItem.tags.includes(randTag)) {
                summoner = randItem;
                document.getElementById("sumSpell1").src = "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/" + summoner.name + ".png";
                document.getElementById("sumSpell1").parentElement.setAttribute("data-tooltip", key);
                firstSummoner = key;
            }
        }
    }
    document.getElementById("sumSpell2").src = "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SummonerFlash.png";
    document.getElementById("sumSpell2").parentElement.setAttribute("data-tooltip", "Flash"); // daweil nur flash lassen?
    if (randChamp.name == "Yuumi" && isSupp) {
        summonersKeys = summonerKeys.filter(yk => summoners[yk].name != summoner);
        summoner = 0;

        while (summoner == 0) {
            key = summonerKeys[summonerKeys.length * Math.random() << 0];
            console.log(key);
            randItem = summoners[key];
            if (key != "Flash" && key != firstSummoner) {
                if (randItem.tags.includes(randTag)) {
                    summoner = randItem;
                    document.getElementById("sumSpell2").src = "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/" + summoner.name + ".png";
                    document.getElementById("sumSpell2").parentElement.setAttribute("data-tooltip", key);
                }
            }
        }
    }
    if (randLane.id == "switchJgl") {
        document.getElementById("sumSpell1").src = "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SummonerSmite.png";
        document.getElementById("sumSpell1").parentElement.setAttribute("data-tooltip", "Smite");
    }

    var toGiveItems = [];
    //GIVE MYTHIC
    var mythicsArray = objectPropertiesToArray(mythics);
    var possibleMythics = mythicsArray.filter(m => m.objVal.tags.includes(randTag));
    var chosenMythic = possibleMythics[possibleMythics.length * Math.random() << 0];
    toGiveItems.push(chosenMythic);
    blockedItems.push(chosenMythic.objVal.blocking);
    //GIVE BOOTS (except cassio)
    if (randChamp.name != "Cassiopeia" && !(randChamp.name == "Yuumi" && randLane.id == "switchSup")) {
        var bootsArray = objectPropertiesToArray(boots);
        var possibleBoots = bootsArray.filter(b => b.objVal.tags.includes(randTag));
        var chosenBoots = possibleBoots[possibleBoots.length * Math.random() << 0];
        toGiveItems.push(chosenBoots);
        blockedItems.push(chosenBoots.objVal.blocking);
        document.getElementById("item2").setAttribute("style", "border-color: rgb(168, 168, 221)");
    } else {
        document.getElementById("item2").setAttribute("style", "");
    }
    //GIVE REST OF ITEMS
    if (randLane.id == "switchSup")
        toGiveItems.push(chosenStarter)

    var legisArray = objectPropertiesToArray(legendaries);
    var possibleLegis = legisArray.filter(leg => leg.objVal.tags.includes(randTag));
    var itemsToGive = 6 - toGiveItems.length;
    for (var i = 0; i < itemsToGive; i++) {
        possibleLegis = possibleLegis.filter(leg => !toGiveItems.includes(leg) && !blockedItems.flat().includes(leg.objKey));
        var chosenLegi = possibleLegis[possibleLegis.length * Math.random() << 0];
        toGiveItems.push(chosenLegi);
        blockedItems.push(chosenLegi.objVal.blocking);
    }
    console.log(toGiveItems);
    for (var i = 0; i < 6; i++) {
        var item = toGiveItems[i];
        var itemElement = "item" + (i + 1);
        document.getElementById(itemElement).src = "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/item/" + item.objKey + ".png";
        document.getElementById(itemElement).parentElement.setAttribute("data-tooltip", item.objVal.name);
        document.getElementById(itemElement).parentElement.setAttribute("aria-busy", "true");
        document.getElementById(itemElement).onload = function () {
            document.getElementById(itemElement).parentElement.setAttribute("aria-busy", "false");
        };
    }

    var blockedRunes = [];
    var keys = Object.keys(keystones);
    console.log(keys);
    keys = keys.filter(k => keystones[k].tags.includes(randTag));
    console.log(keys);
    var key = keys[keys.length * Math.random() << 0];
    console.log(randTag);

    var randKeystone = keystones[key];
    blockedRunes.push(randKeystone.blocking);
    var rune = 0;
    var runeKeys = Object.keys(runes);
    runeKeys = runeKeys.filter(rk => runes[rk].tags.includes(randTag));
    console.log(runeKeys);
    while (rune == 0) {
        var key = runeKeys[runeKeys.length * Math.random() << 0];
        var randRune = runes[key];
        if (!blockedRunes.flat().includes(randRune.id))
            rune = randRune;
    }
    document.getElementById("rune1").src = runeIconUrl + randKeystone.icon;
    document.getElementById("rune1").parentElement.setAttribute("data-tooltip", randKeystone.name);
    document.getElementById("rune2").src = runeIconUrl + rune.icon;
    document.getElementById("rune2").parentElement.setAttribute("data-tooltip", rune.name);
    console.log("KEYSTONE: " + randKeystone.name + " with RUNE: " + rune.name);
}

function objectPropertiesToArray(object) {
    var result = [];
    for (var objKey in object)
        result.push({ objKey, "objVal": object[objKey] })
    return result;
}

function randomKeyValFromObject(object) {
    var objKeys = Object.keys(object);
    var key = objKeys[objKeys.length * Math.random() << 0];
    return { "objKey": key, "objVal": object[key] };
}

function fillChamps() {
    var champGrid = document.getElementById('champselect');
    let keys = Object.keys(champions);
    keys.forEach(element => {
        var newChamp = document.createElement('img');
        newChamp.setAttribute('id', element);
        newChamp.setAttribute('class', "selectedChamp");
        newChamp.src = "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/champion/" + element + ".png";
        newChamp.addEventListener('click', function (e) {
            if (newChamp.getAttribute('class') == 'deselectedChamp') {
                newChamp.setAttribute('class', 'selectedChamp');
                if (!selectedChampions.includes(element))
                    selectedChampions.push(element);
            } else {
                newChamp.setAttribute('class', 'deselectedChamp');
                selectedChampions = selectedChampions.filter(e => e !== element);
            }
        });
        selectedChampions.push(element);
        champGrid.appendChild(newChamp);
    });
    console.log(keys.length);
}

function deselectAll() {
    var champGrid = document.getElementById('champselect');
    var children = champGrid.children;
    for (var i = 0; i < children.length; i++) {
        children[i].setAttribute('class', 'deselectedChamp');
        selectedChampions = selectedChampions.filter(e => e !== children[i].id);
    }
}

function selectAll() {
    var champGrid = document.getElementById('champselect');
    var children = champGrid.children;
    for (var i = 0; i < children.length; i++) {
        children[i].setAttribute('class', 'selectedChamp');
        selectedChampions.push(children[i].id);
    }
}

function searchChampion() {
    const searchChampions = Object.values(fullChampions);
    function searchChampion(query) {
        return searchChampions.filter(champion =>
            champion.name.toLowerCase().includes(query.toLowerCase())
        );
    }

    // Event listener for search input changes
    const searchInput = document.querySelector('#search-input');
    searchInput.addEventListener('input', () => {
        const query = searchInput.value;
        const results = searchChampion(query);
        const searchResultsDiv = document.querySelector('#champselect');
        var children = searchResultsDiv.children;
        for (var i = 0; i < children.length; i++) {
            children[i].setAttribute('style', "display:none");
        }
        if (results.length > 0) {
            for (var i = 0; i < results.length; i++) {
                children[results[i].id].setAttribute('style', "display:inline");
            }
        } else {
            //document.getElementById('nochampsfound').setAttribute('style', "display:inline");
        }
    });
}

function setSwitches() {
    var keys = Object.keys(switches);
    keys.forEach(key => {
        switches[key].addEventListener('click', function (e) {
            document.getElementById('switchFill').checked = false;
        });
    });

    document.getElementById('switchFill').addEventListener('click', function (e) {
        if (document.getElementById('switchFill').checked == false)
            return;
        var keys = Object.keys(switches);
        keys.forEach(key => {
            switches[key].checked = true;
        });
    });
}
