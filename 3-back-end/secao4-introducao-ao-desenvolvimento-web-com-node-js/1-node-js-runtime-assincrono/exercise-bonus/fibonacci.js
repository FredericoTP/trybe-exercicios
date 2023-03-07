const readline = require('readline-sync');

function fibonacciNumbers(number) {
  let a = 1;
  let b = 1;
  for (let n = number; n >= 0; n -= 1) {
    const temp = a;
    a += b;
    b = temp;
  }
  console.log(b);
  return b;
}

function main() {
  const n = readline.questionInt('Enter \'n\' value: ');

  if (n <= 0) {
    console.log('Enter a number greater then \'0\'!');
    return;
  }

  console.log(`n: ${n}`);
  fibonacciNumbers(n - 2);
}

main();