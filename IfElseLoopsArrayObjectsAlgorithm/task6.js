let arr = [3, 8, 2, 5, 4, 10, 7, 6];

let minElement = arr[0];
let minIndex = 0;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minElement) {
        minElement = arr[i];
        minIndex = i;
    }
}

let maxElement = arr[0];
let maxIndex = 0;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
        maxElement = arr[i];
        maxIndex = i;
    }
}

let temp = arr[minIndex];
arr[minIndex] = arr[maxIndex];
arr[maxIndex] = temp;

console.log("min element ile max elementin yer deyismesi:", arr);
