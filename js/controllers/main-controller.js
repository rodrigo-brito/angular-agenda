angular.module("agenda")
.controller("MainController",["$scope", function($scope){
	$scope.operadoras = ["Oi", "Tim", "Vivo", "Claro"];
	$scope.appName = "Agenda Telefônica";
	$scope.contatos = [
		{nome: "Rodrigo", telefone: "(31) 0000-0000", operadora: "Tim"},
		{nome: "Fulano", telefone: "(31) 0000-0000", operadora: "Claro"},
		{nome: "Beltrano", telefone: "(31) 0000-0000", operadora: "Vivo"},
	];
	$scope.update = false;
	$scope.addContato = function(contato) {
		$scope.contatos.push( angular.copy(contato) );
		delete this.contato;
	};
	$scope.rmContato = function(index) {
		this.contatos.splice(index, 1);
	};
	$scope.editContato = function(contato) {
		$scope.contato = contato;
		$scope.update = true;
	};
	$scope.updateContato = function(contato, index) {
		$scope.contatos[index] = angular.copy(contato);
		$scope.update = false;
		delete $scope.contato;
	};
}]);