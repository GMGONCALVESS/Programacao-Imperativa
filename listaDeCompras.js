//https://github.com/GMGONCALVESS/Programacao-Imperativa.git
//Join, Pop, Push, Shift, Unshift

let listaDeCompras = ["Sabonete", "Detergente", "A��car", "Leite"];
let item = "Queijo";

console.log("O m�todo join apresenta os dados do array, por padr�o eles s�o separados por v�rgula.")
console.log(listaDeCompras.join() + "\n");
console.log("O m�todo pop ele retira o �ltimo elemento do array, e retorna o elemento para o usu�rio.");
console.log(listaDeCompras.pop() + "\n");
console.log("O m�todo push adicona um elemento no final do array, e nos retorna a sua posi��o.");
console.log(listaDeCompras.push(item) + "\n");
console.log("O m�todo shift retira o primeiro elemento do array, e retorna o elemento para o usu�rio.");
console.log(listaDeCompras.shift() + "\n");
console.log("O m�todo unshift adiciona um elemento no come�o do array, e retorna a sua posi��o.");
console.log(listaDeCompras.unshift(item));

