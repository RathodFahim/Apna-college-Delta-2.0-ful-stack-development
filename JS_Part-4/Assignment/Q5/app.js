let num = [1, 5, 2, 5, 3, 2, 5, 2, 6, 4, 2, 4, 1];
let largest = 0;

for (let i = 0; i < num.length; i++) {
    if (num[i] > largest) {
        largest = num[i];
    }
}


console.log(largest);