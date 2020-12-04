//DOM Objects
const pokeName = document.querySelector('.card__header__details-name');
const pokeId = document.querySelector('.poke-id');
const pokeType = document.querySelector('.poke-type');

console.log(pokeName, pokeId, pokeType);

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


    fragment.appendChild(clone)
    container.appendChild(fragment)
}