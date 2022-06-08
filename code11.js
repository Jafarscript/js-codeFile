const howOld = (age, year) =>{
    let currentYear = 2020;
    let yearDifference = '';
    if(currentYear > year){
        yearDifference = currentYear - year;
    }else{
        yearDifference = year - currentYear;
    }
    console.log(`Year Diff = ${yearDifference}`)
    let newAge = age + yearDifference;
    if (currentYear > year) {
        newAge = age - yearDifference;
    }
    console.log(`New Age = ${newAge}`)
    if( year > currentYear){
        console.log(`You will be ${newAge} in the year ${year}`)
    }
    if(currentYear >= year && newAge >! 0){
        console.log(`You were ${newAge} in the year ${year}`)
    }
    if (newAge <= 0){

        console.log(`The year ${year} was ${newAge * -1} years before you were born`)
    }
}

howOld(50,1193)