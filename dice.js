// kasta en tärning, använd metoderna setInterval(), setTimeout()
// ... och ett Promise objekt

// elementet som visar täningen
const dice = document.getElementById("dice");

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