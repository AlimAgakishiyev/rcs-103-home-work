let arr = [3, 8, 2, 5, 4, 10, 7, 6];
let minElement = arr[0];
let minIndex = 0;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minElement) {
        minElement = arr[i];
        minIndex = i;
    }
}

console.log("minimum elementin index'i:", minIndex);
