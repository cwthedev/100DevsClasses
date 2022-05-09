//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

document.querySelector('h2').innerText = localStorage.getItem('myBooks');
function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://openlibrary.org/isbn/${choice}.json`
  let li = new Element('li');
  li.

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.covers[0])
        document.querySelector('img').src = `https://covers.openlibrary.org/b/id/${data.covers[0]}.jpg`
        if (!localStorage.getItem('myBooks')) localStorage.setItem('myBooks',data.title)
        else localStorage.setItem('myBooks',`${localStorage.getItem('myBooks')} ; ${data.title}`)
        document.querySelector('h2').innerText = localStorage.getItem('myBooks');
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

