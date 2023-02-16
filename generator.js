//https://developer.riotgames.com/docs/lol#data-dragon
//runes-community https://raw.communitydragon.org/latest/game/assets/perks/styles/domination/
//runes https://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/runesReforged.json
//individual champ(for abilities) http://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/champion/Aatrox.json

const championsUrl = 'http://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/champion.json';
const itemsUrl = 'http://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/item.json';
let champions;
fetchChampions().then(() => {
    generate();
    searchChampion();
    fillChamps();
});

const switches = {
    top: document.getElementById('switchTop'),
    jgl: document.getElementById('switchJgl'),
    mid: document.getElementById('switchMid'),
    adc: document.getElementById('switchAdc'),
    sup: document.getElementById('switchSup'),
};

setSwitches();

async function fetchChampions() {
    await Promise.resolve(
        fetch(championsUrl)
            .then(res => res.json())
            .then(out => {
                champions = out.data;
            })
            .catch(err => { throw err }));
}

function generate() {

    var keys = Object.keys(champions);
    var randChamp = champions[keys[keys.length * Math.random() << 0]];
    console.log(randChamp.name);
    console.log(randChamp.tags);
    document.getElementById("championIcon").src = "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/champion/" + randChamp.id + ".png";

    fetch(itemsUrl)
        .then(res => res.json())
        .then(out => {
            var givenItems = [];
            let items = out.data;
            var keys = Object.keys(items);
            for (let i = 0; i < 6; i++) {
                var key = keys[keys.length * Math.random() << 0];
                var randItem = items[key];
                if (!randItem.colloq.startsWith(';') || givenItems.includes(randItem.name) || randItem.maps['11'] == false || randItem.tags.includes("Consumable") || randItem.tags.includes("Lane") || randItem.hasOwnProperty('into') || randItem.hasOwnProperty('consumed')) {
                    i--;
                    continue;
                }
                givenItems.push(randItem.name);
                console.log(randItem.name);
                var itemId = "item" + (i + 1);
                document.getElementById(itemId).src = "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/item/" + key + ".png";
            }
            console.log(givenItems);
        })
        .catch(err => { throw err });
}

function fillChamps() {
    var champGrid = document.getElementById('champselect');
    let keys = Object.keys(champions);
    keys.forEach(element => {
        var champ = champions[element];
        var newChamp = document.createElement('img');
        newChamp.setAttribute('id', champ.id);
        newChamp.setAttribute('class', "selectedChamp");
        newChamp.src = "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/champion/" + champ.id + ".png";
        newChamp.addEventListener('click', function (e) {
            if (newChamp.getAttribute('class') == 'deselectedChamp')
                newChamp.setAttribute('class', 'selectedChamp');
            else
                newChamp.setAttribute('class', 'deselectedChamp');
        });
        champGrid.appendChild(newChamp);
    });
    console.log(keys.length);
}

function deselectAll() {
    var champGrid = document.getElementById('champselect');
    var children = champGrid.children;
    for (var i = 0; i < children.length; i++) {
        children[i].setAttribute('class', 'deselectedChamp');
    }
}

function selectAll() {
    var champGrid = document.getElementById('champselect');
    var children = champGrid.children;
    for (var i = 0; i < children.length; i++) {
        children[i].setAttribute('class', 'selectedChamp');
    }
}

function searchChampion() {
    const searchChampions = Object.values(champions);
    // Search function
    function searchChampion(query) {
        //Basic Sort if query is found in any part of the name
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