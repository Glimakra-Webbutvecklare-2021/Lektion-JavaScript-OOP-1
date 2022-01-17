// kasta en tärning, använd metoderna setInterval(), setTimeout()
// ... och ett Promise objekt

// elementet som visar täningen
const dice = document.getElementById("dice");

function rollDice(numberOfMilliSeconds) {

    return new Promise((resolve, reject) => {

        let diceNumber = 0;

        // använd setInterval()
        let intervalId = setInterval(() => {

            diceNumber = Math.floor(Math.random() * 6 + 1);

            dice.innerText = diceNumber;

        }, 10);

        // avbryt tärningskastet efter ett antal millisekunder
        setTimeout(() => {
            clearInterval(intervalId);

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