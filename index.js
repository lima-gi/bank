import{Cliente} from "./Cliente.js"
import {Gerente} from "./Funcionario/Gerente.js"
import { Diretor } from "./Funcionario/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
import { Conta } from "./Conta/Conta.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
const gerente = new Gerente("Ricardo", 5000, 12345678901);

const estaLogado = SistemaAutenticacao.login(diretor, "123456789");

const conta = new ContaCorrente("Rodrigo");

console.log(estaLogado);