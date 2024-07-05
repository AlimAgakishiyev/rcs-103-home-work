let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];

function findUppercaseWord(arr) {
    let maxWord = "";
    let maxIndex = -1;

    arr.forEach((element, index) => {
        if (typeof element === 'string' && element === element.toUpperCase()) {
            if (element.length > maxWord.length) {
                maxWord = element;
                maxIndex = index;
            }
        }
    });

    
        console.log(`Bütün hərfləri böyük olan söz: ${maxWord}`);
        console.log(`Indeks: ${maxIndex}`);
        
}

findUppercaseWord(arr);
