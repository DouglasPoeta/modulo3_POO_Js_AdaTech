class ContadorDePalavras{
    constructor(texto){
        this.texto = texto || "";
    }
    
    contarPalavras( ){
        const palavras = this.texto.split(/\s+/); // Usa split para dividir o texto em palavras nos espaços em branco
        const palavrasNaoVazias = palavras.filter(palavra => palavra.trim() !== "");// Filtra palavras vazias que podem ocorrer se houver espaços múltiplos
        return palavrasNaoVazias.length;

    }
}

// Criando instância do contador de palavras
const contadorPalavras = new ContadorDePalavras('JavaScript é uma linguagem poderosa.');

// Obtendo contagem de palavras
const contagem = contadorPalavras.contarPalavras();
console.log(`Número de palavras: ${contagem}`);