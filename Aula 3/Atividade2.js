class ConversorDeMoeda {
    constructor(taxaCambio){
        this.taxaCambio = taxaCambio;
    }

    converter(valor, moedaOrigem, moedaDestino){
       try{
           if(!Number(valor)){
            throw new Error ("Não é um valor válido")
           }else{
            return `${(Number(valor) * this.taxaCambio).toFixed(2)} `
           }
       }catch(error){
        console.log(error.message)
       }
    }
}

// Criando instância do conversor de moeda
const conversorMoeda = new ConversorDeMoeda(5.0); // Taxa de câmbio: 5.0

// Convertendo moeda
const valorConvertido = conversorMoeda.converter(100, 'USD', 'BRL');
console.log(`Valor convertido: ${valorConvertido} BRL`);
// Saída esperada: Valor convertido: 500.0 BRL```
