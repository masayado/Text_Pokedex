//DOM Objects
const pokeName = document.querySelector('.poke-name');
const pokeId = document.querySelector('.poke-id');
const pokeType = document.querySelector('.poke-type');

console.log(pokeName, pokeId, pokeType);

//Generando un numero random
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRandomInt(1, 151));

document.addEventListener('DOMContentLoaded', () =>{
    fetchData();
})

const fetchData = async () => {
    try{
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/1')
        const data = await res.json()
        console.log(data)
    } catch(error){
        console.log(error)
    }
}
