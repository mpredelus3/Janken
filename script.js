var options = ['r', 'p', 's']

var numOfWins = 0;
var numOfLosses = 0;
var numOfTies = 0;
var isGameActive = true;

function playGame() {
    var userInput = window.prompt('Enter r, p, or s for rock, papers and scissors')
    console.log(userInput)

    var randomIndex = (Math.floor(Math.random() * options.length))  //How to generate a random number
    var computerInput = options[randomIndex]

    window.alert(`the computer chose ${computerInput}`)

    if (
        (userInput === 'r' && computerInput === 's') ||
        (userInput === 'p' && computerInput === 'r') ||
        (userInput === 's' && computerInput === 'p')
    ) {
        numOfWins++;
        window.alert('You won! Congrats :)')
    }
    else if (
        (userInput === 'r' && computerInput === 'p') ||
        (userInput === 'p' && computerInput === 's') ||
        (userInput === 's' && computerInput === 'r')
    ) {
        numOfLosses++;
        window.alert('Loser! go home!')
     } else {
        numOfTies++;
        window.alert('Tie! Lets try again')
     }

}

playGame();

// while(isGameActive === true) {