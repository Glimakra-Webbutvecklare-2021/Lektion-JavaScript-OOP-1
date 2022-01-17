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

    time.innerText = date.getSeconds();

}, 1000);

// funktionerna setInterval() och setTimeout() genererar ett unikt id
// detta unika id används om man vill avbryta funktionen 

