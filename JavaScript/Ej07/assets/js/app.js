(function(){

	var validar_email = /^\w([\w.\-]*\w)?@\w([\w.\-]*\w)?\.[a-zA-Z]{2,3}$/;


	console.log(validar_email.test("hola@gmail.com"));
	console.log(validar_email.test("unai.amutxastegi@gmail.com"));
	console.log(validar_email.test("@gmail.com"));
	console.log(validar_email.test("..@gmail.com"));
	console.log(validar_email.test("//@gmail.com"));
	console.log(validar_email.test("fsdgf@gmail.es"));
})();

