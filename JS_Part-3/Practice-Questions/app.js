let arr = [7, 9, 0, -2];
let n = 3;

// 1st Question

let ans1 = arr.slice(0, n);
console.log(ans1);

// 2nd Question

let ans2 = arr.slice(arr.length - n);
console.log(ans2);

// 3rd Question

let str = prompt("Enter a string: ");

if(str.length == 0){
    console.log("Empty string");
} else {
    console.log("string is not empty");
}

// 4th Question

let str2 = "Apna College";
let indx = 3;

if(str2[indx] == str2.toLowerCase()) {
    console.log("Lower case");
} else {
    console.log("Upper case");
}