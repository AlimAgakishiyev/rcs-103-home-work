function funksiya(arr, num) {
    return arr.includes(num);
}

let arr = [3, 8, 2, 5, 4, 10, 7, 6];
let eded = 5;

if (funksiya(arr, eded)) {
    console.log(eded + " array-də var.");
} else {
    console.log(eded + " array-də yoxdur.");
}

