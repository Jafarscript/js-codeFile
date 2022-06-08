let input = [6, 4, 3, 5, 7, 2];

let oddNumber = input.filter( num =>{
    return num % 2 == 1;
})

console.log(oddNumber.reduce((a,b) => a + b, 0))