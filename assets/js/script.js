document.addEventListener('DOMContentLoaded', () =>{
    const random = (getRandomInt(1, 151));
    fetchData(random);
})

//Generando un numero random cada vez que refrescamos la pagina
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const fetchData = async (id) => {
    try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()

        console.log(data);

        const pokemon = {
            img: `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`,
            img_2: data.sprites.other.dream_world.front_default,
            name: data.name,
            id: data.id,
            type: data.types[0].type.name,
            ability:data.abilities[0].ability.name,
            height: data.height,
            weight: data.weight,
            attack: data.stats[1].base_stat,
            exp: data.base_experience,
            defense: data.stats[3].base_stat,
        };
        renderizeCard(pokemon)
    } catch(error){
        console.log(error)
    }
}

const renderizeCard = (pokemon) => {
    console.log(pokemon)
    //const cardHeader = document.querySelector('.card__header');
    //const pokeTypes = document.querySelector('.card_body_types-1');
    //const dataTitles = document.querySelector('.card_data_title');
    const container = document.querySelector('.container');
    const template = document.querySelector('#template-card').content;
    const clone = template.cloneNode(true);
    const fragment = document.createDocumentFragment();

    clone.querySelector('.card__header__details-name').innerHTML = `${pokemon.name}`;
    clone.querySelector('.poke-id').innerHTML = '#' + `${pokemon.id}`;
    clone.querySelector('.poke-type').innerHTML = `${pokemon.type}`;
    clone.querySelector('.card__body__img').setAttribute('src', pokemon.img);
    clone.querySelectorAll('.card__data__info-d')[0].textContent = pokemon.ability;
    clone.querySelectorAll('.card__data__info-d')[1].textContent = pokemon.height;
    clone.querySelectorAll('.card__data__info-d')[2].textContent = pokemon.weight;
    clone.querySelectorAll('.card-footer__stats p')[0].textContent = pokemon.attack;
    clone.querySelectorAll('.card-footer__stats p')[2].textContent = pokemon.exp;
    clone.querySelectorAll('.card-footer__stats p')[4].textContent = pokemon.defense;

 
    fragment.appendChild(clone);
    container.appendChild(fragment);
}

(function (window, document, undefined) {

    window.onload = init;

    function init() {

        const elem = document.getElementById('cardHeader');
        //const elem = document.getElementsByClassName('prueba');
        let pokeType = type
        
        
        switch (pokeType) {
            case "normal":
                elem.style.backgroundColor = '#c7ccce'
                break;
            case "poison":
                elem.style.backgroundColor = '#b090c1'
                break;
            case "psychic":
                elem.style.backgroundColor = '#db75ae'
                break;
            case "grass":
                elem.style.backgroundColor = '#8bbe8a'
                break;
            case "ground":
                elem.style.backgroundColor = '#c4943f'
                break;
            case "ice":
                elem.style.backgroundColor = '#62cdc1'
                break;
            case "fire":
                elem.style.backgroundColor = '#ffa756'
                break;
            case "rock":
                elem.style.backgroundColor = '#bca584'
                break;
            case "dragon":
                elem.style.backgroundColor = '#9a9dcb'
                break;
            case "water":
                elem.style.backgroundColor = '#58abf6'
                break;
            case "bug":
                elem.style.backgroundColor = '#8cb331'
                break;
            case "dark":
                elem.style.backgroundColor = '#5a595d'
                break;
            case "fighting":
                elem.style.backgroundColor = '#eb4971'
                break;
            case "fire":
                elem.style.backgroundColor = '#ffa756'
                break;
            case "ghost":
                elem.style.backgroundColor = '#636298'
                break;
            case "steel":
                elem.style.backgroundColor = '#447f9c'
                break;
            case "flying":
                elem.style.backgroundColor = '#b5bbd3'
                break;
            case "electric":
                elem.style.backgroundColor = '#f2cb55'
                break;
            case "fairy":
                elem.style.backgroundColor = '#eab8cf'
                break;
            default:
                elem.style.backgroundColor = '#ebedf5'
                break;
        }
    }

})(window, document, undefined);