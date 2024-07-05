let arr=[2,9,-5,-4,"AzerBayCan",true,12,"LANKARAN","LimOn",182,4]
let max = 0;
let word = ""

for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] == "string"){
        if(arr[i].length > max){
            max = arr[i].length
            word = arr[i]
        }
    }
}

console.log(word)