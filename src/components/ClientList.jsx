import PropTypes from 'prop-types';
import { Table, Button, Container } from './ClientList.styled';

const ClientList = ({ clients, deleteClient }) => {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.cpf}>
              <td>{client.name}</td>
              <td>{client.cpf}</td>
              <td>{client.phone}</td>
              <td>{client.email}</td>
              <td>
                <Button onClick={() => deleteClient(client.cpf)}>Excluir</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

ClientList.propTypes = {
  clients: PropTypes.array,
  deleteClient: PropTypes.func,
};

export default ClientList;
