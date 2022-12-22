/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/

let precoCombustivel = 5.29, gastoCombustivel = 15, distancia = 332;

console.log(((distancia/gastoCombustivel) * precoCombustivel).toFixed(2));

if(gastoCombustivel >= 15){
    console.log("O carro é economico! ")
} else if(gastoCombustivel>= 12){
    console.log("O carro tem o consumo mediano! ")
} else {
    console.log("O carro não é economico! ")
}