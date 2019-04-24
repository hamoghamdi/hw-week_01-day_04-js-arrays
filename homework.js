// Problem 1
const summation = function (num){
    let sum = 0;
    for (let i=1; i<=num; i++){
        sum += i;
    }
    return sum;
}
summation(5);

// Problem 2
const summationEven = function (num){
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (i%2 === 0) {
            sum += i; }
    }
    return sum;
}
summationEven(5);

// Problem 3
const avg = function (numbers)
{
    let sum =0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    let avrg = sum / numbers.length ;
    return avrg;
}
avg([8, 2, 2, 4]);

// Problem 4
const reversse = function (txt){
    let txtArray = txt.split("");
    txtArray.reverse();
    txtArray = txtArray.join("");
    return txtArray;
}
reversse("caterpillar");

// Problem 5
const addDashes = function (txtArray){
    txtArray = txtArray.join("-");
    return txtArray;
}
addDashes(['test1', 'test2', 'test3']);

// Problem 6
const countUpAndDown = function (top){
    let arr =[];

    for (let i=1; i<=top; i++){
        arr.push(i);
    } 
    for (let i = 2; i<top && i>0; i--) {
        arr.push(i);
    }
    return arr;
} 
countUpAndDown(3);

// Problem 7
// NO IDEA 
// charAt ???, search for a character in an array of words js
const wordsWithA = function (arr1){
    let arr2 = [];
    for (let i=0; i<arr1.length; i++){
        
    }
}

// problem 8
// same as 7
const wordsWithLetter = function(){}

// Problem 9
const longestWord = function (){

}

// Problem 10 
const largestEvenNumber = function(numbers){
    let numArr = [];
    for (let i=0; i<numbers.length; i++){
        if (numbers[i]%2 === 0){
            numArr.push(numbers[i]);
        }
    }
    
    let largNum = 0;
    for(let i=0; i<numArr.length; i++){
        if (numArr[i]>= largNum){
            largNum = numArr[i];
        }
    }
    return largNum;
}
largestEvenNumber([1, 2, 3, 10, 4, 7, 0]);