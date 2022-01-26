// hämta information från Github API
let url = "https://api.github.com/";

// endpoint för users
url = "https://api.github.com/users/andsju";

// Fetch() i JavaScript är promisebaserat - returnerar resultat efter tid
// hanteras därför med .then() .catch() .finally()
fetch(url).then(function (response) {
    // console.log(response);

    console.log("Response1: ", response);
    // console.log("Response2: " +  response);
    // console.log(`Response3: ${response}`);

    // innehållet från källan hanteras av JavaScript som en dataström (Stream) 
    // kan hanteras av fetch inbyggda metoder för att avläsa dataströmmen
    // här finns både metoder och egenskaper
    // för att se innehållet så testa först metoden json()
    // console.log(response.json());
    // för att hantera innehållet returnera detsamma, och använd .then()

    // metoden .json() använder JSON.parse och presenterar resultatet som ett objekt efter .then() 

    // jfr return response.text(); och return response.json();

    return response.json();

}).then(function (data) {
    console.log("data", data);

    // om man använder metoden .text() ovan, kan man konvertera till json med JSON.parse...
    // om det inte är json så kommer metoden parse ge ett fel "Unexpected token ... in JSON at position 1"
    // let obj = JSON.parse(data);

    // console.log(obj);

    // presentera data på webbsidan
    result.innerHTML = render(data.company);

}).catch(function (error) {

    // ett fel som man har skapat med throw new Error() i steg ovanför kan hanteras här 
    // hanteras? ex loggas i en fil, visa ngt vänligt felmeddelande på webbsida 

}).finally(function () {

    // metoden .finally() kan användas för att visa ett innehåll efter det att metoderna ovan är avklarade

});

// en funktion som renderar med innerHTML
function render(something) {
    return `
        <p>
            <minegentagkanvälinteblietthtmlelement>
            <h4 onclick='console.log("ooops");alert("innerHTML risky...");'>${something}</h4>
        </p>
    `;
}


// fetch() med function() {}
fetch(url)
    .then(function(response) {

        // returnera
        return response.json(); 
    })
    .then(function(obj) {

        // gör ngt med objektet
        // analysera hur objektet ser ut
        // visa på sidan kanske...

    });

// fetch med arrow function () => {}
fetch(url)
    .then((response) => response.json())
    // .then((obj) => renderContent(obj));
    .then((obj) => result.innerHTML = renderContentFromInnerHTML(obj));

function renderContent(obj) {

    // skapa element med document.createElement()
    let p = document.createElement("p");
    
    // lägg till textinnehåll 
    p.textContent = obj.name;

    // visa på sidan
    result.appendChild(p);
}

function renderContentFromInnerHTML(obj) {

    return `<p>${obj.name}</p>`;
}