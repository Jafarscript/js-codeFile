const twoSum = (array, goal) => {
    let firstnum = 0;
    let secondnum = 0;

    for(let i = 0; i < array.length; i++){
        firstnum = array[i];
        // console.log(firstnum)
    }

    for(let j = array.length - 1; j >= 0; j--){
        secondnum = array[j];
        // console.log(secondnum)
    }
    if(firstnum + secondnum === goal){
        console.log(true)
    } else{
        console.log(false)
    }
}


twoSum([2, 3, 4, 5, 1], 9)