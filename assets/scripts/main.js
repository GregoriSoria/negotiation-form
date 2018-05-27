(function() {
var page = {
	init: function() {
		console.log('Page Start!');
		this.declaracoes();
	},

	declaracoes: function() {
		this.clickTitulo();
	},

	clickTitulo: function() {
		document.querySelector('h1').addEventListener('click', function() {
			alert('clicou no título');
		});
	},
};

page.init();
})(window);
