const nums = [2, 6, 3, 8, 9, 5, 1];

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

console.log('----------------');

for (let n of nums) {
    console.log(n);
}

console.log('----------------');

nums.forEach((a, b) => {
    console.log(a, b);
    
});

console.log('----------------');
// Print Square of all elements
const array = [1, 2, 3, 4, 5];
array.forEach(element => {
    console.log(element * element);
});

// store square of all elements in a new array

const squares = [];

nums.forEach(n => {
    squares.push(n**2);
});

console.log(squares);

console.log("-------------");

// const prices = [340, 670, 499, 384, 2944];
// add 18% (0.180) GST to all prices and store in a new array

const prices = [340, 670, 499, 384, 2944];
const gstRate = 0.18;

const pricesWithGST = prices.map(price => price + (price * gstRate));
console.log(pricesWithGST);

console.log("-------------");

// store all prices greater than 500 in a new array
