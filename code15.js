let input = [6, 4, 3, 5, 7, 2];

let evenNumber = input.filter( num =>{
    return num % 2 == 0;
})

console.log(evenNumber.reduce((a,b) => a + b, 0))