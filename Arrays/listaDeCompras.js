//https://github.com/GMGONCALVESS/Programacao-Imperativa.git
//Join, Pop, Push, Shift, Unshift

let listaDeCompras = ["Sabonete", "Detergente", "Açúcar", "Leite"];
let item = "Queijo";

console.log("O método join apresenta os dados do array, por padrão eles são separados por vírgula.")
console.log(listaDeCompras.join() + "\n");
console.log("O método pop ele retira o último elemento do array, e retorna o elemento para o usuário.");
console.log(listaDeCompras.pop() + "\n");
console.log("O método push adicona um elemento no final do array, e nos retorna a sua posição.");
console.log(listaDeCompras.push(item) + "\n");
console.log("O método shift retira o primeiro elemento do array, e retorna o elemento para o usuário.");
console.log(listaDeCompras.shift() + "\n");
console.log("O método unshift adiciona um elemento no começo do array, e retorna a sua posição.");
console.log(listaDeCompras.unshift(item));

