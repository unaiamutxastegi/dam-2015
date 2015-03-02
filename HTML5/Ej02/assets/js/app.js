window.onload = function() {
    var loaded = false;
    var video = document.getElementById('video');
    var play = document.getElementById('play');
    var pause = document.getElementById('pause');
    var stop = document.getElementById('stop');
    var back = document.getElementById('back');
    var _for = document.getElementById('for');
    var backward = document.getElementById('backward');
    var forward = document.getElementById('forward');
    var fullscreen = document.getElementById('fullscreen');
    var volumen = document.getElementById('volumen');
    var progress = document.getElementById('progress');

    var canplay = function(e) {
        loaded = true;
        volumen.value = video.volumen * 100;
    };

    var player = function() {
        if (loaded) {
            video.play();
        }
    };

    var pauser = function() {
        if (loaded) {
            video.pause();
        }
    };

    var stoper = function() {
        if (loaded) {
            video.pause();
            video.currentTime = 0;
        }
    };

    var _forer = function() {
        if (loaded) {
            video.currentTime += 1;
        }
    };

    var backer = function() {
        if (loaded) {
            video.currentTime -= 1;
        }
    };

    var backwarder = function() {
        if (loaded) {
            video.currentTime = 0;
        }
    };

    var forwarder = function() {
        if (loaded) {
            video.currentTime = video.duration;
        }
    };

    var player_pauser = function() {
        if (video.pause) {
            video.play();
        } else {
            video.pause();
        }
    };

    //var fullscreen = function() {
        //video.pause();
    //};

	var volumener = function (){
		if(loaded){
			video.volume = volumen.value/ 100;
		}
	};
    var progresser = function() {
    	if (loaded){
	        progress.value = video.currentTime / video.duration * 100;
    	}
    };

    if (video) {
        video.addEventListener('canplay', canplay, false);
        video.addEventListener('click', player_pauser, false);
        video.addEventListener('timeupdate', progresser, false);
    }

    if (play) {
        play.addEventListener('click', player, false);
    }

    if (pause) {
        pause.addEventListener('click', pauser, false);
    }

    if (stop) {
        stop.addEventListener('click', stoper, false);
    }

    if (_for) {
        _for.addEventListener('click', _forer, false);
    }

    if (back) {
        back.addEventListener('click', backer, false);
    }

    if (backward) {
        back.addEventListener('click', backwarder, false);
    }

    if (forward) {
        forward.addEventListener('click', forwarder, false);
    }

    if (fullscreen) {
        fullscreen.addEventListener('click', fullscreen, false);
    }
    if (volumen){
    	volumen.addEventListener('input', volumener, false);
    }
};
