//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click',getDrink)
document.querySelector('input').addEventListener('submit',getDrink)
// document.querySelector('input').addEventListener('input', getDrink)
const url = 'https://thecocktaildb.com/api/json/v1/1/search.php?s=';



function getDrink() {
    let nextDrink = document.querySelector('input').value;

    let newURL = url + nextDrink.replaceAll(' ','%20');
    fetch(newURL)
.then(res => res.json())
.then(data => {
    myres = JSON.parse(JSON.stringify(data));
    document.querySelector('img').src = data.drinks[0].strDrinkThumb;
    document.querySelector('h2').innerText = data.drinks[0].strDrink;
    document.querySelector('#inst').innerText = data.drinks[0].strInstructions;
})
.catch(er => {console.log(`error ${er}`)
});
}