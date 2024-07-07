import ClientList from '../components/ClientList';
import PropTypes from 'prop-types';
import { Container, BackButton } from './Page.styled';
import { useNavigate } from 'react-router-dom';

const ListPage = ({ clients, deleteClient }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>Lista de Clientes</h1>
      <ClientList clients={clients} deleteClient={deleteClient} />
      <BackButton>
        <a onClick={() => navigate('/')}>Cadastrar Novo Cliente</a>
      </BackButton>
    </Container>
  );
};

ListPage.propTypes = {
  clients: PropTypes.array,
  deleteClient: PropTypes.func,
};

export default ListPage;