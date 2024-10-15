num = 2134;

if (num % 2 === 0) {

    j = 'something'

    console.log('Even');
} else {
    console.log('Odd');
    
}

console.log(j);

const age = 18;

if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}

// Function to determine the grade based on marks
function getGrade(marks) {
    let grade;

    if (marks >= 90 && marks <= 100) {
        grade = 'A+';
    } else if (marks >= 80 && marks < 90) {
        grade = 'A';
    } else if (marks >= 70 && marks < 80) {
        grade = 'B';
    } else if (marks >= 60 && marks < 70) {
        grade = 'C';
    } else if (marks >= 50 && marks < 60) {
        grade = 'D';
    } else if (marks >= 0 && marks < 50) {
        grade = 'F';
    } else {
        grade = 'Invalid marks entered';
    }

    return grade;
}


let marks = 85; 
console.log(`The grade for marks ${marks} is: ${getGrade(marks)}`);


function isPerfectSquare(num) {
    return Number.isInteger(Math.sqrt(num));
}


let number = 25
console.log(`${number} is a perfect square: ${isPerfectSquare(number)}`);


