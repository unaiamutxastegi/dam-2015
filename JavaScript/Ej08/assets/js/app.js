window.onload = function() {
    var enlaces = document.getElementsByTagName("a");
    console.log("Numero de Enlaces =" + enlaces.length);

    enlaces = document.querySelectorAll("a");
    console.log("Numero de Enlaces =" + enlaces.length);

    console.log(enlaces[enlaces.length - 2].href);

    var count = 0;
    for (var i = enlaces.length - 1; i >= 0; i--) {
        if (enlaces.item(i).href === "http://prueba/") {
            count++;
        }
    }

    console.log("Numero de enlaces que enlazan a http://prueba = " + count);

    enlaces = document.querySelectorAll('a[href="http://prueba"]');
    console.log("Numero de enlaces que enlazan a http://prueba = " + enlaces.length);

    var parrafo = document.querySelectorAll("p");
    if (parrafo.length > 2) {
        enlaces = parrafo[2].querySelectorAll("a");
    }
    console.log("Número de enlaces del tercer párrafo = " + enlaces.length);

    enlaces = document.querySelectorAll("body > p:nth-child(3) a");
    console.log("Número de enlaces del tercer párrafo = " + enlaces.length);
};
