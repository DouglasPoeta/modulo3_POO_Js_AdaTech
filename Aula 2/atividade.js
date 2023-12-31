// Sistema de Gestão de Biblioteca
// Vamos criar um sistema de gestão de biblioteca em JavaScript utilizando Programação Orientada a Objetos. Teremos classes para representar Livros, Autores e uma Biblioteca.

// Crie a classe Autor:
// A classe deve ter atributos como nome e nacionalidade.
// Crie um método exibirDetalhes que imprima no console os detalhes do autor.
// Crie a classe Livro:
// A classe deve ter atributos como titulo, anoPublicacao e uma instância da classe Autor.
// Crie um método detalhesDoLivro que imprima no console os detalhes do livro, incluindo os detalhes do autor.
// Crie a classe Biblioteca:
// A classe deve ter um atributo que armazena uma lista de livros.
// Crie métodos para adicionar um livro à biblioteca, listar todos os livros e buscar livros por autor.
// Teste o Sistema:
// Crie instâncias das classes Autor, Livro e Biblioteca.
// Adicione alguns autores e livros à biblioteca.
// Liste todos os livros na biblioteca.
// Faça uma busca por livros de um autor específico.
// Exiba os detalhes de alguns livros.

class Autor{
    constructor(nome, nacionalidade){
        this.nome = nome;
        this.nacionalidade = nacionalidade;
    }

    exibirDetalhes(){
        console.log(`Nome do Autor:${this.nome}, Nacionalidade: ${this.nacionalidade}`)
    }

}
class Livro {
    constructor(titulo, anoPublicacao, autor) {
        this.titulo = titulo;
        this.anoPublicacao = anoPublicacao;
        this.autor = autor;
    }

    detalhesDoLivro() {
        console.log(`Título do Livro: ${this.titulo}, Ano: ${this.anoPublicacao}`);
        console.log("Detalhes do Autor:");
        this.autor.exibirDetalhes();
        console.log("-----");
    }
}


class Biblioteca {
    constructor() {
        this.livros = [];
        this.buscarPorAutor = this.buscarPorAutor.bind(this);
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
    }

    listarLivros() {
        console.log("Livros na Biblioteca:");
        this.livros.forEach(livro => {
            livro.detalhesDoLivro();
            console.log("-----");
        });
    }

    buscarPorAutor(autorNome) {
        console.log(`Livros do autor ${autorNome}:`);
        this.livros.forEach(livro => {
            if (livro.autor && livro.autor.nome === autorNome) {
                livro.detalhesDoLivro();
                console.log("-----");
            }
        });
    }
}

// Teste do Sistema
const autor1 = new Autor("Machado de Assis", "Brasileira");
const autor2 = new Autor("Gabriel Garcia Marquez", "Colombiana");

const livro1 = new Livro("Dom Casmurro", 1899, autor1);
const livro2 = new Livro("Cem Anos de Solidão", 1967, autor2);

const biblioteca = new Biblioteca();
biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);

biblioteca.listarLivros();
biblioteca.buscarPorAutor("Machado de Assis");
