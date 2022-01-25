// använd fetch för att hämta data
// fetch är promise baserat: hanteras med .then() syntax

let url = "movies.json";
url = "https://cat-fact.herokuapp.com/fact";
url = "https://api.github.com/users/{username}";

fetch(url)
    .then(function(response) {

        // undersök hur responsen ser ut...
        console.log(response);

        // använd egenskapen ok för response: true | false
        if (!response.ok) {
            console.log("Följande fel uppstod: ", response.status);

            // aktivera Error genom att "kasta" ett fel, då aktiveras catch() nedan
            throw new Error(`Error reading resource. Status: ${response.status}`);
        }
        
        // använd metoden json() för att returnera innehållet som json objekt
        return response.json();
    })
    .then(function(data) {
        console.log("Innehållet i filen:", data);

        
        // sidan om fakta kring katter...
        // https://alexwohlbruck.github.io/cat-facts/
        // data finns i form av en array av 5 objekt
        // iteration av array
        // data.forEach(element => {
            
            // här är nu "element" det samma som ett objekt
            // testa att console logga...
            // console.log(element);

            // eftersom en egenskap är "text", välj ut endast den - punktnotation
            // console.log(element.text);

            // visa innehållet på webbsidan - ex blockquote
            // skapa html element
            // let blockquote = document.createElement("blockquote");

            // ge blockelementet innehållet från aktuellt objekt
            // blockquote.textContent = element.text;

            // lägg till på sidan
            // document.getElementById("result").appendChild(blockquote);

        // });


        // information från en användare på Github
        // visa avatar med egenskapen avatar_url
        // skapa en img element
        let img = new Image();

        // lägg till källan med info från Github response
        img.src = data.avatar_url;

        // lägg till sidans innehåll
        document.getElementById("result").appendChild(img);

    })
    .catch(function(error) {
        console.log("An error:", error);
    })
    .finally(function() {
        console.log("Den här delen körs alltid");
    });