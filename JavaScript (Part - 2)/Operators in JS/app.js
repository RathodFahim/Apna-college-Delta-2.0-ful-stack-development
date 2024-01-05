// Operator in JS

// 1. Arithmetic Operators
// 2. Assignment Operators =, +=, -=, *=, /=
// 3. Comparison Operators ==, ===, !=, !==, >, <, >=, <=
// 4. Logical Operators
// 5. Unary Operators ++, --, !, typeof

// 1. Arithmetic Operators

let a = 2;
let b = 4;

console.log("The value of a + b is ", a + b);
console.log("The value of a - b is ", a - b);
console.log("The value of a * b is ", a * b);
console.log("The value of a / b is ", a / b);
console.log("The value of a % b is ", a % b); // Remainder
console.log("The value of a ** b is ", a ** b); // Exponentiation means a^b means 10^25

// Comparison Operators
let x = 25;
let y = 34;

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

let p = 10;
let q = "10";

console.log(p == q); // true
console.log(p === q); // false
console.log(p != q); // false
console.log(p !== q); // true

// Comparison for non-numbers

console.log('a' < 'b'); // true
console.log('a' > 'b'); // false
console.log('a' == 'b'); // false
console.log('A' < 'a'); // true
console.log('A' > 'a'); // false
console.log('A' < 'B'); // true
