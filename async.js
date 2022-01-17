// en funktion som körs efter en viss tid - setTimout()

console.log("A");
setTimeout(function() {
    console.log("En sekund senare...");
}, 1000);
console.log("B");

// en funktion som körs i ett regelbundet interval - setInterval()

// en räknare
let count = 0;

// bestäm vilket element som ska uppdateras
const counter = document.getElementById("counter");

// använd funktionen setInterval()
setInterval(function() {
   counter.innerText = count;
   count++;
}, 10000);

// en klocka som visar aktuell tid enligt hh:mm:ss

// bestäm element för att visa aktuell tid
const time = document.getElementById("time");

/* 
// ett datum skapas utifrån det inbyggda objektet Date
let date = new Date();
console.log(date);

// del av datum
// aktuell timme
console.log(date.getHours());

// aktuell minut
console.log(date.getMinutes());

// aktuell sekund
console.log(date.getSeconds());
 */

setInterval(() => {

    // aktuell datum
    let date = new Date();
    console.log(date);

    // del av datum
    // aktuell timme
    console.log(date.getHours());

    // aktuell minut
    console.log(date.getMinutes());

    // aktuell sekund
    console.log(date.getSeconds());

    time.innerText = date.toLocaleTimeString();

}, 1000);


// funktionerna setInterval() och setTimeout() genererar ett unikt id
// detta unika id används om man vill avbryta funktionen i sig 

// räkna ner från 3 till 0...
let countdownToZero = 3;

// element som ska visa nedräkningen
const countdown = document.getElementById("countdown");

let intervalId = setInterval(function() {

    if (countdownToZero <= 0) {

        // avbryt nedräkningen med metoden clearInterval() och ange vilket unikt id som gäller
        clearInterval(intervalId);
        
        // ändra title elementets värde...
        document.querySelector("title").innerText = "Nu är det lunch";
    }
    console.log(countdownToZero);
    countdown.innerText = countdownToZero; 

    countdownToZero--;

}, 1000);

