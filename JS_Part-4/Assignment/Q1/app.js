let num = [1, 2, 3, 4, 5,2,4,5,2,4,6,2,4,6,7,1,2,8];
console.log(num);

let no = parseInt(prompt("Enter the number you want to remove: "));



for(let i=0; i<num.length; i++){
    if(num[i] == no){
        num.splice(i, 1);
    }
}

console.log(num);