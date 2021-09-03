// Function #1: Array Slice
var foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
// let modifiedFood = foods.slice(1, 4);
console.log("Array Slice ", foods.slice(1, 4));

// function slice(start, end, arr) {
//     return arr.slice(start, end)
// }
// Function #2: Array Splice
foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
foods.splice(2, 0, "noodles", "icecream");
console.log("Array Splice ", foods);

// Function #3: Filter 01
var numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
console.log("Even Numbers ", isEven(numberArray));

function isEven(arr) {
    // return arr.filter((num) => num % 2 == 0).sort((a, b) => a - b)
    return arr.filter((num) => num % 2 == 0)
}

// Function #4: Reject
var primeNumber = isPrime(numberArray);


function isPrime(number) {
    let primeNumber = number.filter(
        ((num) => {
            for (let i = 2; i <= Math.sqrt(num); i++)
                if (num % i == 0) { return false }
            return true;
        })
    )
    return primeNumber
}
console.log("Prime Number ", primeNumber);

// Function #5: Lambda
console.log("Lambda Function ", numberArray.filter(num => num % 2 == 0));
// Function #6: Map
var myArray = [11, 34, 20, 5, 53, 16];
console.log("Square Numbers ", findSquareOfNumbers(myArray))

function findSquareOfNumbers(arr) {
    return arr.map(i => i * i)
}


// Function #7: Reduce

myArray = [2, 3, 5, 10]
console.log("Reduce Multiply ", multiply(myArray));

function multiply(arr) {
    return arr.reduce((init, num) => num * init)
}