// ett objekt
let keyboard = {color: "black", brand: "Logitech", keys: ["A", "B"]};

// console.log(keyboard);
// för att köra kod i editorn - använd extension Code Runner - kör med cmd: ctrl+alt+n

// För att visa en egenskap
// console.log(keyboard.color);

// För att visa en egenskap - testa om man kan visa språk - en egenskap som inte finns...
// console.log(keyboard.language);
// en egenskap kan kontrolleras med metoden hasOwnProperty

// iterera
/* 
for (const key in keyboard) {
    if (Object.hasOwnProperty.call(keyboard, key)) {
        const element = keyboard[key];
        console.log(key, keyboard[key]);
    }
}

console.log(Object.keys(keyboard));
console.log(Object.values(keyboard)); */


// skapa ett objekt som är en bok
// hur lagrar man flera liknande objekt...?
/* let book1 = {title: "Mördaren ljuger inte ensam", author: "Maria Lang"};
let book2 = {title: "Mörkret faller", author: "Maria Lang"};
let book = {titles: ["Mördaren ljuger inte ensam", "Farligt att förtära"], author: "Maria Lang"};
 */

let books = [];

/* 
let book = {title: "Mördaren ljuger inte ensam", author: "Maria Lang"};
book = {title: "Mörkret faller", author: "Maria Lang"};

books.push(book);
books.push(book);

console.log("books", books);
 */


// i objektorienterad programmering kan man skapa möjligheter att instansiera objekt 
// ett sätt att skapa objekt som baseras på en mall

// Alt 1 - traditionell lösning JavaScript
// En konstruktorfunktion
function Book(title, author, pages) {

    // använd nyckelordet this för att ge en bok dess egenskaper
    this.title = title;
    this.author = author;
    this.pages = pages;

    // en metod som beskriver en bok - obs: beskrivningen är densamma oavsett titel och författare - bör skapas på lite annat sätt..
/*     this.describe = function() {
        console.log(`"${this.title}", en bok av ${this.author}`)
    }
 */
}

// använd en prototyp
Book.prototype.describe = function() {
    console.log(`"${this.title}", en bok av ${this.author}`)
}

let book = new Book("En god man", "Karin Wahlberg", 407);
books.push(book);

book = new Book("Paradiset", "Abdulrazak Gurnah", 386);
books.push(book);

book = new Book("En dotters arv", "Nora Roberts", 287);
books.push(book);


// book.describe();

// console.log(books);

// iteration - en loop
books.forEach(book => {
    book.describe();
});