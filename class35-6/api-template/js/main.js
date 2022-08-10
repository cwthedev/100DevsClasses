
document.querySelector('button').addEventListener('click',getDog)
async function getDog(){
    const furl = "https://dog.ceo/api/breeds/image/random"
   try{ 
    const res = await fetch(furl);
    let img = await res.json()
    document.querySelector('img').setAttribute('src', img.message)
   } catch(err){console.log(`this is my ${err}`)};
return;
}