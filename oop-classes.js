// Ett alternativt sätt att instansiera objekt (istället för konstruktorfunktion) är att använda klasser
// en klass skapas med nyckelordet class

class Book {
    constructor(title, author, pages, url) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.url = url;
    }

    describe() {
        console.log(`"${this.title}", en bok på ${this.pages} sidor av författaren ${this.author}`);
    }
}

// instansiera nya objekt från klassen - alltså: skapa nya böcker
// let book = new Book("Handbok i pomologi", "Olof Eneroth", 702);
// console.log(book);
// book.describe();


// DOM - visualisera böcker på webbsidan
// variabler för formuläret
const add = document.getElementById("add");

// händelselyssnare för knappen
add.addEventListener("click", function(event) {

    event.preventDefault();

    // aktuella variabler
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let pages = document.getElementById("pages");
    let url = document.getElementById("url");

    console.log(title.value, author.value, pages.value, url.value);
});