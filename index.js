import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente ("Gisel", 12345678);
const cliente2 = new Cliente ("José", 87654321);

const contaCorrenteGisel = new ContaCorrente (cliente1, 1001);


contaCorrenteGisel.depositar(500);
const conta2 = new ContaCorrente (cliente2, 1002);

contaCorrenteGisel.transferir(200, conta2);

console.log (conta2);
console.log (contaCorrenteGisel);
