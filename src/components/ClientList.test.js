import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ClientList from './ClientList';

test('deletes a client', () => {
  const clients = [
    { name: 'Teste', cpf: '12345678900', phone: '11987654321', email: 'teste@teste.com' }
  ];
  const deleteClient = jest.fn();
  const { getByText } = render(<ClientList clients={clients} deleteClient={deleteClient} />);
  
  fireEvent.click(getByText(/Excluir/i));
  
  expect(deleteClient).toHaveBeenCalledWith('12345678900');
});
