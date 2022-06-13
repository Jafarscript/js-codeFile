let arr = [[[1, [1.1]], 2, 3], [4, 5]];

function flatten(arr){
    let result = arr;
    while(result.some(Array.isArray)){
        result= [].concat.apply([], result);
    }
    return result
}

flatten(arr);