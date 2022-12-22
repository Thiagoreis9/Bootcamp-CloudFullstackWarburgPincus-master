/* 5) Dado uma lista com as médias tiradas pelos alunos. 
Imprima todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4] */

    let lista = [2, 7, 3, 8, 10, 4];
    for(let i = 0; i<lista.length; i++){
        if(lista[i] < 5){
            console.log(lista[i])
        }
    }