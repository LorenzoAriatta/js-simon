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
        let valid = randomNumberGen(min, max);
        if (valid === numbersSimonArray[i]) {
            valid = randomNumberGen(min, max);
        } else {
            numbersSimonArray.push(valid);
            simon.innerText = `Memorize Numbers: ${numbersSimonArray}`;
        }
    }

    userInput.classList.remove('d-none');
    userInput.innerText = `Numbers Guessed: ${rightNumbers}`;
    userInput.innerText = `Numbers Wrong: ${wrongNumbers}`;

}

//function linkata al timer
function askNumbersToUser(max) {

    for (let i = 0; i < max; i++) {
        let insertNumber = parseInt(prompt('Inserisci il numero in posizione ' + (i + 1)));
        if (insertNumber !== numbersSimonArray[i]) {
            wrongNumbers.push(insertNumber);
        } else {
            rightNumbers.push(insertNumber);
        }
    }
    return rightNumbers, wrongNumbers;

}

//azzeramento array
function timer() {

    askNumbersToUser(5);
}

// ---------- / FUNZIONI ---------- //


// ---------- DOM ELEMENTS ---------- //

//assegno ad una const il div contenente i numeri generati
const simon = document.getElementById('simon');

//richiamo il div degli array dati dagli insert
const userInput = document.getElementById('userInput');

// ---------- / DOM ELEMENTS ---------- //


// ---------- GENERAL VAR/FUNCTIONS ---------- //

//array numeri generati
let numbersSimonArray = [];

//array numeri giusti
let rightNumbers = [];

//array numeri sbagliati
let wrongNumbers = [];

console.log(rightNumbers);
console.log(wrongNumbers);

//recall functions
validNumber(1, 100);

setTimeout(() => simon.innerText = '', 4500);

setTimeout(timer, 5000);

console.log(numbersSimonArray);

// ---------- / GENERAL VAR/FUNCTIONS ---------- //