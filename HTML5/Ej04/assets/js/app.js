(function() {
    var tweet = {
        id: "123456789100",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        author: "Unai",
        create_at: "Mon Sep 24 03:02:02 "
    };
    //APP.DB.insert(tweet);
    var datos = [];
    
    var success = function(datos){
    	console.log(datos);
    };

    APP.DB.getAll(success);
})();
