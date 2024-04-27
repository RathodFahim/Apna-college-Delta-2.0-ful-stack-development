let a = 13;
let b = 5;

console.log(a + b);

let x = 11;
let y = 5;
let sum = x + y;

console.log(sum);

let age = 30;
age += 3; // age = age + 3
console.log(age);

let firstName = "John";
let lastName = "Doe";
let fullNmame = firstName + " " + lastName;
console.log(fullNmame);
console.log(firstName + " " + lastName);

let name = "John";
console.log(name.length);
console.log(name[0]);
console.log(name[1]);
console.log(name[3]);
console.log(name[name.length]); //This will give undefined because there is no index 4 in the string j = 0, o = 1, h = 2, n = 3.
console.log(name[name.length - 1]); //name.length - 1 = 4 - 1 = 3 so it will give n.

let num = 10;
num = ++num;
console.log(num);

let num2 = 15;
let newNum2 = num2++;
console.log(newNum2);
console.log(num2);
