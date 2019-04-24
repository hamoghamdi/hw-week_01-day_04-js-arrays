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
const wordsWithA = function (arr1){
    let arr2 = [];
    for (let i=0; i<arr1.length; i++){
        for (let m=0; m<arr1[i].length; m++){
            if (arr1[i][m] === 'a') {
                arr2.push(arr1[i]); }
        }
     }
    return arr2;
}
wordsWithA(['cat', 'rabbit', 'dog', 'frog']);

// problem 8
const wordsWithLetter = function(letter, arr1){
    let arr2 = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let m = 0; m < arr1[i].length; m++) {
            if (arr1[i][m] === letter) {
                arr2.push(arr1[i]);
            }
        }
    }
    return arr2;
}
wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']);

// Problem 9
const longestWord = function (txt){
    let arr = txt.split(" "); // splits by spaces
    let long = 0; // longest char index
    let longword; //longest word
    for (let i = 0; i < arr.length; i++) {
        for (let m = 0; m < arr[i].length; m++) {
            if (arr[i].length > long) {
                long = arr[i].length;
                longword = arr[i];
            }
        }
    }
    return longword;
}
longestWord("The cat in the house");

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