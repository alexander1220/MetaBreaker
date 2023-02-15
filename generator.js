//https://developer.riotgames.com/docs/lol#data-dragon
//runes-community https://raw.communitydragon.org/latest/game/assets/perks/styles/domination/
//runes https://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/runesReforged.json
generate();
fillChamps();

document.getElementById('switchTop').addEventListener('click', function (e) {
    console.log("top champs: " + document.getElementById('switchTop').checked);
});

function generate() {
    var champsUrl = 'http://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/champion.json';
    var itemsUrl = 'http://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/item.json';

    fetch(champsUrl)
        .then(res => res.json())
        .then(out => {
            let champions = out.data;
            var keys = Object.keys(champions);
            var randChamp = champions[keys[keys.length * Math.random() << 0]];
            console.log(randChamp.name);
            console.log(randChamp.tags);
            document.getElementById("championIcon").src = "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/champion/" + randChamp.id + ".png";
        })
        .catch(err => { throw err });

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
    var champGrip = document.getElementById('champselect');
    var champsUrl = 'http://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/champion.json';

    fetch(champsUrl)
        .then(res => res.json())
        .then(out => {
            let champions = out.data;
            var keys = Object.keys(champions);
            keys.forEach(element => {
                var champ = champions[element];
                var newChamp = document.createElement('img');
                newChamp.src = "http://ddragon.leagueoflegends.com/cdn/13.3.1/img/champion/" + champ.id + ".png";
                champGrip.appendChild(newChamp);
            });
            console.log(keys.length);
        })
        .catch(err => { throw err });
}