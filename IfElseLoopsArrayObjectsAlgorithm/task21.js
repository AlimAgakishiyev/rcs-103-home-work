function addStringToArray(arr, index, str) {
    if (index >= arr.length) {
        arr.push(str);
    } else {
        arr.splice(index, 0, str);
    }
    return arr;
}


let array = ['a', 'salam', 'b', 'world'];
let index = 3;
let stringToAdd = "dev";

let result = addStringToArray(array, index, stringToAdd);
console.log(result);