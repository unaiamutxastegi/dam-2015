(function() {
    var validarDNI = function(dni) {
        if ((typeof dni === "string") && (dni.length === 9)) {
            var numDNI = "";
            var letraDNI;
            var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N',
                'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'
            ];

            for (var i = 0; i < 8; i++) {
                numDNI += dni[i];
            }

            letraDNI = dni[8];

            if ((numDNI < 0) || (numDNI > 99999999)) {
                return true;
            }
            if (letraDNI === (letras[numDNI % 23])) {
                return false;
            }
        } else {
            return true;
        }
    };

    console.log(validarDNI("72754011C") === false);
    console.log(validarDNI("12234C") === false);
    console.log(validarDNI("11111111S") === false);
    console.log(validarDNI("S") === false);
    console.log(validarDNI("123456789S") === false);
    console.log(validarDNI("72686952Y") === false);
    console.log(validarDNI(0) === false);
    console.log(validarDNI() === false);
    console.log(validarDNI(null) === false);
})();
