// Zadanie pierwsze

const var1 = 'Hello';
const var2 = 'World';
console.log(`${var1} ${var2}`);

// Zadanie drugie

const multiply = (x, y) => {return x * y};

console.log(multiply(3, 4));

const multiply2 = (x, y = 1) => {return x * y};
console.log(multiply2(3));

// Zadanie trzecie

const average = (...numbers) => numbers.reduce((a, b) => a + b) / numbers.length; 
console.log (average(4, 6, 8, 10));

// Zadanie czwarte

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]

const average2 = (...grades) => grades.reduce((a, b) => a + b) / grades.length;
console.log (average2(...grades));

// Zadanie piąte

const table = [1, 4, 'Iwona', false, 'Nowak'];

const [ , , firstname, , lastname] = fullname;

console.log(firstname, lastname);