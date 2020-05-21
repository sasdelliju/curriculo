sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("ovly.data.binding.curriculo.controller.View1", {
		onInit: function () {
			
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
				competencias: [ "ABAP", "UI5", "JavaScript" ]
			};
			
			//var oModeloPessoal = new JSONModel(oFonteDeDados);
			
			var oModeloPessoal = new JSONModel("https://www.mocky.io/v2/5ec5da333200007900d748f3"); //aqui faz uma chamada de rede , um GET na uri
 			
			this.getView().setModel(oModeloPessoal);
			
		}
	});
});