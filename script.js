// Reverse a string

let newString = ''; //Definição de variável que começa vazia

function reverseString(str){
    for (let i = str.length - 1; i>= 0; i--){
        newString += str[i]; // Reatribuição da string
    }
    console.log(newString); // Saída da nova string
}

let res = reverseString('Hi. This is a reverse text!');