import { REQUEST_API, RESPONSE_API } from "../actions";

const INITIAL_STATE = {
  isLoading: false,
  data: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API:
      return {
        isLoading: true,
        data: '',
      }
    case RESPONSE_API:
      return {
        isLoading: false,
        data: action.payload,
      }
    default:
      return state;
  }
}

export default reducer;