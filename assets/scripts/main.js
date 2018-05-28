(function() {

var pageCpf = {
	init: function() {
		this.declaracoes();
	},

	declaracoes: function() {
		this.validateForm();
	},

	validateForm: function() {
		this.setCustomValidity();
	},

	setCustomValidity: function() {
		var cpf = document.querySelector('[name=cpf]');
		cpf.setCustomValidity('Campo inválido');
		cpf.addEventListener('keyup', function(e) {
			cpf.setCustomValidity('');

			if (!cpf.validity.valid) {
				cpf.setCustomValidity('Campo inválido');
			}

			var val = cpf.value;

			val = val.replace(/[^0-9.]+/g, '');

			cpf.value = val;
		});

		cpf.addEventListener('keydown', function(e) {
			console.log(e.keyCode);
			if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
            (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
            (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 return;
			}
			if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
				e.preventDefault();
			}

			var val = cpf.value;

			val = val.replace(/[^0-9.]+/g, '');

			cpf.value = val;
		});

		cpf.addEventListener('blur', function(e) {
			var val = cpf.value;

			val = val.replace(/[^0-9.]+/g, '');

			cpf.value = val;
		});
	},
};

var pagePayment = {
	init: function() {
		this.declaracoes();
	},

	declaracoes: function() {
		this.validateForm();
	},

	validateForm: function() {
		this.setCustomValidity();
	},

	setCustomValidity: function() {
		var email = document.querySelector('[name=email]');
		email.addEventListener('keyup', function(e) {
			if (email) {
				email.setCustomValidity('');
				
				if (!email.validity.valid) {
					email.setCustomValidity('Email inválido');
				}
			}
		});
	}
};

var pageConfirm = {
	init: function() {
		this.declaracoes();
	},

	declaracoes: function() {
		this.backButton();
	},

	backButton: function() {
		var buttons = document.querySelectorAll('.btn.back');
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('click', function(e) {
				e.preventDefault();
				window.history.back();
			});
		}
	}
};

var main = document.querySelector('.main');
if (main) {
	var step = main.dataset.step;
	console.log('Step: ', step);
	switch (step) {
		case 'start':
		break;
		case 'cpf':
			pageCpf.init();
		break;
		case 'payment':
			pagePayment.init();
		break;
		case 'confirm':
			pageConfirm.init();
		break;
	}
}
})(window);
