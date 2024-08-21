const prompt = require("prompt-sync")()

//1. Escreva um programa que calcule o IMC de um indivíduo.
function imcCalculator() {
    const peso = parseFloat(prompt("Qual seu peso? "))
    const altura = parseFloat(prompt("Qual sua altura? "))

    const imc = peso / (altura * altura)

    console.log("Com peso de ".concat(peso, "Kg"), "e altura de ".concat(altura, "m"), ", seu IMC é:", imc)
    console.log("\nLembrando que os níveis e classificações de IMC são:")

    const tabela_IMC = [
        ["IMC", "Classificação"],
        ["Menor que 18,5", "Magreza"],
        ["18,5 a 24,9", "Normal"],
        ["25 a 29,9", "Sobrepeso"],
        ["30 a 34,9", "Obesidade grau I"],
        ["35 a 39,9", "Obesidade grau II"],
        ["Maior que 40", "Obesidade grau III"],
    ]

    console.table(tabela_IMC)
}


//2. Escreva um programa que solicite ao usuário o valor do raio de uma esfera e calcule e exiba o seu volume.
function calcVolumn() {
    const raio = parseFloat(prompt("Digite o raio da esfera, em metros: "))
    const volumeEsfera = (4 * Math.PI * Math.pow(raio, 3)) / 3
    console.log("O volume da esfera de raio ".concat(raio, " é: ", volumeEsfera.toFixed(2), "m³"))
}


//3. Escreva um programa que calcule o perímetro e a área de um triângulo.
function calcTrianglePerimeter() {
    const ladoA = 10
    const ladoB = 12
    const ladoC = 10

    const h = Math.sqrt(ladoC*ladoC - (ladoB/2)*(ladoB/2)) //h² = c² - (b/2)²

    const perimetroTriangulo = ladoA + ladoB + ladoB
    const areaTriangulo = (ladoB * h) / 2 //Usando "ladoB" como base do triangulo

    console.log("Lados do triângulo:", ladoA, ladoB, ladoC)

    console.log("Perímetro do triângulo:", perimetroTriangulo)
    console.log("Área do triângulo:", areaTriangulo)
}


//4. Escreva um programa que calcule a equação de segundo grau.
function calcBhaskara() {
    console.log(
        "Sabendo que uma equação de segundo grau é composta por (ax² + bx + c) digite os valores de a, b e c com valores inteiros."
    )
    const a = parseInt(prompt('Valor de a:'))
    const b = parseInt(prompt('Valor de b:'))
    const c = parseInt(prompt('Valor de c:'))
    
    console.log(`Com "a" = ${a}, "b" = ${b} e "c" = ${c}, temos:`)
    const delta = b*b - 4*a*c
    
    const x1 = (-b + Math.sqrt(delta)) / (2 * a)
    const x2 = (-b - Math.sqrt(delta)) / (2 * a)
    
    console.log("Raiz x1: ", x1)
    console.log("Raiz x2: ", x2)
}

//5. Faça um programa que leia uma palavra e verifique se a mesma é palíndromo (se pode ser lida da mesma forma de trás para frente). 
function checkPalindrome() {
    let palindrome = prompt("Escreva a palavra que deseja verificar se é um palíndromo: ")
    let reverse_word = palindrome.split('').reverse().join('')

    if (palindrome == reverse_word) {
        console.log("A palavra é um palíndromo!!!")
        console.log("Normal: " + palindrome)
        console.log("Reverso: " + reverse_word)
        return
    }

    console.log("A palavra não é um palíndromo...")
}


//6. Crie um programa que leia duas palavras e verifique se a segunda palavra é um anagrama da primeira. 
function checkAnagram() {
    let word = sortWord(prompt('Escreva a palavra inicial: '))
    let anagram = sortWord(prompt('Escreva o possível anagrama: '))

    if (word === anagram) {
        console.log("Essas palavras são anagramas uma da outra!!!")
        return
    }

    console.log("Essas palavras não são anagramas uma da outra...")
}

function sortWord(word) {
    return word.split('').sort().join('')
}


//7. Faça um programa que receba uma frase e exiba a quantidade de espaços em branco presentes na mesma. 
function countBlankSpaces() {
    let phrase = prompt('Escreva uma frase: ').split(' ')
    let spaceNumber = phrase.length -1

    if (spaceNumber == 0) {
        console.log('Essa frase não contém espaços...')
        return
    }

    console.log(`Essa frase contém ${spaceNumber} ` + ((spaceNumber > 1 ? 'espaços' : 'espaço') + `!!!`))
}


//8. Escreva um programa que receba um nome completo e exiba o sobrenome (último nome) primeiro.
function findLastName() {
    let name = prompt('Escreva seu nome completo: ').split(' ').map(capitalizeFirstLetter)

    console.log('Seu último nome é: '+ name[name.length - 1])
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


//----------------------------------------------------------------

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
                imcCalculator()
                break;
            case 2:
                calcVolumn()
                break;
            case 3:
                calcTrianglePerimeter()
                break;
            case 4:
                calcBhaskara()
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