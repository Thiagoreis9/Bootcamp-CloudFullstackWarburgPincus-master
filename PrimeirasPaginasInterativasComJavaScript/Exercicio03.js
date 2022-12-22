/* 3) Faça um programa que dado uma lista de nomes imprima os
 nomes que começem com a letra "V". */

 let nomes = ["Thiago", "Vanderlei", "Vanuty", "Matheus", "Joao"];

 for(let i = 0; i < nomes.length; i++){
    if(nomes[i].startsWith("V")){
        console.log(nomes[i]);
    }
 } 