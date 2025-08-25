import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});

it('Verifica funcionalidade da API e do botão', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  const secondJoke = {
    id: "R7UfaahVfFd",
    joke: "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
    status: 200,
  }

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(joke),
  });

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(secondJoke),
  });

  const button = screen.getByRole('button');
  userEvent.click(button);


  const renderedSecondJoke = await screen.findByText('My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.');
  expect(renderedSecondJoke).toBeInTheDocument();
  
  const joke1 = screen.queryByText('Whiteboards ... are remarkable.')
  expect(joke1).not.toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(2);
});
