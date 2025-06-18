
const offset = 0
const limit = 15
const url = ` https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit} `

function convertPokemonToLi(pokemon) {
    return  `
    <li class="pokemon">
<span class="number">#001</span>
<span class="name">${pokemon.name}</span> 

<div class="detail">

<ol class="types">
    <li class="type">GRASS</li>
    <li class="type">POISON</li>
</ol>

<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
</div>

</li> 
`

}


const pokemonList = document.getElementById('pokemonList')

pokeapi.getPokemons().then((pokemons = []) => {

   const newHtml = pokemons.map(convertPokemonToLi).join('')
   pokemonList.innerHTML = newHtml
})



//const pokemonList = document.getElementById('pokemonList')

//fetch(url)
//.then((response) => response.json())
//.then((jsonBody) => jsonBody.results )
//.then((pokemons) => {
   
  //  for ( let i = 0; i < pokemonList.length; i ++ ) {
    //    const pokemon = pokemons[i];
     // pokemonList.innerHTML += convertPokemonToLi (pokemon)
//    }
//})
//.catch((error) => console.error(error))

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

const detectToggleOnce = (e) => {
    e.target.classList.add('toggled-once');
};

checkboxes.forEach('checkboxes') => {
    checkboxes.addEventListener('click', detectToggleOnce, {once: true});
};
