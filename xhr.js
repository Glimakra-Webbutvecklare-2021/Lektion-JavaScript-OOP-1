// använd JavaScript objektet XMLHttpRequest() för asynkrod kod
let xhr = new XMLHttpRequest();
// console.log("xhr", xhr);

let url = "xhr.txt";
// let url = "JavaScriptDateobject.pdf";
// let url = "ooooops.txt";

// välj metod open() och ange metoder som ex GET, POST, samt en url för källa
xhr.open("GET", url);

// välj att lyssna på händelsen load
xhr.addEventListener("load", function() {
    
    // console.log(xhr);

    // ge ett svar om filen finns 
    if (xhr.status === 200) {

        // textinnehållet från anrop
        let result = xhr.responseText;
        console.log("result:", result);

    } else if (xhr.status === 404) {
        console.log("File not found");
    }

});

// välj slutligen att skicka - request - med metoden send()
xhr.send();




// skapa ett Promise baserat XMLHttpRequest baserat på en klass
// hanterar metoden GET
class XHR {

    constructor(url) {
        this.url = url;
    }

    run() {

        return new Promise((resolve, reject) => {

            // använd JavaScript objektet XMLHttpRequest() för asynkrod kod
            let xhr = new XMLHttpRequest();
            
            xhr.open("GET", this.url);

            xhr.addEventListener("load", function() {

                if (xhr.status == 200) {
                    resolve(xhr.response);
                } else {
                    reject("Error code: " + xhr.status)
                }
            });

            xhr.send();                

        });
    }
}

// instanisera ett nytt objekt
let request = new XHR("xhr.txt");

// använd metoden run() som returnerar promise 
request.run().then((data) => {
    console.log("data:", data);
}).catch((error) => {
    console.log("An error:", error);
});
