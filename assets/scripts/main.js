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
		});
	}
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
		var buttons = document.querySelectorAll('button.back');
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
