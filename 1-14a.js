function randomArray(length, max) {
return Array.apply(null, Array(length)).map(function(numbers) {
return Math.round(Math.random() * max);
});
}
let numbers = randomArray(1, 100)
function largestNumber(numbers) {
return numbers.map(function(randomArray) {
return Math.max.apply(null, randomArray);
});
}
console.log(numbers);
largestNumber([numbers]);