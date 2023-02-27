//https://developer.riotgames.com/docs/lol#data-dragon
//runes-community https://raw.communitydragon.org/latest/game/assets/perks/styles/domination/
//runes https://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/runesReforged.json
//individual champ(for abilities) http://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/champion/Aatrox.json

const fullChampionsUrl = 'http://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/champion.json';
const itemsUrl = 'http://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/item.json';
const legendaryItemUrl = 'https://raw.githubusercontent.com/alexander1220/MetaBreaker/dev/res/legendaries.json';
const bootsItemUrl = 'https://raw.githubusercontent.com/alexander1220/MetaBreaker/dev/res/boots.json';
const mythicItemUrl = 'https://raw.githubusercontent.com/alexander1220/MetaBreaker/dev/res/mythics.json';
const championUrl = 'https://raw.githubusercontent.com/alexander1220/MetaBreaker/dev/res/champs.json';
const startersUrl = 'https://raw.githubusercontent.com/alexander1220/MetaBreaker/dev/res/starters.json';
const summonersUrl = 'https://raw.githubusercontent.com/alexander1220/MetaBreaker/dev/res/summoners.json';

let champions;
let fullChampions;
let selectedChampions = [];
let boots;
let legendaries;
let mythics;
let starters;
let summoners;

Promise.all([fetchChampions(), fetchFullChampions(), fetchSummoners(), fetchStarters(), fetchBoots(), fetchMythics(), fetchLegendaries()]).then(() => {
    fillChamps();
    generate();
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

    document.getElementById("championIcon").src = "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/champion/" + champKey + ".png";
    var laneLink = "";
    switch (randLane.id) {
        case 'switchSup':
            laneLink = "icon-position-utility-blue.png";
            break;
        case 'switchAdc':
            laneLink = "icon-position-bottom-blue.png";
            break;
        case 'switchJgl':
            laneLink = "icon-position-jungle-blue.png";
            break;
        case 'switchMid':
            laneLink = "icon-position-middle-blue.png";
            break;
        case 'switchTop':
            laneLink = "icon-position-top-blue.png";
            break;
    }

    document.getElementById("lane").src = "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/" + laneLink;
    var starterKeys = Object.keys(starters);
    var starter = 0;
    while (starter == 0) {
        var key = starterKeys[starterKeys.length * Math.random() << 0];
        var randItem = starters[key];
        if (randItem.tags.includes(randTag)) {
            starter = randItem;
            givenItems.push(starter);
            document.getElementById("starterItem").src = "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/item/" + key + ".png";
            document.getElementById("starterItem").parentElement.setAttribute("data-tooltip", starter.name);
        }
    }

    var summonerKeys = Object.keys(summoners);
    var summoner = 0;
    while (summoner == 0) {
        var key = summonerKeys[summonerKeys.length * Math.random() << 0];
        var randItem = summoners[key];
        if (key != "Flash") {
            if (randItem.tags.includes(randTag)) {
                summoner = randItem;
                givenItems.push(summoner);
                document.getElementById("sumSpell1").src = "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/" + summoner.name + ".png";
                document.getElementById("sumSpell1").parentElement.setAttribute("data-tooltip", key);
            }
        }

        document.getElementById("sumSpell2").src = "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/SummonerFlash.png";
        document.getElementById("sumSpell2").parentElement.setAttribute("data-tooltip", "Flash"); // daweil nur flash lassen?
    }

    var bootKeys = Object.keys(boots);
    var boot = 0;
    while (boot == 0) {
        var key = bootKeys[bootKeys.length * Math.random() << 0];
        var randItem = boots[key];
        if (randItem.tags.includes(randTag)) {
            boot = randItem;
            givenItems.push(boot);
            document.getElementById("item1").src = "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/item/" + key + ".png";
            document.getElementById("item1").parentElement.setAttribute("data-tooltip", boot.name);
        }
    }

    var mythicKeys = Object.keys(mythics);
    var mythic = 0;
    while (mythic == 0) {
        var key = mythicKeys[mythicKeys.length * Math.random() << 0];
        var randItem = mythics[key];
        if (randItem.tags.includes(randTag)) {
            mythic = randItem;
            givenItems.push(mythic);
            if (randItem.hasOwnProperty("blocking"))
                blockedItems.push(randItem.blocking)
            document.getElementById("item2").src = "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/item/" + key + ".png";
            document.getElementById("item2").parentElement.setAttribute("data-tooltip", mythic.name);
        }
    }

    let items = legendaries;
    var keys = Object.keys(items);
    for (let i = 2; i < 6; i++) {
        var key = keys[keys.length * Math.random() << 0];
        var randItem = items[key];
        if (givenItems.includes(randItem.name) || !randItem.tags.includes(randTag) || blockedItems.flat().includes(key)) {
            i--;
            continue;
        }

        if (randItem.hasOwnProperty("blocking"))
            blockedItems.push(randItem.blocking)

        givenItems.push(randItem.name);
        var itemId = "item" + (i + 1);
        document.getElementById(itemId).src = "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/item/" + key + ".png";
        document.getElementById(itemId).parentElement.setAttribute("data-tooltip", randItem.name);
    }
}

function fillChamps() {
    var champGrid = document.getElementById('champselect');
    let keys = Object.keys(champions);
    keys.forEach(element => {
        var newChamp = document.createElement('img');
        newChamp.setAttribute('id', element);
        newChamp.setAttribute('class', "selectedChamp");
        newChamp.src = "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/champion/" + element + ".png";
        newChamp.addEventListener('click', function (e) {
            if (newChamp.getAttribute('class') == 'deselectedChamp') {
                newChamp.setAttribute('class', 'selectedChamp');
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
