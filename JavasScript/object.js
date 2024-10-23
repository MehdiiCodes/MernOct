const user = {
    name : 'Akbar',
    email : 'akbarr@gmail.com',
    password : 'Abc123' 
}

console.log(user);
console.log(user.email);
console.log(user ['name']);

user.address = 'Lucknow';
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log('-----------------------------------------------------------');


const smartphone = {
    brand : 'Samsung',
    model : 'S24',
    price : 120000,
    colors : [ 'graphite', 'mint', 'white' ]
};

console.log(smartphone);
//acces price of smartphone
console.log(smartphone.price);
// change price of the smartphone price

smartphone.price = 99000;
console.log(smartphone);

// acces 3rd color of the smartphone
console.log(smartphone.colors[2]);

// add a new color to smartphone
smartphone.colors.push('black');
console.log(smartphone);

// Replace the first color
smartphone.colors[0] = 'blue';
console.log(smartphone);

const smartphoneArray = [
    {
        brand : 'Samsung',
        model : 'S24',
        price : 120000,
        colors : [ 'graphite', 'mint', 'white' ]
    },
    {
        brand : 'Oneplus',
        model : '10R',
        price : 55000,
        colors : [ 'blue', 'white' ]
    },
    {
        brand : 'Redmi',
        model : '11X',
        price : 27000,
        colors : [ 'gray', 'black', 'lightblue' ]
    },
    {
        brand : 'Oppo',
        model : 'f27',
        price : 25000,
        colors : [ 'gray', 'black', 'darkbrown' ]
    },
    {
        brand : 'Apple',
        model : 'Iphone 16 pro max',
        price : 170000,
        colors : [ 'gray', 'black', 'white' ]
    },
];

console.log(smartphoneArray.length);
// Acces price of 2nd smartphone
console.log('-----------------------------------------------------------');

console.log(smartphoneArray[1].price);

// 
console.log(smartphoneArray[3].colors[2]);


//replace first two colors of 3rd smartphone
smartphoneArray[2].colors.splice(0, 2, 'pink', 'green');
console.log(smartphoneArray[2]);

// add new color to 5th smartphone
smartphoneArray[4].colors.push('red');
console.log(smartphoneArray);
console.log('-----------------------------------------------------------');


//filter smartphones with price less than 5000;
const lessThan50000 = smartphoneArray.filter((phone) => {
    return phone.price < 50000
    });

console.log(lessThan50000);
console.log('-----------------------------------------------------------');

// filter all phones with black color
const blackPhones = smartphoneArray.filter((phone) => {
    return phone.colors.includes('black');
});
console.log(blackPhones);
console.log('-----------------------------------------------------------');

// 
const keyword = 'samsung';
const searchResult = smartphoneArray.filter((phone) =>{
    return phone.brand.toLowerCase() === keyword.toLowerCase();
});

console.log(searchResult);
