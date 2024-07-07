import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ClientForm from './ClientForm';

test('submits the form with valid data', () => {
  const addClient = jest.fn();
  const { getByPlaceholderText, getByText } = render(<ClientForm addClient={addClient} />);
  
  fireEvent.change(getByPlaceholderText(/Nome completo/i), { target: { value: 'Teste' } });
  fireEvent.change(getByPlaceholderText(/CPF/i), { target: { value: '12345678900' } });
  fireEvent.change(getByPlaceholderText(/Telefone/i), { target: { value: '11987654321' } });
  fireEvent.change(getByPlaceholderText(/Email/i), { target: { value: 'teste@teste.com' } });
  
  fireEvent.click(getByText(/Cadastrar/i));
  
  expect(addClient).toHaveBeenCalled();
});

