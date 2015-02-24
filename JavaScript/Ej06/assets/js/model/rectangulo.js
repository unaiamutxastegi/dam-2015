var App = App || {
    Model: {}
};
App.Model.Rectangulo = (function() {
    var _ladolargo;

    function Rectangulo(x, y, ladolargo, lado) {
        App.Model.Cuadrado.call(this, x, y, lado);

        _ladolargo = (typeof ladolargo === 'number') ? ladolargo : 0;
    }

    Rectangulo.prototype = Object.create(App.Model.Cuadrado.prototype);
    Rectangulo.prototype.constructor = Rectangulo;

    Rectangulo.prototype.getLadoLargo = function() {
        return _ladolargo;
    };

    Rectangulo.prototype.getSuperficie = function() {
    	//Cuadrado.prototype.getLado.call(this)
        
        return _ladolargo * this.getLado(); //Rectangulo.prototype.getLado();
    };
    return Rectangulo;
})();
