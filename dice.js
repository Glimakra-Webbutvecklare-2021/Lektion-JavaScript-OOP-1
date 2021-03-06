// kasta en tärning, använd metoderna setInterval(), setTimeout()
// ... och ett Promise objekt

// elementet som visar täningen
const dice = document.getElementById("dice");

// elementet som visar en bil av tärningen
const diceImage = document.getElementById("dice-image");

// Promise baserad funktion för att kasta tärning
function rollDice(numberOfMilliSeconds) {

    // ett promise objekt
    return new Promise((resolve, reject) => {

        // ange default - i det här läget ett resultat som inte är möjligt (en nolla); 
        let diceNumber = 0;

        // använd setInterval()
        let intervalId = setInterval(() => {

            // slumpa fram ett tal
            diceNumber = Math.floor(Math.random() * 6 + 1);

            // visa värdet i elementet 
            dice.innerText = diceNumber;

            // visa en bild av värdet (bakgrundsbild med egenskapen background-position-x);
            diceImage.style.backgroundPositionX = -diceNumber * 100 + 100 + "px";

            // rotera bilden med CSS, eller kanske skeva bilden? se bland annt egenskapen transform
            diceImage.style.transform = "rotate("+ diceNumber * 30 +"deg)";

        }, 10);

        // avbryt tärningskastet efter ett antal millisekunder
        setTimeout(() => {

            // använd metoden clearInterval() och ange id
            clearInterval(intervalId);

            // infria löftet om tärningskastet - resolve
            resolve(diceNumber);

        }, numberOfMilliSeconds);

    });
}

// kasta tärningen i ett slumpat antal millisekunder
let ms = Math.floor(Math.random() * 1000);
console.log(`Tärningen rullar i ${ms} millisekunder`);

rollDice(ms).then((message) => {
    console.log("Resultatet blev: " + message);
});

// Ett promise objekt om ett löfte kan infrias direkt:
Promise.resolve("Lektionen är till ända....").then((message) => {
    console.log(message);
});

// en händelselyssnare för klick på tärningen
diceImage.addEventListener("click", function() {

    // kasta tärningen i ett slumpat antal millisekunder
    let ms = Math.floor(Math.random() * 1000);
    console.log(`Tärningen rullar i ${ms} millisekunder`);

    rollDice(ms).then((message) => {
        console.log("Resultatet blev: " + message);
    });

});