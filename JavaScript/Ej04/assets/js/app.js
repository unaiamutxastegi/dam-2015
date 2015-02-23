(function() {
        var tipotexto = function(cadena) {
            var tipocadena = "Mezcla de minúsculas/mayúsculas";
            if (typeof cadena === "string") {
                if (cadena === cadena.toUpperCase()) {
                    tipocadena = "Todo mayúsculas";
                } else if (cadena === cadena.toLowerCase()) {
                    tipocadena = "Todo minúsculas";
                } else {
                    throw  Error("not string");
                }
            }

                return tipocadena;
            };
            console.log(tipotexto("fndfjsb"));
            console.log(tipotexto("fndASb"));
            console.log(tipotexto("ADSEFDFD"));
            try{
                console.log(tipotexto(null));
                console.log(tipotexto(function(){}));
            }catch(e){
                console.log(e instanceof Error);
            }
        })();
