const { uppercase } = require('./exercise-7');

describe('Teste função uppercase', () => {
  it('retorna "FOGO" se for passado "fogo"', () => {
    uppercase('fogo', (strUpperCase) => {
      expect(strUpperCase).toBe('FOGO');
    });
  });
});
