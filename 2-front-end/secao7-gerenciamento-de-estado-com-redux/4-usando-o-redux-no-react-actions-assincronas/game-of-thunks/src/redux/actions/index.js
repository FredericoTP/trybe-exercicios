export const REQUEST_API = 'REQUEST_API';
export const RESPONSE_API = 'RESPONSE_API';

export const requestApi = () => ({
  type: REQUEST_API,
});

export const responseApi = (data) => ({
  type: RESPONSE_API,
  payload: data,
});


export function fetchCharacter(name) {
  return async (dispatch) => {
    dispatch(requestApi());
    const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${name}`);
    const result = await response.json();
    console.log(result);
    dispatch(responseApi(result));
  };
};