let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];

let enuzunsoz= "";
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
        let soz = arr[i].toString();
        if (soz.length > enuzunsoz.length) {
            enuzunsoz = soz;
        }
    }
}

console.log("Ən uzun söz:", enuzunsoz);