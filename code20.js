function reverseStr(word){
    let newStr = "";
    for(let i = word.length-1; i >= 0 ; i--){
        newStr += word[i];
    }
    return newStr;
}
console.log(reverseStr('jafar'));