// en klass för att skapa en bil
class Car {
    constructor(type, color) {
        this.type = type;
        this.color = color;
        this.batteryCapacity = 100;
        this.logFile = [];
    }

    // en funktion som beskriver aktuell bil
    describe() {
        console.log(`En ${this.color} bil, med bilmärket ${this.type}. Bilens batterivärde är: ${this.batteryCapacity}`);
    }

    // skriv ut log filen med console.log();
    printLog() {

        // loopa alla log poster
        this.logFile.forEach(history => {
            console.log(history);
        });
    }


    // en funktion som ändrar en egenskap
    setColor(color) {

        // ett värde som bör valideras
        let colors = ["grön", "blå", "röd"];

        if (colors.includes(color)) {
            this.color = color;
        }

        let history = "Bilen ändrade färg till " + this.color;
        this.logFile.push(history);
    }

    //  en funktion som hämtar en egenskap
    getColor() {

        return this.color;
    }

    // funktioner för att köra omkring...
    start() {

        // att starta innebär att batteriet förbrukas ngt...
        this.batteryCapacity -= 1;

        let history = "Bilen startade";
        this.logFile.push(history);
    }

    accelerate() {

        // slumpa en siffra som anger hur mycket batteri går åt...
        let number = Math.random() * 10;

        // avrunda talet till ett heltal
        // number = Math.floor(number);

        // minska batteriet med motsvarande siffra
        this.batteryCapacity -= number;

        let history = "Bilen accelerade, vilket påverkade batteriet negativt: " + number;
        this.logFile.push(history);
    }

    turnLeft() {

        let history = "Bilen svängde vänster";
        this.logFile.push(history);
    }

    turnRight() {

        let history = "Bilen svängde höger";
        this.logFile.push(history);
    }

}

// skapa en bil
let car1 = new Car("Volvo", "röd");
car1.describe();

car1.setColor("blå");
car1.describe();

// vilken färg har bilen nu...?
let color = car1.getColor();

// visa bilens färg
console.log("Bilens färg är nu " + color);

// händelser för en bil
car1.start();
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.accelerate();
// car1.describe();
car1.turnLeft();
car1.turnRight();
car1.accelerate();
car1.setColor("grön");
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.setColor("röd");
car1.turnRight();


car1.printLog();
car1.describe();