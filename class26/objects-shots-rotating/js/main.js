//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
// document.querySelector('button').addEventListener('click',getDrink)
// document.querySelector('input').addEventListener('submit',getDrink)
// document.querySelector('input').addEventListener('input', getDrink)
const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';



function getDrink() {
    //let nextDrink = document.querySelector('input').value;
    //let newURL = url + nextDrink.replaceAll(' ','%20');
    fetch(url)
.then(res => res.json())
.then(data => {
    document.querySelector('img').src = data.drinks[0].strDrinkThumb;
    document.querySelector('h2').innerText = data.drinks[0].strDrink;
    document.querySelector('h3').innerText = data.drinks[0].strInstructions;
})
.catch(er => {console.log(`error ${er}`)
});
}
getDrink();
let nIntervId;
if (!nIntervId){
    nIntervId = setInterval(getDrink,10000)
}