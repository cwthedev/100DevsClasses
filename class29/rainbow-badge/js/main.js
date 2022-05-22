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
rock: ['firef','ice','flying','bug'],
ghost: ['psychic','ghost'],
dragon: ['dragon'],
dark: ['psychic','ghost'],
steel: ['ice','rock','fairy'],
fairy: ['fighting','dragon','dark']
};

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
          console.log(pokeStore[1])
          if(strChart[pokeStore[0]].includes(pokeStore[1])){
            document.querySelector('h2').innerText = " 2x > "
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