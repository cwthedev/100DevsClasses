//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/


document.querySelector('button').addEventListener('click',getPic)
const url = `https://api.nasa.gov/planetary/apod?api_key=xnt3wf6EgJy3mKjQLMBYCpf4BQqohe2y5tzQPZYw&date=`


function getPic(){
    let date = document.querySelector('input').value;
    fetch( url+date).then(response => response.json()).then(data =>{
        console.log(data);
        document.querySelector('h2').innerText = data.title;
        document.querySelector('h3').innerText = data.explanation;
        document.querySelector('img').src = data.url
    })

}
