import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './components/ValidEmail'

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso não seja inserido email', () => {
  const EMAIL_USER = '';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.queryByText('Email Válido');
  const isInvalid = screen.queryByText('Email Inválido');
  expect(isValid).not.toBeInTheDocument();
  expect(isInvalid).not.toBeInTheDocument();
});

test('Verifica se o texto tem a cor vermelha caso o email seja inválido', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toHaveAttribute('style', 'color: red;');
});

test('Verifica se o texto tem a cor verde caso o email seja válido', () => {
  const EMAIL_USER = 'test@test.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toHaveAttribute('style', 'color: green;');
});
