window.onload = function() {
    var calcular = document.getElementById('calcular');
    var numero = document.getElementById('number');
    var result = document.getElementById('result');

    var worker = new Worker('assets/js/primes.js');

    calcular.addEventListener('click', function(e) {
        e.preventDefault();

        worker.postMessage(numero.value);

    });

    worker.addEventListener('message', function(e) {
        var primes = e.data;

        result.innerHTML = primes.join(" ");
    });
};
