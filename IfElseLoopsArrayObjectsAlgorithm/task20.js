function findIndexesOfString(str, char) {
    let indexes = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            indexes.push(i);
        }
    }
    if (indexes.length > 0) {
        return indexes.reduce((sum, index) => sum + index);
    } else {
        return -1;
    }
}

console.log(findIndexesOfString("salam", 'a')); 
console.log(findIndexesOfString("hello", 'l')); 
console.log(findIndexesOfString("hello", 'x')); 
