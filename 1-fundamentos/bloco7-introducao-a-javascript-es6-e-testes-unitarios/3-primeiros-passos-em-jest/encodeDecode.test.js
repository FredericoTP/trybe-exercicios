// Para as funções encode e decode, crie os seguintes testes em Jest: 
// Teste se encode e decode são funções; 
// Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente; 
// Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente; 
// Teste se as demais letras/números não são convertidos para cada caso; 
// Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro. 

const {encode, decode} = require('./encodeDecode');

describe('function encode', () => {
  const letrasNumero = 'bcdfghjklmnpqrstvwxyz6789';
  test('encode é function', () => {
    expect(typeof encode).toBe('function');
  });
  test('encode retorna 12345 quando encode(aeiou)', () => {
    expect(encode('aeiou')).toEqual('12345');
  });
  test('encode retorna "bcdfghjklmnpqrstvwxyz6789" quando encode(bcdfghjklmnpqrstvwxyz6789)', () => {
    expect(encode(letrasNumero)).toEqual(letrasNumero);
  });
  test('encode retorna 4 quando encode("fred").length', () => {
    expect(encode('fred').length).toBe(4);
  });
});

describe('function decode', () => {
  const letrasNumero = 'bcdfghjklmnpqrstvwxyz6789';
  test('decode é function', () => {
    expect(typeof decode).toBe('function');
  });
  test('decode retorna aeiou quando decode(12345)', () => {
    expect(decode('12345')).toEqual('aeiou');
  });
  test('decode retorna "bcdfghjklmnpqrstvwxyz6789" quando decode(bcdfghjklmnpqrstvwxyz6789)', () => {
    expect(decode(letrasNumero)).toEqual(letrasNumero);
  });
  test('decode retorna 4 quando decode("fr3d").length', () => {
    expect(decode('fr3d').length).toBe(4);
  });
});