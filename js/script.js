console.log('JS OK!');

//visualizzare 5 numeri casuali in pagina
//successivamente, far partire un timer di 30 secondi
//dopo i 30sec user inserisce by prompt, uno per volta, i num visti
//il software dice quanti e quali dei numeri inseriti sono giusti

// ---------- FUNZIONI ---------- //

//RNG range 1 / 100
function randomNumberGen(min, max) {

    const range = (max - min) + 1;
    let number = Math.floor(Math.random() * range) + min;

    return number;

}

// check dei numeri generati, se non presenti nell'array li pusho
function validNumber(min, max) {

    for (let i = 0; i < 5; i++) {

        while (numbersSimonArray.length < 5) {
            let valid = randomNumberGen(min, max);
            if (valid === numbersSimonArray[i]) {
                valid = randomNumberGen(min, max);
            } else {
                numbersSimonArray.push(valid);
                startGame.innerText = `Memorize Numbers: ${numbersSimonArray}`;
            }
        }

    }

}

//function linkata al timer
function askNumbersToUser(max) {

    for (let i = 0; i < max; i++) {

        let insertNumber = parseInt(prompt('Inserisci il numero in posizione ' + (i + 1)));

        while (isNaN(insertNumber)) {

            insertNumber = parseInt(prompt('Inserisci il numero in posizione ' + (i + 1)));
        }

        if (insertNumber !== numbersSimonArray[i]) {
            wrongNumbers.push(insertNumber);
        } else {
            score++;
            rightNumbers.push(insertNumber);
        }

    }

    return rightNumbers, wrongNumbers;

}


//azzeramento array
function timer() {

    askNumbersToUser(5);

    userRight.innerText = `Numbers Guessed: ${rightNumbers}`;
    userWrong.innerText = `Numbers Wrong: ${wrongNumbers}`;
    userScore.innerText = `Total Score: ${score}`;
}

//restart game
function restart() {

    numbersSimonArray = [];

    rightNumbers = [];

    wrongNumbers = [];

    userRight.innerText = '';
    userWrong.innerText = '';
    userScore.innerText = '';

    validNumber(1, 100);

    setTimeout(() => startGame.innerText = '', 4800);

    setTimeout(timer, 5000);

}

// ---------- / FUNZIONI ---------- //


// ---------- DOM ELEMENTS ---------- //

//assegno ad una const il div contenente i numeri generati
const simon = document.getElementById('simon');


//richiamo il div degli array dati dagli insert
const startGame = document.getElementById('asknumbers');

//richiamo i tag <h>
const userRight = document.getElementById('right');
const userWrong = document.getElementById('wrong');
let userScore = document.getElementById('score');

//richiamo button
const restartButton = document.getElementById('restart');

// ---------- / DOM ELEMENTS ---------- //


// ---------- GENERAL VAR/FUNCTIONS ---------- //

//array numeri generati
let numbersSimonArray = [];

//array numeri giusti
let rightNumbers = [];

//array numeri sbagliati
let wrongNumbers = [];

//score
let score = 0;


//recall functions
validNumber(1, 100);

setTimeout(() => startGame.innerText = '', 4800);

setTimeout(timer, 5000);

restartButton.addEventListener('click', function () {
    restart();
});


console.log(numbersSimonArray);

// ---------- / GENERAL VAR/FUNCTIONS ---------- //