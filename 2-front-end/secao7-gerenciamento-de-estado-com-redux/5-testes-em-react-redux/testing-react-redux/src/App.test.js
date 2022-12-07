import { render, screen } from '@testing-library/react';
import App from './App';
import { legacy_createStore as createStore } from 'redux';
import counterReducer from './redux/reducers/counterReducer';
import { Provider } from 'react-redux';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(counterReducer, initialState)
  } = {},
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};
