const word = document.getElementById("word");
const form = document.querySelector("form");

form.onsubmit = function(event) {
    event.preventDefault();

    // innehållet i textfältet
    console.log(word.value);

    // spara i Local Storage
    localStorage.setItem("ord", word.value);

}


// hämta ett värde som finns sparat
let someSavedWord = localStorage.getItem("ord");
console.log("someSavedWord:", someSavedWord);

// skapa ett element som visar ordet
let span = document.createElement("span");
span.innerText = `Sparat ord: ${someSavedWord}`;

// visa elementet på sidan
document.body.appendChild(span);
