const lifePhase = (age) => {
    if(age >= 0 && age <= 3){
        return 'baby';
    }else if(age >= 4 && age <= 12){
        return 'child';
    }else if(age >= 13 && age <= 19){
        return 'teen';
    }else if(age >= 20 && age <= 64){
        return 'adult';
    }else if(age >= 65 && age <= 140){
        return 'senior citizen';
    }
    else{
        return 'This is not a valid age'
    }
    // switch (age) {
    //     case (age >= 0 && age <= 3):
    //         console.log('You score garde A');
    //         break;
    //     case (age >= 4 && age <= 12):
    //         console.log('You score garde B');
    //         break;
    //     case (age >= 13 && age <= 19):
    //         console.log('You score garde C');
    //         break;
    //     case (age >= 20 && age <= 64):
    //         console.log('You score garde D');
    //         break;
    //     case (age >= 65 && age <= 140):
    //         console.log('You score garde E');
    //         break;
    //     default:
    //         console.log('This is not a valid');
    //         break;
    // }
}

console.log(lifePhase(38));