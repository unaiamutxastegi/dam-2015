window.onload = function() {
    var form = document.getElementsByClassName('form');

    for (var i = sessionStorage.length - 1; i >= 0; i--) {
        form[i].value = sessionStorage.getItem(form[i].id);
    }

    var guardar = function() {
        sessionStorage.setItem(this.id, this.value);
    };

    for (var z = form.length - 1; z >= 0; z--) {
        form[z].addEventListener('keyup', guardar, false);
    }
};
