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

reversse("Hello");

// Problem 5
const addDashes = function (txtArray){
    txtArray = txtArray.join("-");
    return txtArray;
}
addDashes(['test1', 'test2', 'test3']);