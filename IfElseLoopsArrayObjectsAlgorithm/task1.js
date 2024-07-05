let arr = [3, 8, 2, 5, 4, 10, 7, 6];
let tek = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        tek.push(i);
    }
}

console.log("Tek elementlerin indeksleri:", tek);