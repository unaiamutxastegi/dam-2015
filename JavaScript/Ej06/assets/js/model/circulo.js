var App = App || {
    Model: {}
};
App.Model.Circulo = (function() {
    var _radius;

    function Circulo(x, y, radius) {
        //App.Model.Shape.apply(this, [x,y])
        //App.Model.Shape.bind(this)(x,y)
        App.Model.Shape.call(this, x, y);

        _radius = (
            typeof radius === 'number'
        ) ? radius : 0;
    }

    Circulo.prototype = Object.create(App.Model.Shape.prototype);
    Circulo.prototype.constructor = Circulo;


    Circulo.prototype.getR = function() {
        return _radius;
    };

    Circulo.prototype.getArea = function() {
        return Math.PI * Math.pow(_radius, 2);
    };

    return Circulo;
})();
