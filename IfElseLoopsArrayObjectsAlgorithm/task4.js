let arr = [3, 8, 2, 5, 4, 10, 7, 6];
let cutEdedler = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        cutEdedler.push(arr[i]);
    }
}

let maxcutEdedler = Math.max(...cutEdedler);

console.log("Cut ededlerin max elementi:", maxcutEdedler);
