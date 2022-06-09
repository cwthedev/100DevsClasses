document.querySelector('button').addEventListener('click',getRapper);

async function getRapper(){
    const rapName = document.querySelector('input').value;
    try{
        const response = await fetch(`http://localhost:8000/api/${rapName}`);
        const data = await response.json();
        console.log(data)
        document.querySelector('#birthname').innerText = data.birthname;
    }catch(error){console.log(error)}
}



async function apiRequest(){
    const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`https://simple-rapper-api.herokuapp.com/api/${rapperName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.birthName
    }catch(error){
        console.log(error)
    }
}