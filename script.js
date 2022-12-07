"use strict";

// alert("Hello");

// const result = confirm("Are you here?");
// console.log(result);

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many films did you see?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films did you see?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {
    },
    actors: {
    },
    genres: [],
    privet: false
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
detectPersonalLevel();

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.geners[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privet);

console.log(personalMovieDB);


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }


// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// for (i = 20; i > 10; i-- ) {
//     if (i === 13) {
//         break;
//     }
//     console.log(i);
// }
// for (i = 5; i <= 10; i++){
//     console.log(i);
// }

// for (i = 2; i <= 10;i++) {
//     if (i%2) {
//         continue;
//     }
//     console.log(i);
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let i = 2;

// while (i < 16) {
//     i++;
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// const arrayOfNumbers = [];

// for (let i = 5; i < 11; i++) {
//     arrayOfNumbers[i - 5] = i;
// }
// console.log(arrayOfNumbers);
// return arrayOfNumbers;

    // const arr = [3, 5, 8, 16, 20, 23, 50];
    // const result = [];
    
    // for ( let i = 0; i < arr.length; i++) {
    //     result[i] = arr[i];
    // }
    // console.log(result);
    // return result;

    // const data = [5, 10, 'Shopping', 20, 'Homework'];

    // for (let i = 0; i < data.length; i++) {
    //     if (typeof(data[i]) === 'number') {
    //         data[i] = data[i] * 2;
    //     } else if (typeof(data[i]) === 'string') {
    //         data[i] = `${data[i]} - done`;
    //     }
    // }
    // console.log(data);
    // return data;

    // const data = [5, 10, 'Shopping', 20, 'Homework'];
    // const result = [];

    // for (let i = 1; i <= data.length; i++) {
    //     result[i - 1] = data[data.length - i]
    // }

    // console.log(result);
    // return result;

//     const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)



// function sayHello(name) {
    
//     return `Привет, ${name}!`;

// }

// sayHello('wef');

// function returnNeighboringNumbers(num) {

//     return [num - 1, num, num + 1];
// }

// returnNeighboringNumbers(5);

// function getMathResult(string, num) {
//     if (typeof(num) !== 'number' || num <= 0) {
//         return string;
//     }

//     let ret = '';

//     for (let i = 1; i <= num; i++){
//         if (i === num) {
//             ret += `${string * i}`;
//         } else {
//             ret += `${string * i}---`;
//         }
//     }
//     return ret;
// }

// getMathResult(10, 5);