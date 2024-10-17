const arr = ['abc', 10, false, undefined];

console.log(arr);
console.log(typeof arr);

console.log( Array.isArray(arr) );

const movies = ['Iron Man', 'Stree 2', 'Black Adam', 'Hawkeye', 'Khel Me'];
console.log(movies.length);


//INDEXING
console.log(movies[3]);
console.log( movies.indexOf('Black Adam'));
console.log(movies.at(-4));

movies[4] = "Harry Porter";
console.log(movies);

// SLICING
console.log(movies.slice(1, 4));
console.log(movies.slice(-3));

// ADDING & REMOVING ELEMENTS

movies.push('Thor') // add at the end
movies.unshift('Spiderman'); // add at the start
console.log(movies);


movies.pop(); // removes last element 
movies.shift(); // removes start element 
console.log(movies);

// movies.splice(2,2);  // removes 2 elements from index 2
movies.splice(2, 2, 'Superman', 'Flash', 'Arrow');  // replace 3 elements
movies.splice(2, 0, 'Superman', 'Flash'); //insert 3 elements
console.log(movies);


