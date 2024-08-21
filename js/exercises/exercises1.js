const prompt = require("prompt-sync")()

//1


//2


//3


//4


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
        question = parseInt(prompt('Qual questão deseja testar? '))
        console.log("Caso queira encerrar digite '0'")
        switch (question) {
            case 0:
                console.log('Encerrando...')
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