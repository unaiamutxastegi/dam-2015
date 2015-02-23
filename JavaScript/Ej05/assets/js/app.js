(function() {
    var palindromo = function(str) {
        if ((typeof str === "string") && (str.length>1)){
            var tmp = str.trim()
                .toLowerCase()
                .replace(/\s/g, "")
                .split("")
                .reverse()
                .join("");
            return tmp === str.trim().toLowerCase().replace(/\s/g, "");
        } else {
            return false;
        }

    };
    console.log(palindromo("La ruta nos aporto otro paso natural"));
    console.log(palindromo("LOL"));
    console.log(palindromo("dfsd"));
    console.log(palindromo(" "));
    console.log(palindromo(null));
})();
