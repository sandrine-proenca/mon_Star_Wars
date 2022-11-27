const btnSend1 = document.getElementById("btnSend1");
const inputPeople = document.getElementById("inputPeople");
const affichage1 = document.getElementById("affichage1");

btnSend1.addEventListener("click",getPeople);

function getPeople() {
    
    const number = inputPeople.value;
    const url = `https://swapi.dev/api/people/${number}/`;


    fetch (url)

    .then (function(response) {
        return response.json();        
    })

    .then (function(responseJson) {

    affichage1.innerHTML =
        `<p>Nom du personnage: ${responseJson.name}</p>
        <p>Genre: ${responseJson.gender}</p>
        <p>Taille: ${responseJson.height}</p>
        <p>Poids: ${responseJson.mass}</p>
        <p>Couleur de peau: ${responseJson.skin_color}</p>
        <p>Couleur de cheveux: ${responseJson.hair_color}</p>
        <p>Couleur des yeux: ${responseJson.eye_color}</p>
        <p>Année de naissance: ${responseJson.birth_year}</p>
        <p>Monde d’accueil: ${responseJson.homeworld}</p>
        <p>Véhicules pilotés: ${responseJson.species.vehicles}</p>
        <p>Vaisseaux spatiaux: ${responseJson.starships}</p>`
    })
console.log('maintenant !');
}

//////////////////////////////////////////////////////////////////////

const btnSend2 = document.getElementById("btnSend2");
const inputPlanets = document.getElementById("inputPlanets");
const affichage2 = document.getElementById("affichage2");

btnSend2.addEventListener("click",getPlanets);

function getPlanets() {
    
    const number = inputPlanets.value;
    const url = `https://swapi.dev/api/planets/${number}/`;


    fetch (url)

    .then (function(response) {
        return response.json();        
    })

    .then (function(responseJson) {

        affichage2.innerHTML =
        `<p>Nom de la planète: ${responseJson.name}</p>
        <p>Climat: ${responseJson.climate}</p>
        <p>Diamètre: ${responseJson.diameter}</p>
        <p>Gravité: ${responseJson.gravity}</p>
        <p>Terrain: ${responseJson.terrain}</p>
        <p>Population: ${responseJson.population}</p>
        <p>Résidents: ${responseJson.residents}</p>`
    })
console.log('maintenant !');
}

///////////////////////////////////////////////////////////////////////

const btnSend3 = document.getElementById("btnSend3");
const inputFilms = document.getElementById("inputFilms");
const affichage3 = document.getElementById("affichage3");

btnSend3.addEventListener("click",getFilms);

function getFilms() {
    
    const number = inputFilms.value;
    const url = `https://swapi.dev/api/films/${number}/`;


    fetch (url)

    .then (function(response) {
        return response.json();        
    })

    .then (function(responseJson) {

    affichage3.innerHTML =
        `<p>Titre du film: ${responseJson.title}</p>
        <p>N° de l'épisode: ${responseJson.episode_id}</p>
        <p>Préambule: ${responseJson.opening_craw}</p>
        <p>Directeur: ${responseJson.director}</p>
        <p>Producteur: ${responseJson.producer}</p>
        <p>Date de production: ${responseJson.release_date}</p>
        <p>Personnages: ${responseJson.characters}</p>`
    })
console.log('maintenant !');
}

//////////////////////////////////////////////////////////////////////

const btnSend4 = document.getElementById("btnSend4");
const inputSpecies = document.getElementById("inputSpecies");
const affichage4 = document.getElementById("affichage4");

btnSend4.addEventListener("click",getSpecies);

function getSpecies() {
    
    const number = inputSpecies.value;
    const url = `https://swapi.dev/api/species/${number}/`;


    fetch (url)

    .then (function(response) {
        return response.json();        
    })

    .then (function(responseJson) {

    affichage4.innerHTML =
        `<p>Nom de l'espèce: ${responseJson.name}</p>
        <p>Classification: ${responseJson.classification}</p>
        <p>Désignation: ${responseJson.designation}</p>
        <p>Taille moyenne: ${responseJson.average_height}</p>
        <p>Couleur de peau: ${responseJson.skin_colors}</p>
        <p>Couleur de cheveux: ${responseJson.hair_colors}</p>
        <p>Couleur des yeux: ${responseJson.eye_colors}</p>
        <p>Langue: ${responseJson.language}</p>
        <p>Personnages: ${responseJson.people}</p>`
    })
console.log('maintenant !');
}

//////////////////////////////////////////////////////////////////////////////
/*
const btnSend5 = document.getElementById("btnSend5");
const inputVehicles = document.getElementById("inputVehicles");
const affichage5 = document.getElementById("affichage5");

btnSend5.addEventListener("click",getVehicles);

function getVehicles() {
    
    const number = inputSpecies.value;
    const url = `https://swapi.dev/api/vehicles/${number}/`;


    fetch (url)

    .then (function(response) {
        return response.json();        
    })

    .then (function(responseJson) {

    affichage5.innerHTML =
        `<p>Nom du véhicule: ${responseJson.name}</p>
        <p>Model: ${responseJson.model}</p>
        <p>Manufacture: ${responseJson.manufacturer}</p>
        <p>Prix: ${responseJson.cost_in_credits}</p>
        <p>Longueur: ${responseJson.length}</p>
        <p>Vitesse maximale: ${responseJson.max_atmosphering_speed}</p>
        <p>Nombre de passager: ${responseJson.passengers}</p>
        <p>Capacité: ${responseJson.cargo_capacity}</p>
        <p>Catégorie du véhicule: ${responseJson.vehicle_class}</p>`
    })
console.log('maintenant !');
}
*/
/////////////////////////////////////////////////////////////////////////////////

const btnSend6 = document.getElementById("btnSend6");
const inputStarships = document.getElementById("inputStarships");
const affichage6 = document.getElementById("affichage6");

btnSend6.addEventListener("click",getStarships);

function getStarships() {
    
    const number = inputStarships.value;
    const url = `https://swapi.dev/api/starships/${number}/`;


    fetch (url)

    .then (function(response) {
        return response.json();        
    })

    .then (function(responseJson) {

        affichage6.innerHTML =
        `<p>Nom du vaisseau: ${responseJson.name}</p>
        <p>Model: ${responseJson.model}</p>
        <p>Manufacture: ${responseJson.manufacturer}</p>
        <p>Prix: ${responseJson.cost_in_credits}</p>
        <p>Longueur: ${responseJson.length}</p>
        <p>Vitesse maximale: ${responseJson.max_atmosphering_speed}</p>
        <p>Nombre de passager: ${responseJson.passengers}</p>
        <p>Capacité: ${responseJson.cargo_capacity}</p>
        <p>Catégorie du vaisseau: ${responseJson.starship_class}</p>`
    })
console.log('maintenant !');
}


