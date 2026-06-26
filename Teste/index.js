function calculadora(n1, n2, op){
    n1 = Number(prompt('Digite o primeiro valor: '));
    n2 = Number(prompt('Digite o segundo valor: '));
    op = prompt('Digite a operação desejada: ');


    switch(op){
        case '+':
            somar(n1, n2);
        case '-':
            subtrair(n1, n2);
        case '*':
            multiplicar(n1, n2);
        case '/':
            dividir(n1, n2);
        default:
            return "Operação inválida! Use: somar, subtrair, multiplicar ou dividir.";
    }
}


function somar(n1, n2){
    return n1 + n2;
}

function subtrair(n1, n2){
    return n1 - n2;
}

function multiplicar(n1, n2){
    return n1 * n2;
}

function dividir(n1, n2){
    if(n2 != 0){
        return n1 / n2;
    }
}


let livro = {
    titulo: "Diário de um Banana",
    autor: "Jeff Kinney",
    anoPublicacao: 2007
}

console.log(livro.titulo);
console.log(livro.autor);
console.log(livro.anoPublicacao);

let numeros = [1, 2, 3, 4, 5];
let primeiro = numeros[0];
let ultimo = numeros[numeros.length - 1];
let soma = primeiro + ultimo;
console.log(soma);


let aluno = {
    nome: "Rafael",
    idade: 19,
    notas: [6, 9, 10]
}

let soma = 0;
let media = 0;
for(let i=0; i<aluno.notas.length; i++){
    soma = soma+aluno.notas[i];
    media = soma/(i+1);
}
if(media>=7){
    console.log('O aluno $(aluno.nome) foi aprovado com média $(Math.trunc(media))')
} else {
    console.log('O aluno $(aluno.nome) foi reprovado com média $(Math.trunc(media))')
}
