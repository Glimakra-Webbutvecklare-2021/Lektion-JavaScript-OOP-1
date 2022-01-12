// en klass för att skapa en bil
class Car {
    constructor(type, color) {
        this.type = type;
        this.color = color;
    }

    // en funktion som beskriver aktuell bil
    describe() {
        console.log(`En ${this.color} bil, med bilmärket ${this.type}`);
    }

    // en funktion som ändrar en egenskap
    setColor(color) {

        // ett värde som bör valideras
        let colors = ["grön", "blå", "röd"];

        if (colors.includes(color)) {
            this.color = color;
        }
    }

    //  en funktion som hämtar en egenskap
    getColor() {
        
    }
}

// skapa en bil
let car1 = new Car("Volvo", "röd");
car1.describe();

car1.setColor("blå");
car1.describe();

