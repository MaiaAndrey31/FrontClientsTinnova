import React from 'react';
import ClientForm from '../components/ClientForm';
import PropTypes from 'prop-types';
import { Container, BackButton } from './Page.styled';
import { useNavigate } from 'react-router-dom';

const FormPage = ({ addClient }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>Cadastro de Cliente</h1>
      <ClientForm addClient={addClient} />
      <BackButton>
        <a onClick={() => navigate('/list')}>Ver Lista de Clientes</a>
      </BackButton>
    </Container>
  );
};

FormPage.propTypes = {
  addClient: PropTypes.func,
};

export default FormPage;

