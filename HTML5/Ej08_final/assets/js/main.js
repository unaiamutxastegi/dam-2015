$(function() {
    "use strict";

    // Obtener los elementos del DOM
    var content = $('#content');
    var status = document.getElementById('status');
    var input = document.getElementById('input');

    // Mi color asignado por el servidor
    var myColor = false;
    // Mi nick
    var myName = false;

    // Comprobar la disponibilidad de Web Socket en el navegador
    /*    if (!Modernizr.websocket) {
            return false;
        }*/

    var socket = new WebSocket('ws://www.arkaitzgarro.com:1337');

    input.addEventListener('keydown', function(e) {
        if (e.keyCode === 13) {
            var value = this.value;
            if (value) {
                if (!myName) {
                    myName = value;
                }
                socket.send(value);
                input.value = '';
            }
        }
    }, false);

    socket.addEventListener('open', function(e) {
        console.log("Welcome - status " + this.readyState);
        input.disabled = false;
        status.innerText = 'Your Nick:';
    }, false);

    socket.addEventListener('close', function(e) {
        log("Disconnected - status " + this.readyState);

    }, false);

    socket.addEventListener('error', function(e) {
        console.log('Error ' + e);
    }, false);

    socket.addEventListener('message', function(e) {
        var messages;
        try {
            messages = JSON.parse(e.data);
        } catch (ex) {
            console.log('Error with JSON' + ex);
        }
        if (messages) {
            switch (messages.type) {
                case 'color':
                    myColor = messages.data.color;
                    status.style.color = myColor;
                    status.innerText = myName + ':';
                    break;
                case 'history':
                    for (var i = 0; i < messages.data.length; i++) {
                        addMessage(messages.data[i].author,
                            messages.data[i].text,
                            messages.data[i].color,
                            new Date(messages.data[i].time));
                    }
                    break;
                case 'message':
                    addMessage(messages.data.author,
                        messages.data.text,
                        messages.data.color,
                        new Date(messages.data.time));
                    break;
            }
        }
    }, false);

    //window.WebSocket = window.WebSocket || window.MozWebSocket;

    // Abrir la conexion con ws://www.arkaitzgarro.com:1337
    // 1. Al abrir la conexión, solicitar el nick.
    // 2. Controlar posibles errores del servidor.
    // 3. Escucar los mensajes del servidor, y mostrarlos en el elemento "content"
    // 4. La estructura del objeto enviado por el servidor es la siguiente:
    //      {
    //          // Contiene el tipo de mensaje recibido
    //          type : @string in ['color', 'history', 'message'],
    //          // Contiene los datos según el tipo de mensaje recibido
    //          data: @Object {author, text, color, time}
    //      }
    // 5. Enviar un mensaje al pulsar enter. El mensaje enviado es únicamente la cadena de caracteres.

    /**
     * Añadir el mensaje a la ventana de chat
     */
    function addMessage(author, message, color, dt) {
        content.prepend('<p><span style="color:' + color + '">' + author + '</span> @ ' +
            (dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ':' +
            (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes()) + ': ' + message + '</p>');
    }
});
