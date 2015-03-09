var APP = APP || {};
APP.DB = (function() {
    var db,
        cfg = {
            name: 'Twitter.db',
            version: '2.0',
            description: 'Twitter database'
        };

    var request = indexedDB.open(cfg.name, cfg.version);

    var init = function(success) {
        if (!db) {
            request.addEventListener('success', function(e) {
                console.log('Database name ' + cfg.name + ' created OK');
                db = e.target.result;
                success();
            });

            request.addEventListener('upgradeneeded', function(e) {
                console.log('Updating database...');
                db = e.target.result;

                var tweets = db.createObjectStore('tweets', {
                    keyPath: 'id',
                    autoIncrement: false
                });

                console.log(tweets);
            });
        } else {
            success();
        }

    };


    var insert = function(tweet) {
        init(function() {
            var transaction = db.transaction(['tweets'], "readwrite");
            var store = transaction.objectStore('tweets');

            var request = store.add(tweet);

        });
    };

    var get = function(id, success) {
        init(function() {
            var transaction = db.transaction(['tweets'], "readonly");
            var store = transaction.objectStore('tweets');

            var getRequest = store.get(id);
            getRequest.addEventListener('success', function(e) {
                success(e.target.result);
            });
        });
    };

    var getAll = function(success) {
        init(function() {
            var transaction = db.transaction(['tweets'], "readonly");
            var store = transaction.objectStore('tweets');

            var tweet_arr = [];

            var getAllRequest = store.openCursor();
            getAllRequest.addEventListener('success', function(e) {
                var db = e.target.result;
                if(db){
                    tweet_arr.push(db.value);
                    db.continue();
                }
            });
            success(tweet_arr);
        });
    };

    return {
        insert: insert,
        get: get,
        getAll: getAll
    };
})();
