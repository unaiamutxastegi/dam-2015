(function() {
    var tiponum = function(n) {
        var tipo = "par";
        if (typeof n === "number") {
            if (n % 2) {
                tipo = "impar";
            }
        } else {
            return NaN;
        }
        return tipo;

    };
    console.log(tiponum(1));
    console.log(tiponum(2));
    console.log(tiponum(3));
})();
