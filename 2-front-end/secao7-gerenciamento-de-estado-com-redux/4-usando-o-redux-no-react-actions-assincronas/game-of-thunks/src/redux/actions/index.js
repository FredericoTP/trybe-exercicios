export const REQUEST_API = 'REQUEST_API';
export const RESPONSE_API = 'RESPONSE_API';

export const requestApi = () => ({
  type: REQUEST_API,
});

export const responseApi = (data) => ({
  type: RESPONSE_API,
  payload: data,
});