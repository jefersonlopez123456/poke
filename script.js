// Write your code here
var Pokemon = angular.module("Pokemon",[])
Pokemon.controller("ListadoPokemon", function($scope,$rootScope,$http){
	$scope.Lista = [];
	for(var Poke=1; Poke<=800; Poke++){
	$http({
		method: "GET",
		url: "https://pokeapi.co/api/v2/pokemon/"+Poke
	}).then(function data(x){
		$scope.Lista.push(x);
	})	
	}
	$http({
		method: "GET",
		url: "https://pokeapi.co/api/v2/pokemon/25"
	}).then(function data(x){
		$scope.Lista.push(x);
	})
});