export class Conta{
    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
       
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo conta");
        }
    }
    
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }   
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        let taxa = 1
        return this._sacar(valor, taxa);
    }

    _sacar(valor){
       throw new Error("O método Sacar da conta é abstrato.")
    }

    depositar(valor){
        if(valor <= 100){
          return
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        if(this._tipo == "salario"){
            return;
        }
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}