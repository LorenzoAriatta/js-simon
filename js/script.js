console.log('JS OK!');

//visualizzare 5 numeri casuali in pagina
//successivamente, far partire un timer di 30 secondi
//dopo i 30sec user inserisce by prompt, uno per volta, i num visti
//il software dice quanti e quali dei numeri inseriti sono giusti

// ---------- FUNZIONI ---------- //

function randomNumberGen(min, max) {

    const range = (max - min) + 1;
    let number = Math.floor(Math.random() * range) + min;

    return number;

}

function validNumber(min, max) {

    for (let i = 0; i < 5; i++) {
        let valid = randomNumberGen(min, max);
        if (valid === numbersSimonArray[i]) {
            valid = randomNumberGen(min, max);
        } else {
            numbersSimonArray.push(valid);
        }
    }


}

// ---------- / FUNZIONI ---------- //


// ---------- DOM ELEMENTS ---------- //



// ---------- / DOM ELEMENTS ---------- //


// ---------- GENERAL VAR/FUNCTIONS ---------- //

let numbersSimonArray = [];

randomNumberGen(1, 100);
validNumber(1, 100);
console.log(numbersSimonArray);

// ---------- / GENERAL VAR/FUNCTIONS ---------- //