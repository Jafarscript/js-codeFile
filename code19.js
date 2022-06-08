const word = 'Kehinde is a software enigeer';
const countWord = (word) => {
    let array = word.split(' ');
    let sum = array.filter(num =>{
        return num != ' ';
    });
    console.log(sum.length);
}
countWord('Kehinde is a software enigeer')