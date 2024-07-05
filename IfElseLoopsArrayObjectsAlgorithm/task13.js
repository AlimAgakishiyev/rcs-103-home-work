let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];

function findElementsWithUppercase(arr) {
    arr.forEach((element) => {
        if (typeof element === 'string') {
            let uppercaseCount = countUppercaseLetters(element);
            if (uppercaseCount > 2) {
                console.log(`Element: ${element}`);
            }
        }
    });
}

function countUppercaseLetters(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            count++;
        }
    }
    return count;
}

findElementsWithUppercase(arr);
