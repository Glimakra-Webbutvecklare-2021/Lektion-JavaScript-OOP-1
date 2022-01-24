// ett objekt i JavaScript
let movies = {
    title: "Sagan om ringen"
}

// console log av objektet
console.log(movies);

// skapa ett json format av objektet
let moviesJson = JSON.stringify(movies);

console.log(moviesJson);

// skapa ett JavaScript objekt av json (samma)
let movies2 = JSON.parse(moviesJson);

console.log(movies2);