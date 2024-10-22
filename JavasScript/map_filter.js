const nums = [2, 5, 8, 9, 4, 1];

const sqr = nums.map ( (n) => {return n**2 } );
console.log(sqr);


const prices = [ 340, 670, 499, 384, 2944 ];
// add 18% GST to all prices and store in a new array
const gstRate = 1.18;

const pricesWithGST = prices.map(price => price + (price * gstRate));
console.log(pricesWithGST);

console.log("----------------");

const prices2 = [ '₹234.66', '₹33.42', '₹99.999', '₹400.3'];
// [ 234, 33, 99, 400 ];

// const intPrices = prices2.map ( (p)  => { return parseInt(p.slice(1)) });
// console.log( parseInt('₹234.66'.slice(1)) );
// console.log(intPrices);

const intPrices = prices2.map(price => parseInt(price.replace('₹', '')));
console.log(intPrices); 
console.log('-------------------------------------------------');


const evenNums = nums.filter( (n) => { return n%2 === 0 } );
console.log(evenNums);
console.log('-------------------------------------------------');

//WAP to filter all prices greater than 500
const newPrices = prices.filter( (n) => {return prices > 500});
console.log(newPrices);
console.log('-------------------------------------------------');

//WAP to filter all names having lenght greater than 4
const names = [ 'raju', 'pinki', 'kaliya', 'ramu' ];


const filteredNames = names.filter(name => name.length > 4);
console.log(filteredNames);
console.log('-------------------------------------------------');

const brands = [ 'apple', 'samsung', 'nokia', 'mi', 'oneplaus' ];
// convert all brands to uppercase

const upperCaseBrands = brands.map(brand => brand.toUpperCase());

console.log(upperCaseBrands);
console.log('-------------------------------------------------');

const fullnames = [ 'Anushree Pandey', 'Neetu Sharma', 'Akbar Mehdi' ];
// [Anushree, Neetu, Akbar]; 

const firstNames = fullnames.map((n) => { return n.split(' ')[0]} );
console.log(firstNames); 
console.log('-------------------------------------------------');

//WAP to get all names having character 'a'
console.log('abcxyz'.includes('cx'));


const nums2 = [3, 4, 9, 16, 15, 19];
// filter all perfect squares

const perfectSquares = nums2.filter( (n) => {
    return Number.isInteger(n**0.5);
} );

 console.log(perfectSquares); 


const nums3 = [ 3.57, 23.3, 28.99, 4.55, 0.3 ];
//convert every element to integer and then filter all even numbers

const evenIntegers = nums3
  