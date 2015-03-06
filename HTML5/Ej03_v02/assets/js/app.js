window.onload = function() {
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var coment = document.getElementById('coment');
    var form = document.getElementsByClassName('form');

    for (var i = localStorage.length - 1; i >= 0; i--) {
        form[i].value = localStorage.getItem(form[i].id);
    }

    //Usar prefijos para no machacar las variables que se guardan en LocalStorage
    var guardar = function() {
        localStorage.setItem(this.id, this.value);
    };

    for (var z = form.length - 1; z >= 0; z--) {
        form[z].addEventListener('keyup', guardar, false);
    }

    var handleStorage = function(e) {
        for (var i = localStorage.length - 1; i >= 0; i--) {
            form[i].value = localStorage.getItem(form[i].id);
        }
    };

    window.addEventListener('storage', handleStorage);
};
