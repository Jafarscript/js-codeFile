var fizzBuzz = function(n) {
    let curr = []
    for(let i = 1; i <= n; i++){
        if(i % 3 == 0 && i % 5 == 0){
            curr.push('FizzBuzz')
        } else if(i % 3 == 0){
            curr.push('Fizz')
        } else if(i % 5 == 0){
            curr.push('Buzz')
        } else{
            curr.push(i)
        }
    }
    console.log(curr)
}

fizzBuzz(1000)