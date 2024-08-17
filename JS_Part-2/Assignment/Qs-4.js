let a = 54;
let b = 23;
let c = 45;

if(a > b) {
    if(a > c) {
        console.log(a + " is the largest number");
    }
    else {
        console.log(c + " is the largest number");
    }
} else {
    if(b > c) {
        console.log(b + " is the largest number");
    } else {
        console.log(c + " is the largest number");
    }
}