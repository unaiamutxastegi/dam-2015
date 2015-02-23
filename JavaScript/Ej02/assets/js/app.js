(function() {
    var factorial = function(numfact) {
        var fact = 1;

        if (typeof numfact === "number") {

            while (numfact > 1) {
                fact = fact * numfact;
                factorial(numfact -= 1);
            }

        } else {
            fact = "not number";
        }
        return fact;
    };
    console.log(factorial(5));
    console.log(factorial(4));
    console.log(factorial(3));
    console.log(factorial(""));
    console.log(factorial(null));
})();
