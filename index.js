/// una iteracion es una regla de codigo que se repite hasta que se alcanza una condicion

/*
-->   Imprime los números del 1 al 50.
-->   Si el número es divisible por 7, debes omitir el siguiente número.
-->   Si el número es divisible entre 10 o 15, debes imprimir “Donkey!”.
-->   Si el número no es divisible por 2 y el número anterior es divisible por 10, debes imprimir “Monkey!”.
let ope = 14%7 
console.log(ope)
*/
for (let i = 1; i <= 50; i=i+1){
  if (i%7 === 1){
    continue
  } else if (i%2 !=0 && (i-1)%10===0){
    console.log('“Monkey')
  }else if ( i%10 === 0 ){
    console.log('Donkey')
  }else if (i%15 === 0) {
    console.log('Donkey')
  }else {
  console.log(i)}
}

