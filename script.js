const numbers = [67, 80, 65, 79, 86, 66, 75, 71, 81, 69, 90, 79, 68, 65, 73, 88];

// 1. Convert numbers to Alphabet according to Ascii table using the fromCharCode method
// Using a for loop:
var alphaArray = [];
    for (var i = 0; i<numbers.length; i++){
        const letters = String.fromCharCode(numbers[i]);
        alphaArray.push(letters);
        console.log(letters)
    }

// Using the forEach method:

numbers.forEach(function(element){
    console.log(String.fromCharCode(element))
})
// Using the map method:
numbers.map(function(element){
    console.log(String.fromCharCode(element))
})


// 2. Display numbers below showing only numbers that are greater than 72 and less then 88 (inclusive) using the filter method
// Answer:

const result = numbers.filter(number => number > 72 && number < 88);

console.log(result);

// 3. Display the product of all numbers using reduce
// Answer:

const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(numbers.reduce(reducer))