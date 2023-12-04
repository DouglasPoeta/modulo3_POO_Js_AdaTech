// Objetivo: Criar uma classe Pessoa com propriedades como nome, idade e cidade, e métodos para calcular a idade em anos bissextos.

// Crie uma classe Pessoa com propriedades nome, idade e cidade.
// Adicione um método calcularIdadeBissextos que recebe um ano e retorna a idade da pessoa naquele ano, considerando anos bissextos.
// Teste a classe com instâncias diferentes e chame o método para calcular a idade em anos específicos.

console.log("atividade 1 ")
class Pessoa {
    constructor (nome, idade, cidade){
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;}

        calcularIdadeBissextos(ano) {
            let anosBissextos = 0;
            const anoAtual = new Date().getFullYear()
            for (let i = ano; i <= anoAtual; i++) {
                if ((i % 4 === 0 && i % 100 !== 0) || (i % 400 === 0)) {
                    anosBissextos++;
                }
            }
            return anosBissextos;
    }
    }

const pessoa1 = new Pessoa("Douglas", 28, "Charqueadas")
const pessoa2 = new Pessoa("Joao", 25, "Gramado")

console.log(pessoa1.calcularIdadeBissextos(2001))

// Objetivo: Criar uma hierarquia de classes para representar animais, com classes específicas para mamíferos e aves.

// Crie uma classe base Animal com propriedades como nome e tipo.
// Derive classes Mamifero e Ave da classe Animal.
// Adicione métodos específicos para cada classe, como amamentar para mamíferos e voar para aves.
// Teste as classes criando instâncias e chamando métodos específicos.

console.log("\natividade 2")

class Animal {
    constructor(nome, tipo){
        this.nome = nome;
        this.tipo = tipo;
    }  
 
}

class Mamifero extends Animal{ 
    amamentar(){
        console.log(`Se ${this.nome} amamenta é ${this.tipo}`);
    }
    
}
class Ave extends Animal{ 
    voar(){
        console.log(`Se o ${this.nome} voa é ${this.tipo} `);
    }
}
   
const mamifero = new Mamifero("cachorro","mamifero")
mamifero.amamentar()

const ave =  new Ave("papagaio", "Ave")
ave.voar()

// Objetivo: Implementar uma classe Carro com métodos para ligar, desligar, acelerar e frear.

// Crie uma classe Carro com propriedades como modelo, ano e ligado.
// Adicione métodos ligar, desligar, acelerar e frear que afetam o estado do carro.
// Implemente um método status que retorna uma string indicando se o carro está ligado ou desligado.
// Teste os métodos chamando-os em diferentes instâncias da classe.

console.log("\natividade 3  ")

class Carro{
    constructor(modelo, ano, ligado ){
        this.modelo = modelo;
        this.ano = ano;
        this.ligado = ligado;
        this.aceleracao = 0;
    }

    aceleracao = 0;

    ligar(){
        if(this.ligado ===  "ligado"){
            console.log(`Ja esta ligado: ${this.ligado} `);
        }else{
            console.log("ligou")
        }
    }

    desligar(){
        if(this.ligado === "ligado"){
            this.ligado = "desligado";
            console.log("desligou");
        }else{
            console.log(`o carro ja esta desligado: ${this.ligado}`);
        }
    }

    acelerar(){
        if(this.ligado === "ligado"){ 
            this.aceleracao += 50;
            console.log("Acelerou 50km/h ")
        }else{
            console.log("Não é possivel acelerar sem ligar o carro")
        }
    }

    frear(){
        if(this.aceleracao > 0 && this.ligado === "ligado"){
            this.aceleracao -= 50;
            console.log(`desacelerou para ${this.aceleracao}km/h`) 
        }else{
            console.log("ligue o carro, para depois acelerar");
        }

    }
 }

const carro = new Carro("Porshe", "2023", "ligado")
carro.ligar()
carro.acelerar()
carro.frear()
carro.desligar()
