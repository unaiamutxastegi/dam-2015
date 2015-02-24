var App = App || {
    Model: {}
};
App.Model.Cuadrado = (function() {
    var _lado;

    function Cuadrado(x, y, lado) {
        App.Model.Shape.call(this, x, y);

        _lado = (typeof lado === 'number') ? lado : 0;
    }

    Cuadrado.prototype = Object.create(App.Model.Shape.prototype);
    Cuadrado.prototype.constructor = Cuadrado;

    Cuadrado.prototype.getLado = function() {
        return _lado;
    };
    Cuadrado.prototype.getSuperficie = function() {
        return _lado * _lado;
    };

    return Cuadrado;
})();
