// WAP to check if a number is prime or not
const num = 30;
let prime = true;

for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
        console.log('not prime');
        prime = false;
        break;
    }
}

if (prime) {
    console.log('prime');
}

// WAP to print all numbers divisible 7 and 11 between 100 and 500

for (let i = 100; i <= 500; i++) {
    if (i % 7 === 0 && i % 11 === 0) {
        console.log(i);
    }
}

// WAP print all perfect square numbers between 1 to 100

for (let i = 1; i <= 100; i++) {
    let root = i ** 0.5;

    if (Number.isInteger(root)) {
        console.log(i);
    }
}