const express = require('express')
const app = express();
const cors = require('cors');
app.use(cors());
const PORT = 8000;

let rappers = {
    '21 savage': {
        'age': 21,
        'birthName' : 'Mr. Savage',
        'location' : 'London, UK'},
    'chance the rapper': {
        'age': 30,
        'birthName' : 'Chancelor',
        'location' : 'Illsville, USA'},
    'the fresh prince': {
        'age': 60,
        'birthName' : 'Will Smith',
        'location' : 'Philly, PA'},
    'unknown': {
        'age': -1,
        'birthName' : 'unknown',
        'location' : 'unknown'},
};

app.get('/api/:stageName', (request, response) => {
    let name_requested = request.params.stageName.toLowerCase();
    if (rappers[name_requested]) response.json(rappers[name_requested])
    else response.json(rappers['unknown']);})

app.get('/api', (request, response) => {
    response.json(rappers);
})

    
app.get('/', (request, response) => {
    response.sendFile(__dirname+'/index.html');
})

app.listen(PORT, () => {console.log(`server is up on port ${PORT}`)})