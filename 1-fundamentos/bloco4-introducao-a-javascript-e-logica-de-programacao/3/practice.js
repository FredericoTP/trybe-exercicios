let fruits = [3, 4, 10, 1, 12];

let sum = 0;

for (let index = 0; index < fruits.length; index += 1) {
    sum = sum + fruits[index];
}

if (sum > 15) {
    console.log(sum);
} else {
    console.log("valor menor que 16");
}



const number = 100;

let sum = 0;

for (let index = 0; index <= number; index += 1) {
    sum += index;
}

console.log(sum);