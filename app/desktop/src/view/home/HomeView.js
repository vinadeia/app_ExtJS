Ext.define('MyFirstAppExtJS.view.home.HomeView',{
	xtype: 'homeview',
	cls: 'homeview',
	controller: {type: 'homeviewcontroller'},
	viewModel: {type: 'homeviewmodel'},
	requires: [],
	extend: 'Ext.Container',
	scrollable: true,
	html: `<p>Bem vindo ao meu estudo de Layouts de ExtJs. &#128512; </br>
			Exercício realizado durante o curso "<b>Dominando Sencha Ext JS 7</b>",</br>
			com a finalidade de colocar em prática o conteúdo abordado.</br>
			</p>
			<p>	
			Desconsiderem a combinação de cores, fontes e estylo em geral aplicadas ao layout,</br>
			pois infelizmente não nasci para o Desing.
			</p>
			<p>
			Em cada Item de Menu contém um tipo de Layout do Framework ExtJs,</br> e em suas respectivas abas
			uma breve descrição sobre eles.
			</p>
	`
});