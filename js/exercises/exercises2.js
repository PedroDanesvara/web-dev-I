const prompt = require("prompt-sync")()

//1. Escreva um programa que solicite um número inteiro e verifique se é divisível por 3 e por 5 ao mesmo tempo. 
function divisibleBy() {
    let number = prompt("Escolha um número: ")

    if(number%3==0 && number%5==0){
    console.log("É divisível por 3 e 5")
    }
    else{
    console.log("Não é divisível por 3 e 5 simultaneamente")
    }
}


//2. Faça um programa que leia três números e informe qual é o maior e qual é o menor. 
function checkMajorAndMinor() {
    let num1 = prompt("Escolha um número: ")
    let num2 = prompt("Escolha outro número: ")
    let num3 = prompt("Escolha mais um número: ")

    let maior = num1
    let menor = num1

    if(num2 > maior)
    maior = num2;
    if(num3 > maior)
    maior = num3;

    if(num2 < menor)
    menor = num2;
    if(num3 < menor)
    menor = num3;

    console.log("O maior entre eles é: ", maior)
    console.log("O menor entre eles é: ", menor)
}


//3. Faça um programa que leia a idade de três pessoas e informe se alguma delas é maior de idade (idade maior ou igual a 18), se todas são maiores de idade, ou se todas são menores de idade (idade inferior a 18 anos). 
function checkAge() {
    let idade1 = prompt("Digite a primeira idade: ")
    let idade2 = prompt("Digite a segunda idade: ")
    let idade3 = prompt("Digite a terceira idade: ")

    let idades = [idade1, idade2, idade3];
    let contador = 0;

    let i = 0;
    for(i = 0; i < 3; i++){
    if(idades[i] >= 18){
        contador++;
    }
    }

    if(contador == 3){
    console.log("Todos são maiores de idade.");
    }
    else if(contador > 0){
    console.log("Pelomenos 1 é maior de idade.");
    }
    else{
    console.log("Todos são menores de idade.");
    }
}


//4. Faça um programa que solicite o nome de um dia da semana e exiba se é um dia útil (segunda a sexta-feira) ou um dia de fim de semana (sábado e domingo).
function checkDay() {
    let dia_semana = prompt("Escolha um dia da semana:")
    dia_semana = removeAcento(dia_semana);
    console.log(dia_semana)

    switch (dia_semana){
    case "segunda":
        console.log("Dia útil");
        break;
    case "terça":
        console.log("Dia útil");
        break;
    case "quarta":
        console.log("Dia útil");
        break;
    case "quinta":
        console.log("Dia útil");
        break;
    case "sexta":
        console.log("Dia útil");
        break;
    case "sabado":
        console.log("Final de semana");
        break;
    case "domingo":
        console.log("Final de semana");
        break;
    default:
        console.log("O dia da semana não está no padrão.")
    }
}


function removeAcento (text){       
    text = text.toLowerCase();           
    text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
    text = text.replace(new RegExp('[Ç]','gi'), 'c');
    return text;                 
}


//5. Escreva um programa que solicite ao usuário um número N e exiba todos os números primos menores que N.
function printPrimeNumbers() {
    const number = parseInt(prompt("Digite um número: "), 10);
    const prime_numbers = createPrimeNumbersList(number);
    console.log(`Números primos menores que ${number}: ${prime_numbers.join(", ")}`);
}


function checkPrimeNumber(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}


function createPrimeNumbersList(number) {
    const prime_numbers = [];
    for (let i = 2; i < number; i++) {
        if (checkPrimeNumber(i)) {
            prime_numbers.push(i);
        }
    }
    return prime_numbers;
}


//6. Faça um programa que solicite ao usuário um número e exiba a sequência de Fibonacci até o número informado utilizando um laço de repetição.
function fibonacci() {
    const number = parseInt(prompt("Digite um número: "), 10);
    let fibSequence = [0, 1];
    let nextFib = 1;

    while (nextFib <= number) {
        fibSequence.push(nextFib);
        nextFib = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
    }

    console.log(`Sequência de Fibonacci até ${number}: ${fibSequence.join(", ")}`);
}


//7. Escreva um programa que solicite ao usuário uma lista de números, até o usuário digitar o número zero, e exiba o maior e o menor número da lista.
function checkNumberLength() {
    let numbers = [];
    let number;

    // Solicita números ao usuário até que ele digite 0
    do {
        number = parseFloat(prompt("Digite um número (ou 0 para finalizar): "));
        if (number !== 0) {
            numbers.push(number);
        }
    } while (number !== 0);

    // Verifica se a lista não está vazia
    if (numbers.length > 0) {
        const major_number = Math.max(...numbers);
        const minor_number = Math.min(...numbers);

        console.log(`Maior número: ${major_number}`);
        console.log(`Menor número: ${minor_number}`);
    } else {
        console.log("Nenhum número foi inserido.");
    }
}


//8. Escreva um programa que solicite ao usuário uma frase e exiba a quantidade de vogais na frase.
function vogalCount() {
    const phrase = prompt("Digite uma frase: ");
    const vogals = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;

    phrase = phrase.toLowerCase();

    for (let char of phrase) {
        if (vogals.includes(char)) {
            contador++;
        }
    }

    const quantidadeVogals = contador

    console.log(`A frase contém ${quantidadeVogals} vogal(is).`);
}



function main() {
    do
    {
        console.log("Caso queira encerrar digite '0'")
        question = parseInt(prompt('Qual questão deseja testar? '))
        switch (question) {
            case 0:
                console.log('Encerrando...')
                break;
            case 1:
                divisibleBy()
                break;
            case 2:
                checkMajorAndMinor()
                break;
            case 3:
                checkAge()
                break;
            case 4:
                checkDay()
                break;
            case 5:
                printPrimeNumbers();
                break;
            case 6:
                fibonacci();
                break;
            case 7:
                checkNumberLength();
                break;
            case 8:
                vogalCount();
                break;
            default:
                console.log('A questão '+ question +' não foi encontrada.\n\n\n')
        }
    } while (question != 0) 
}

main()