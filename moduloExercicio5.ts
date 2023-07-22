// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.

import PromptSync from "prompt-sync"

let prompt = PromptSync()

export function moduloExercicio5() {
    
let anterior:number = 0
let atual:number = 1
console.log (anterior) ;
console.log (atual) ;



for(let contador:number = 0; contador <= 9 ; contador ++){
    let proximo:number = anterior + atual;
    console.log (proximo) ;
       anterior = atual
       atual = proximo

}
}