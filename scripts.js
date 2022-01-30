// arrow function vários parâmetros
var x = 10;
var y = 5;

var soma = (num1, num2) => num1 + num2;

console.log(soma(x, y)); // 15

// arrow function um parâmetro
var frase = 'Estou vendo como criar arrow functions!';

var fraseToArray = (frase) => frase.split(' ');

console.log(fraseToArray(frase)); // (6) ["Estou", "vendo", "como", "criar", "arrow", "functions!"]

// arrow function sem parâmetro
var semParam = () => console.log('Teste arrow function');

semParam();

// arrow function em casos reais
var roupas = [
	{produto: 'Camisa', preco: 25, cor: 'Amarelo'},
	{produto: 'Calça', preco: 80, cor: 'Azul'},
	{produto: 'Jaqueta', preco: 100, cor: 'Preto'},
	{produto: 'Camiseta', preco: 15, cor: 'Rosa'},
	{produto: 'Calção', preco: 20, cor: 'Azul'},
];

var roupasAzuis = roupas.map((roupa) => {
	return roupa.cor === 'Azul';
});

console.log(roupasAzuis);

var precoAlto = roupas.filter((roupa) => {
	return roupa.preco > 25;
})

console.log(precoAlto);

setTimeout(() => {
	console.log('Com setTimeout');
}, 100);

//Contexto THIS
function cook() {
	console.log(this.ingredients);
  }
  cook(); // => undefined

  //Bind
  function cook() {
	console.log(this.ingredients);
  }
  
  let dinner = {
	ingredients: 'bacon'
  }
  let cookBoundToDinner = cook.bind(dinner);
  cookBoundToDinner(); // => "bacon"

  //Outro exemplo
  let calc = function() {
	return {
	  sum: this.sum,
	  mult: this.mult,
	  div: this.div,
	}
  }
  
  let methods = {
	sum: function(x, y) {
	  return x + y;
	},
	mult: function(x, y) {
	  return x * y;
	},
	div: function(x, y) {
	  return x / y;
	}
  }
  calcBound = calc.bind(methods);
  
  console.log(calcBound().sum(2,2)); // => 4
  console.log(calcBound().mult(2,3)); // => 6
  console.log(calcBound().div(6,3)); // => 2