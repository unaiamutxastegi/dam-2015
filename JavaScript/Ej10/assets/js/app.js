window.onload = function() {
    var lista = document.getElementById('lista'),
        boton = document.getElementById('add');

    var add = function(e) {
        e.stopPropagation();
        if (lista) {
            var nuevoElemento = document.createElement('li');
            //nuevoElemento.innerHTML='<li>Nuevo Elemento</li>';
            nuevoElemento.innerText = "Nuevo Elemento " + (lista.children.length + 1);
            lista.appendChild(nuevoElemento);
        }
    };

    var remove = function(e) {
        if (confirm('¿Seguro que desea eleminar el elemento?')) {
            this.removeChild(e.target);
        }
    };

    var log = function() {
        console.log(new Date());
    };

    if (lista) {
        lista.addEventListener('click', remove, false);
    }

    if (boton) {
        boton.addEventListener('click', add, false);
    }

    document.addEventListener('click', log, false);
};
