// Exercício 1

let numbers = [];

let factorial = 1

for (let index = 10; index > 0; index -= 1) {
    numbers.push(index);
}

for (let index2 = 0; index2 < numbers.length; index2 += 1) {
    if (numbers[index2 + 1] != undefined) {
        factorial = factorial * (numbers[index2]);
    }
    
}

console.log(factorial);