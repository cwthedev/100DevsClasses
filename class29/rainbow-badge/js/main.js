//Example fetch using pokemonapi.co
//original only shows data for graxx vs water type?
document.querySelector('button').addEventListener('click', getFetch)

const strChart = {
normal: [],
fire: ['grass','ice','bug','steel'],
water: ['fire','ground','rock'],
electric: ['water','flying'],
grass: ['water','ground','rock'],
ice: ['grass','ground','flying','dragon'],
fighting: ['normal','ice','rock','dark','steel'],
poison: ['grass', 'fairy'],
ground: ['fire','electric','poison', 'rock', 'steel'],
flying: ['grass', 'fighting','bug'],
psychic: ['fighting','poison'],
bug: ['grass','psychic','dark'],
rock: ['fire','ice','flying','bug'],
ghost: ['psychic','ghost'],
dragon: ['dragon'],
dark: ['psychic','ghost'],
steel: ['ice','rock','fairy'],
fairy: ['fighting','dragon','dark']
};
const weakChart = {
  normal: ['rock','steel'],
  fire: ['fire','water','rock','dragon'],
  water: ['water','grass','dragon'],
  electric: ['electric','grass','dragon'],
  grass: ['fire','grass','poison','flying','bug','dragon','steel'],
  ice: ['fire','water','ice','steel'],
  fighting: ['poison','flying','psychic','bug','fairy'],
  poison: ['poison','ground','rock','ghost'],
  ground: ['grass','bug'],
  flying: ['electric','rock','steel'],
  psychic: ['psychic','steel'],
  bug: ['fire','fighting','poison','flying','ghost','steel','fairy'],
  rock: ['fighting','ground','steel'],
  ghost: ['dragon'],
  dragon: ['steel'],
  dark: ['dark','fairy'],
  steel: ['fire','water','electric','steel'],
  fairy: ['fire','poison','steel']
  };

  const nulChart = {
    normal: ['ghost'],
    electric: ['ground'],
    fighting: ['ghost'],
    poison: ['steel'],
    ground: ['flying'],
    psychic: ['dark'],
    ghost: ['normal'],
    dragon: ['fairy']
  }

function getFetch(){
  const poke1 = document.querySelector('#poke1').value
  const poke2 = document.querySelector('#poke2').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+poke1
  const url2 = 'https://pokeapi.co/api/v2/pokemon/'+poke2
  let pokeStore = []
  let pokeImg = []
  console.log(`${poke1} vs ${poke2}`)

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        pokeStore.push(data.types[0].type.name)
        pokeImg.push(data.sprites.front_shiny)
        
        fetch(url2)
        .then(res => res.json()) // parse response as JSON
        .then(data => {

          pokeStore.push(data.types[0].type.name)
          pokeImg.push(data.sprites.front_shiny)
          document.querySelector('#pokeImg1').src = pokeImg[0]
          document.querySelector('#pokeImg2').src = pokeImg[1]
          console.log(`${pokeStore[0]} vs ${pokeStore[1]}`)
          if(Object.keys(nulChart).includes(pokeStore[0]) && nulChart[pokeStore[0]].includes(pokeStore[1])){
            document.querySelector('h2').innerText = " 0 "
          }
          else if(strChart[pokeStore[0]].includes(pokeStore[1])){
            document.querySelector('h2').innerText = " 2x > "
          }
          else if(weakChart[pokeStore[0]].includes(pokeStore[1])){
            document.querySelector('h2').innerText = " 1/2x > "
          }
          else{
            document.querySelector('h2').innerText = " = "
          }
        })
        .catch(err => {
            console.log(`error ${err}`)
        });


      })
      .catch(err => {
          console.log(`error ${err}`)
      });



      
}