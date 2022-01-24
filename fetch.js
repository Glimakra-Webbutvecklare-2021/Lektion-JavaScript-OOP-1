// använd fetch för att hämta data
// fetch är promise baserat: hanteras med .then() syntax

let url = "movies.json";
url = "https://cat-fact.herokuapp.com/facts";

fetch(url)
    .then(function(response) {

        // undersök hur responsen ser ut...
        console.log(response);

        // använd egenskapen ok för response: true | false
        if (!response.ok) {
            console.log("Följande fel uppstod: ", response.status);
        }
        
        // använd metoden json() för att returnera innehållet som json objekt
        return response.json();
    })
    .then(function(data) {
        console.log("Innehållet i filen:", data);
    })
    .catch(function(error) {
        console.log("An error:", error)
    })
    .finally(function() {
        console.log("Den här delen körs alltid");
    });