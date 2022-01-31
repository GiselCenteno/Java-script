console.log(`Trabalhando com Condicionais`);
const listaDeDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`);



const idadeComprador = 15;
const estaAcompanhada = true;
console.log("Destinos Possíveis");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade")
//     listaDeDestinos.splice(1, 1);
// }
// else {
//     if (estaAcompanhada == true) {
//         console.log("Comprador acompanhado")
//         listaDeDestinos.splice(1, 1);
//     } else {
//         console.log("Não é maior de idade")
//     }

// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem!")
    listaDeDestinos.splice(1, 1);
}
else {
        console.log("Não é maior de idade")
    }






