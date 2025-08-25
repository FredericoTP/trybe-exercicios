const { getPokemonDetails } = require('./exercise-8');

describe('A função getPokemonDetails', () => {

  it('retorna erro quando procuramos um pokémon que não existe no banco de dados', (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(');
    getPokemonDetails('Pikachu', (error, _message) => {
      try {
        expect(error).toEqual(expectedError);
        done();
      } catch (error) {
        done(error);
      }
    });
  });


  it('retorna um pokémon que existe no banco de dados', (done) => {
    const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fogo e a habilidade principal dele é Lança Chamas';
    getPokemonDetails('Charmander', (_error, result) => {
      try {
        expect(result).toBe(expectedString);
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
