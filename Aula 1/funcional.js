// Objetivo: Criar uma função que recebe uma lista de números e retorna a soma dos quadrados dos números pares.

// Crie uma função chamada somaQuadradosPares que recebe uma lista de números.
// Utilize programação funcional para filtrar os números pares da lista.
// Eleve cada número par ao quadrado.
// Calcule a soma dos quadrados obtidos.
// Retorne o resultado.
const lista = [1, 2, 4, 5, 8, 9, 12]
let i = 0
function somaQuadradosPares(lista) {
    let resultado = 0;
    do {
        if (lista[i] % 2 === 0) {
            resultado += Math.pow(lista[i], 2)
        }
        i++
    } while (i < lista.length)

    return resultado
}
let resultadoFinal = somaQuadradosPares(lista)
console.log(resultadoFinal)

// Objetivo: Criar uma função que recebe uma lista de palavras e retorna uma nova lista com as palavras ordenadas por tamanho, da menor para a maior.

// esperada: ["uva", "banana", "laranja", "abacaxi"]

const listaPalavras = ["banana", "laranja", "uva", "abacaxi"]
 
function listaOrdenadaPorTamanho(listaPalavras) {
    return listaPalavras.sort((a,b) => a.length - b.length)
}

const novaListaFinal = listaOrdenadaPorTamanho(listaPalavras)
console.log(novaListaFinal)

// Objetivo: Criar uma função que recebe uma lista de números e retorna a média dos números ímpares.

// javascript Copy code

// Crie uma função chamada mediaNumerosImpares que recebe uma lista de números.
// Utilize programação funcional para filtrar os números ímpares da lista.
// Calcule a média dos números ímpares obtidos.
// Retorne o resultado.

const listaNum = [1,8,2,5,6,7,9]
let media = 0;
function mediaNumerosImpares(array){
    let cont = 0;
    array.forEach(item => {
        if(item % 2 !== 0){
          media += item;
          cont++;
        }
    });
    return media/cont
}

let mediaFinal = mediaNumerosImpares(listaNum)
console.log(mediaFinal)
