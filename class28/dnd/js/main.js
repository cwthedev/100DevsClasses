//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice);
  const url = `https://www.dnd5eapi.co/api/spells/${choice.toLowerCase().replaceAll(' ','-')}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
          console.log(data);
          document.querySelector('h2').innerText = data['name']
          console.log(data['desc'][0]);
          document.querySelector('h5').innerText = data['desc'][0];
          let classes = '';
          data['classes'].forEach(x => classes += `${x['name']}, `);
          document.querySelector('h3').innerText = classes.substring(0, classes.length-2);
          classes = '';
          data['subclasses'].forEach(x => classes += `<li>${x['name']}</li>`);
          document.querySelector('h4').innerHTML = classes.substring(0, classes.length-2);
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

/* results is an array that has kvps index, name, and url
individual spells have:
_id
index
name
desc[?]
higher_level[?]
range
components
...
classes[?], kvps index, name, url
subclasses[?], kvps index, name, url
*/
