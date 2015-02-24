    (function(){
	    var s1 = new App.Model.Shape();
	    s1.move(5,5);
	    console.log(s1);
	    console.log(s1.getX());
	    console.log(s1.getY());

	    var s2 = new App.Model.Shape();
	    s2.move(15,15);
	    console.log(s2);
	    console.log(s2.getX());
	    console.log(s2.getY());

	    var c = new App.Model.Circulo(10,10,1);
	    console.log(c);
	    console.log(c.getArea());

	    var laukia = new App.Model.Cuadrado(20,20,20);
	    console.log(laukia);
	    console.log(laukia.getSuperficie());

	   	var laukizuzena = new App.Model.Rectangulo(20,20,20,200);
	    console.log(laukizuzena);
	    console.log(laukizuzena.getSuperficie());
    })();
