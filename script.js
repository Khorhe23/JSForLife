"use strict";

// alert("Hello");

// const result = confirm("Are you here?");
// console.log(result);

const numberOfFilms = +prompt("How many films did you see?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movie: {

    },
    actors: {

    },
    genres: [],
    privet: false
};

const a = prompt("The name of the last movie", ""),
      b = +prompt("Your grade for this movie", ""),
      c = prompt("The name of the last movie", ""),
      d = +prompt("Your grade for this movie", "");

personalMovieDB.movie[a] = b;
personalMovieDB.movie[c] = d;

console.log(personalMovieDB);