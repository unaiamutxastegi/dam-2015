(function() {
    var tweet = {
        id: "12",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        author: "Unai",
        create_at: "Mon Sep 24 03:02:02 "
    };
    APP.DB.insert(tweet);
    var datos = [];
    
/*    APP.DB.get(tweet.id,function(t){
    	console.log(t);
    });*/
    APP.DB.getAll(function(t){
    	console.log(t);
    });
})();
