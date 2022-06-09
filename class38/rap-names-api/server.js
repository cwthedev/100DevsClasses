const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

const rappers = {
    '21 savage' :{
    'age': 29,
    'birthname': 'Sheyaa something',
    'location': 'London'},

    'chance the rapper' :{
        'age': 29,
        'birthname': 'Chancelor something',
        'location': 'USA'},

     'dylan':{
            'age': 100,
            'birthname': 'DylanDylanDylan DylanDylan',
            'location': 'USA'},
    'unknown':{
        'age': 0,
        'birthname': ' DylanDylan',
        'location': 'USA'}
}

app.use(cors());
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.listen(PORT, () =>{
    console.log(`Server has started on ${PORT}`)
})

app.get('/api/:rapperName', (request, response) =>{
    const rapperName = request.params.rapperName.toLowerCase();
    if (rappers[rapperName]) response.json(rappers[rapperName]);
    else response.json(rappers['unknown']);
})