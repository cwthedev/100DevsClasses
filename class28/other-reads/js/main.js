//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
createULFromStorage();

//document.querySelector('h2').innerText = localStorage.getItem('myBooks');

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://openlibrary.org/isbn/${choice}.json`
  //let li = new Element('li')

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        //console.log(data)
        console.log(data.covers[0])
        document.querySelector('img').src = `https://covers.openlibrary.org/b/id/${data.covers[0]}.jpg`
        if (!localStorage.getItem('myBooks')) localStorage.setItem('myBooks',JSON.stringify([data.title]))
        else{
          console.log('found something')
          let arr = JSON.parse(localStorage.myBooks)
          arr.unshift(data.title)
          console.log(arr)
          localStorage.myBooks = JSON.stringify(arr);
        }
        document.querySelector('h2').innerText = JSON.parse(localStorage.getItem('myBooks'))[0];
        createULFromStorage();
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function createULFromStorage(){
  const arr = JSON.parse(localStorage.myBooks)
  let myUL = document.querySelector('ul')
  myUL.innerHTML = '';
  arr.forEach(element => {
    let li = document.createElement('li');
    li.innerText = element;
    myUL.appendChild(li);
  });
}