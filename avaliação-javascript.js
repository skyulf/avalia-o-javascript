// QUESTÃO 1s
let populacaoA = 80000;
let populacaoB = 200000;
let taxaA = 0.03;
let taxaB = 0.015;
let anos = 0;

while (populacaoA < populacaoB) {
    populacaoA += populacaoA * taxaA;
    populacaoB += populacaoB * taxaB;
    anos++;
}

console.log("Número de anos necessários: " + anos);

// QUESTÃO 2
let pares = 0;
let impares = 0;

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt("Digite o " + (i + 1) + "º número inteiro:"));

    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log("Quantidade de números pares:", pares);
console.log("Quantidade de números ímpares:", impares);

// QUESTÃO 3
let quantidade = parseInt(prompt("Quantos números você vai digitar?"));
let menor = Infinity;
let maior = -Infinity;
let soma = 0;

for (let i = 0; i < quantidade; i++) {
    let num = parseFloat(prompt("Digite o " + (i + 1) + "º número:"));
    soma += num;
    if (num < menor) menor = num;
    if (num > maior) maior = num;
}

console.log("Menor valor:", menor);
console.log("Maior valor:", maior);
console.log("Soma dos valores:", soma);

// QUESTÃO 4 - versão com prompt()
let salarioInicial = parseFloat(prompt("Digite o salário inicial do funcionário:"));
let salarioAtual = salarioInicial;
let anoAtual = new Date().getFullYear();
let percentual = 0.015;

for (let ano = 1996; ano <= anoAtual; ano++) {
    salarioAtual += salarioAtual * percentual;
    percentual *= 2;
}

console.log("Salário atual em " + anoAtual + ": R$ " + salarioAtual.toFixed(2));

// QUESTÃO 5
let raio = parseFloat(prompt("Digite o raio do círculo:"));
let area = Math.PI * Math.pow(raio, 2);
let perimetro = 2 * Math.PI * raio;

console.log("Área do círculo: " + area.toFixed(2));
console.log("Perímetro do círculo: " + perimetro.toFixed(2));

// QUESTÃO 6
let capital = parseFloat(prompt("Digite o capital inicial investido:"));
let taxa = parseFloat(prompt("Digite a taxa de juros mensal (%):")) / 100;
let tempo = parseInt(prompt("Digite o tempo do investimento (em meses):"));

let montante = capital * Math.pow((1 + taxa), tempo);

console.log("Montante final do investimento: R$ " + montante.toFixed(2));