// använd fetch för att hämta data
// fetch är promise baserat: hanteras med .then() syntax

let url = "movies.txt";

fetch(url)
    .then(function(response) {

        if (!response.ok) {
            console.log("Ett fel uppstod för att nå källan");
        }
        console.log(response);
    })
    .catch(function(error) {
        console.log("An error:", error)
    })
    .finally(function() {
        console.log("Den här delen körs alltid");
    });