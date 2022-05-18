//Create a button that adds 1 to a botScore stored in localStorage 
document.querySelector('h2').innerText = localStorage.getItem('botScore')

document.querySelector('button').addEventListener('click',addToBotScore)

function addToBotScore(){
    let newVal = (localStorage.getItem('botScore')) ? +localStorage.getItem('botScore') + 1 : 1;
    localStorage.setItem('botScore', newVal)
    document.querySelector('h2').innerText = localStorage.getItem('botScore')
}
        