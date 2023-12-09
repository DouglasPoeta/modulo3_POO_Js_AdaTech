
class Conta {
    #saldo
    constructor( ) { 
        this.#saldo = 0; 
    }

    depositar(valorDeposito) {
        try {
            if (Number(valorDeposito > 0)) {

                this.#saldo += valorDeposito
                return ` VALOR DEPOSITADO : ${Number(valorDeposito).toFixed(2)} R$`
            } else {
                throw new Error('valor invalido');
            }
        } catch (error) {
            return error.message
        }
    }


    sacar(valorSaque) {
        try {
            if (valorSaque <= this.#saldo) {
                this.#saldo -= valorSaque
                return `VALOR DO SAQUE : ${Number(valorSaque).toFixed(2)} R$`
            } else {
                throw new Error("Saldo insuficiente ou valor inválido")
            }
        } catch (error) {
            return error.message;
        }

    }

    Saldo( ) {
        return `SALDO ATUAL : ${this.#saldo.toFixed(2)} R$`;
    }
}


//----------------------------------------------------------------------


class Cliente {
    constructor(nome, idade, contas) {
        this.nome = nome;
        this.idade = idade;
        this.contas = [];
    }

    adicionarConta(conta) {
        this.contas.push(conta);
    }

}

//------------------------------------------------------------



class ContaCorrente extends Conta {
    #limite
    #saldo
     constructor(  limite) {
        super( );
        this.limite = limite || 400; 
        this.#saldo = 0;
     }

    sacarContaCorrente(valorSaque) {
         try {
            if ( valorSaque <= (this.#saldo + this.#limite)) {
                this.#saldo -= valorSaque
                return `Valor do saque foi de: ${Number(valorSaque).toFixed(2)} Cliente: ${this.Cliente.nome}`
            } else {
                throw new Error("Saldo insuficiente ou valor inválido")
            }
        } catch (error) {
            return error.message;
        }
    }
}

 
const cliente1 = new Cliente('Douglas', 30);
const corrente = new ContaCorrente( 1000);

cliente1.adicionarConta(corrente);

console.log(corrente.depositar(500));
console.log(corrente.sacar(800));
console.log(corrente.sacar(1200));
console.log(corrente.depositar(1000));
console.log(corrente.sacar(800));
console.log(corrente.Saldo());
 

 