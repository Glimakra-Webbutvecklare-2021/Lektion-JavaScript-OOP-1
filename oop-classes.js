// Ett alternativt sätt att instansiera objekt (istället för konstruktorfunktion) är att använda klasser
// en klass skapas med nyckelordet class

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    describe() {
        console.log(`"${this.title}", en bok på ${this.pages} sidor av författaren ${this.author}`);
    }
}

// instansiera nya objekt från klassen - alltså: skapa nya böcker
let book = new Book("Handbok i pomologi", "Olof Eneroth", 702);
console.log(book);
book.describe();