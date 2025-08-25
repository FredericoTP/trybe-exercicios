import { useState } from "react";

function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [modulo, setModulo] = useState('Fundamentos');

  return (
    <form>
      <fieldset>
        <legend>Dados Pessoais</legend>
        <label htmlFor="name">
          Nome Completo
        <input id="name" type="text" value={ name } onChange={ ({ target }) => setName(target.value) } />
        </label>

        <label htmlFor="age">
          Idade
          <input id="age" type="number" value={ age } onChange={ ({ target }) => setAge(target.value) } />
        </label>

        <label htmlFor="city">
          Cidade
          <input id="city" type="text" value={ city } onChange={ ({ target }) => setCity(target.value) } />
        </label>
      </fieldset>

      <fieldset>
        <legend>Módulo</legend>
        <label htmlFor="fundamentos">
          <input
            id="fundamentos"
            type="radio"
            value="Fundamentos"
            name="modulo"
            checked={ modulo === "Fundamentos" }
            onChange={ ({ target }) => setModulo(target.value) }
          />
          Fundamentos
        </label>
        <label htmlFor="frontend">
          <input
            id="frontend"
            type="radio"
            value="Front-end"
            name="modulo"
            checked={ modulo === "Front-end" }
            onChange={ ({ target }) => setModulo(target.value) }
          />
          Front-end
        </label>
        <label htmlFor="backend">
          <input
            id="backend"
            type="radio"
            value="Back-end"
            name="modulo"
            checked={ modulo === "Back-end" }
            onChange={ ({ target }) => setModulo(target.value) }
          />
          Back-end
        </label>
        <label htmlFor="computacao">
          <input
            id="computacao"
            type="radio"
            value="Ciência da Computação"
            name="modulo"
            checked={ modulo === "Ciência da Computação" }
            onChange={ ({ target }) => setModulo(target.value) }
          />
          Ciência da Computação
        </label>
      </fieldset>

      <button type="button">Enviar</button>
    </form>
  )
}

export default Form;
