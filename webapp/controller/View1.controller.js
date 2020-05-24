sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("ovly.data.binding.curriculo.controller.View1", {
		onInit: function () {
			
			window._painel = this.byId("panel_competencias");
			
			var oFonteDeDados = {
				nome: "Fausto",
				sobrenome: "Sasdelli",
				endereco: {
					rua: {
						nome: "Av Água Verde",
						numero: "1867"
					},
					cidade: "Curitiba",
					estado: {
						nome: "Água Verde",
						sigle: "PR"
					}
				},
				quiz_1: 60,
				quiz_1_media: 3,
				competencias: [ "ABAP", "UI5", "JavaScript" ],
				empresas: [
					{ nome: "Resource", cargo: "Abap Developer" },
					{ nome: "EGM", cargo: "COBOL Developer" },
					{ nome: "Exxon", cargo: "Technical Analist" }
				]
			};
			
			//var oModeloPessoal = new JSONModel(oFonteDeDados);
			
			var oModeloPessoal = new JSONModel("https://www.mocky.io/v2/5ec86c462f0000bc1adb6fe9"); //aqui faz uma chamada de rede , um GET na uri
			this.getView().setModel(oModeloPessoal);
			
/*			var sGitHub = "https://api.github.com/users/sasdelliju/repos";
			var oModeloGitHub = new JSONModel(sGitHub);
			this.byId("table_github").setModel(oModeloGitHub, "github");*/ //como estou passando o segundo modelo, preciso do segindo parametro pra 1 nao enconbrir o outro
		},
		
		toUpper : function(sTexto){
			if(!sTexto){
				return "???";
			}
			return sTexto.toUpperCase();
		}
	});
});