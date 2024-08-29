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


//6. Faça um programa que solicite ao usuário um número e exiba a sequência de Fibonacci até o número informado utilizando um laço de repetição.


//7. Escreva um programa que solicite ao usuário uma lista de números, até o usuário digitar o número zero, e exiba o maior e o menor número da lista.


//8. Escreva um programa que solicite ao usuário uma frase e exiba a quantidade de vogais na frase.



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
                checkPalindrome();
                break;
            case 6:
                checkAnagram();
                break;
            case 7:
                countBlankSpaces();
                break;
            case 8:
                findLastName();
                break;
            default:
                console.log('A questão '+ question +' não foi encontrada.\n\n\n')
        }
    } while (question != 0) 
}

main()