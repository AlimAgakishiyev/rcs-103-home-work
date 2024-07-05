function mergeArraysToString(arr1, arr2, char) {
    let mergedArray = [...arr1, ...arr2];
    let mergedString = mergedArray.join(char);
    return mergedString;
}

let array1 = [1, 2];
let array2 = [3, 4];
let character = '*';

let result = mergeArraysToString(array1, array2, character);
console.log(result); 
