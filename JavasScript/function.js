function addNums(a, b) {
    var c = a + b;
    console.log(c);
};

addNums(10, 20);

// console.log(c);

const getAvg = function (m1, m2, m3) {
    // console.log(m1, m2, m3);

    const avg = (m1 + m2 + m3) / 3;

    // console.log(avg);
    return avg;
}

const result = getAvg(10, 20, 78);

console.log(result);

// Arrow function

const factorial = (n) => {

    let f = 1;
    for (let i = 1; i <= n; i++) {
        f *= i;
    }
    return f;
};

const fact = factorial(5);
console.log(fact);

// WA function to check if a number is prime or not