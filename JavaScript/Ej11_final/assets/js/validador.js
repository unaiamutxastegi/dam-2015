HTMLFormElement.prototype.validate = function() {
    var validador = {
        required: function(val) {
            return val !== undefined && val !== null && val.length > 0 && /^\s+$/.test(val);
        },
        email: function(val) {
            return /^\w([\w.\-]*\w)?@\w([\w.\-]*\w)?\.[a-zA-Z]{2,3}$/.test(val);
        },
        pwd: function(val) {
            var exp1 = /\w{6,}/;
            var exp2 = /[a-z]{1,}/;
            var exp3 = /[A-Z]{1,}/;
            var exp4 = /[0-9]{1,}/;
            return exp1.test(val) && exp2.test(val) && exp3.test(val) && exp4.test(val);
        }
    };

    var required = this.querySelectorAll('.required');
    var email = this.querySelectorAll('.email');

    var validate = function(e) {
        var required_arr = [];
        var email_arr = [];
        var alert_msg = '';

        if (required) {
            for (var i = 0; i < required.length; i++) {
                if ((required[i].type === 'checkbox' && !required[i].checked) || (!validador.required(required[i].value)) || (required[i].type === 'password' && pwd.required[i].value)) {
                    required_arr.push(required[i].name);
                }
            }
        }

        if (email) {
            for (var z = 0; z < email.length; z++) {
                if (!validador.email(email[z].value)) {
                    email_arr.push(email[z].name);
                }
            }
        }

        if ((required_arr.length) || (email_arr.length)) {
            alert_msg = 'Faltan campos por rellenar o no son correctos, los campos son ';

            if (required_arr.length > 1) {
                alert_msg = alert_msg + required_arr.join(', ');
            } else {
                alert_msg = alert_msg + required_arr;
            }

            if (email_arr.length > 1) {

                alert_msg = alert_msg + email_arr.join(', ');
            } else {
                alert_msg = alert_msg + email_arr;
            }
            alert_msg += '.';

            window.alert(alert_msg);
            e.preventDefault();
        }


    };

    // var validateRequired = function(e){
    	
    // };

    this.addEventListener('submit', validate, false);
    // for (var i = required.length - 1; i >= 0; i--) {
    // 	required[i].addEventListener('blur', validateRequired, false);
    // }
};
