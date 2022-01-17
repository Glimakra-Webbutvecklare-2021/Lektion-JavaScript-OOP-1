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

    addToPage() {

        // skapa dynamiskt html element som kan placeras på webbsidan
        // skapa ett omslutande figure element till en ny bok
        let figure = document.createElement("figure");

        // skapa ett img element - med JavaScript inbyggda objekt Image()
        let img = new Image();

        // lägg till src attributet
        img.src = url.value;

        // lägg till ett element för bildtext - figcaption
        let figcaption = document.createElement("figcaption");
        figcaption.textContent = `"${title.value}", av ${author.value}`;

        // se till att dynamiska element har rätt struktur
        figure.appendChild(img);
        figure.appendChild(figcaption);

        // lägg till figure elementet med dess innehåll till webbsidans element med id myBooks
        myBooks.appendChild(figure);

    }
}

// instansiera nya objekt från klassen - alltså: skapa nya böcker
// let book = new Book("Handbok i pomologi", "Olof Eneroth", 702);
// console.log(book);
// book.describe();


// DOM - visualisera böcker på webbsidan
// variabler för formuläret
const add = document.getElementById("add");

// variabel för listan över böcker
const myBooks = document.getElementById("myBooks");

// händelselyssnare för knappen
add.addEventListener("click", function (event) {

    event.preventDefault();

    // aktuella variabler
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let pages = document.getElementById("pages");
    let url = document.getElementById("url");

    console.log(title.value, author.value, pages.value, url.value);

    let book = new Book(title.value, author.value, pages.value, url.value);

    book.addToPage();

    // nollställ formulärfält
    title.value = "";
    pages.value = "";
    url.value = "";
});