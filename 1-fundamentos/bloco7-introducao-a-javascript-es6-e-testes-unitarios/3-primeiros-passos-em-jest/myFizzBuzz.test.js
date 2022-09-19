// A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número 
// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado 
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado 
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado 
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado 
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado 

const myFizzBuzz = require('./myFizzBuzz');

describe('Teste myFizzBuzz', () => {
  test('myFizzBuzz retorna "fizzbuzz" quando myFizzBuzz(15)', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  test('myFizzBuzz retorna "fizz" quando myFizzBuzz(9)', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  test('myFizzBuzz retorna "buzz" quando myFizzBuzz(20)', () => {
    expect(myFizzBuzz(20)).toBe('buzz');
  });
  test('myFizzBuzz retorna 4 quando myFizzBuzz(4)', () => {
    expect(myFizzBuzz(4)).toBe(4);
  });
  test('myFizzBuzz retorna false quando myFizzBuzz("a")', () => {
    expect(myFizzBuzz('a')).toBeFalsy();
  });
});
