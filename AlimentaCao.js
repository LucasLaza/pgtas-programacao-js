/*let pesoDog = 10
let estoqueGramas = 10000
let nomeDog = "Thor"

let racaoPorDia = pesoDog * 30

console.log(nomeDog + ", o cachorro, vai comer " + racaoPorDia + " gramas por dia. Seu peso é de " + pesoDog +  "kg. Nosso estoque vai durar " + Math.floor(estoqueGramas / racaoPorDia) + " dias.")
*/

let pesoDog = 10;
let estoqueGramas = 10000;
let nomeDog = "Thor";

let racaoPorDia = pesoDog * 30;
let diasDeEstoque = Math.floor(estoqueGramas / racaoPorDia);

console.log(`🐶 Nome: ${nomeDog}
⚖️ Peso: ${pesoDog} kg
🍽️ Consumo diário: ${racaoPorDia} gramas
📦 Estoque disponível: ${estoqueGramas} gramas
⏳ Estoque dura: ${diasDeEstoque} dias`);