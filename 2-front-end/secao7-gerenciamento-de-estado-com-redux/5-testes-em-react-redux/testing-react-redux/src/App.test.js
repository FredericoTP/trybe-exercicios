import { render, screen } from '@testing-library/react';
import App from './App';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import counterReducer from './redux/reducers/counterReducer';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

const renderWithRedux = (
  component,
  { 
    initialState,
    store = createStore(combineReducers({ counterReducer }), initialState) 
  } = {},
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('verifica a aplicação', () => {
  it('Verifica se o botão incrementa corretamente o valor do estado global', () => {
    const { store } = renderWithRedux(<App />);
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(store.getState().counterReducer.count).toBe(0);

    const btnPlus1 = screen.getByRole('button', {  name: /incrementa 1/i});
    expect(btnPlus1).toBeInTheDocument();

    userEvent.click(btnPlus1);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(store.getState().counterReducer.count).toBe(1);

    const btnPlus5 = screen.getByRole('button', {  name: /incrementa 5/i});
    expect(btnPlus5).toBeInTheDocument();

    userEvent.click(btnPlus5);
    expect(screen.getByText('6')).toBeInTheDocument();
    expect(store.getState().counterReducer.count).toBe(6);
  });
  
});