function addNums (a, b) {
   var c = a + b;
    console.log(c);
};

addNums(10, 20);
// console.log(c);


// const getAvg = function (n1, n2 , n3) {
//     const avg = (n1 + n2 + n3) / 3;

//     // console.log(avg);
//     return avg;
// };

// const result = getAvg(10, 20);
// console.log(result);

// Arrow Function
// const factorial = (n) => {

//     let f =1;
//     for (let i = 1; i <= n; i++) {
//        f *= i;
//     } 
//     return f;
// };

// const fact = factorial(5);
// console.log(fact);

// WA function to check if a number is prime or not
function isPrime(number) {
    
    
    if (number < 2) {
        return false;
    }

    
    for (let i = 2; i <= (number); i++) {
        if (number % i === 0) {
            return false; 
        }
    }

    return true; 
}

