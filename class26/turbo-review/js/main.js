// *Variables*
// Declare a variable and assign it to a sentance that is a positive affirmation. Print the affirmation to the console multiple times using a method
let affirm = 'you are great!\n';
console.log(affirm.repeat(10));

//Declare a variable, assign it an array of letters, combine the letters into one word, and alert it 
let x = ['r', 'e', 'l', 'a','x'];
//alert(x.join(''));

// *Functions*
// Create a function that returns rock, paper, lizard, spock or scissors as randomly as possible

function rPS(){
    let x = Math.floor(5* Math.random());
    switch (x){
        case (0):
            return 'rock'
        case (1):
            return 'paper'
        case (2):
            return 'scissors'
        case (3):
            return 'spock'
        case (4):
            return 'lizard'
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, scissors, lizard, or spock) and determines if they won a game of rock paper scissors against a bot using the above 

function play(choice){
    let botChoice = rPS();
    console.log(`${choice} VS ${botChoice}`)
    let winners = {'scissors':['paper','lizard'],
                    'paper': ['rock','spock'],
                    'rock': ['lizard', 'scissors'],
                    'lizard': ['paper','spock'],
                    'spock': ['rock','scissors']}
    if(winners[choice].includes(botChoice)){
        console.log('WINNER')
    }
    else if (choice == botChoice){
        console.log('TIE!!!!!!!')
    }
    else{
        console.log('LOSER!!!')
    }
}

