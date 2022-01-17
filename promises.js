// I JavaScript finns ett objekt som kallas för Promise - hanterar löften
// kan lyckas, kan misslyckas...

// använd Math.random() för att simulera att ngt ska ske

function iPromiseYou() {

    // skapa ett Promise objekt
    return new Promise(function(resolve, reject) {

        // slumpen får avgöra
        // men, det hade kunnat handla om: läsa en fil, hämta en fil, kontrollera ngt som tar tid...
        let randomNumber = Math.random();

        // om talet är över 0.5 - lyckat resultat 

        if (randomNumber > 0.5) {
            // hantera ett lyckat resultat med "resolve"
            resolve("Det gick fint! :)");

        } else {
            // hantera ett ej lyckat resultat med "reject"
            reject ("Det gick inte så bra... :(");

        }
    });
}

// använd en Promise baserad funktion: then() catch()
/* 
iPromiseYou().then((message) => {
    console.log("Ett lyckat resultat: " + message);
});
*/

// hantera ett felmeddelade med catch() - då undviker man fel som kan hindra en sida från fortsatt funktionalitet
iPromiseYou().then((message) => {
    console.log("Ett lyckat resultat: " + message);
}).catch((message) => {
    console.log("Ett inte så lyckat resultat: " + message);
    document.body.innerText = "Tyvärr gick det inte, försök om en stund!";
});

