// 4. Faça um programa que imprima na tela a tabuada de um número

import PromptSync from "prompt-sync"

let prompt = PromptSync()

export function moduloExercicio4() {
    


let insiraNumero:number = parseInt(prompt("Digite um número: "))

for(let contador:number = 1; contador <= 10; contador ++)

console.log(`${insiraNumero} x ${contador} = ${contador*insiraNumero}`)

}
