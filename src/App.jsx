import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FormPage from './pages/FormPage';
import ListPage from './pages/ListPage'
import { GlobalStyle, Container, Navigation } from './App.styled';

const App = () => {
  const [clients, setClients] = useState([]);

  const fetchInitialData = async () => {
    try {
      const response = await fetch('https://private-9d65b3-tinnova.apiary-mock.com/users');
      const data = await response.json();
      localStorage.setItem('clients', JSON.stringify(data));
      setClients(data);
    } catch (error) {
      console.error('Erro ao buscar dados iniciais:', error);
    }
  };

  useEffect(() => {
    const savedClients = JSON.parse(localStorage.getItem('clients'));
    if (savedClients && savedClients.length > 0) {
      setClients(savedClients);
    } else {
      fetchInitialData();
    }
  }, []);

  const addClient = (client) => {
    const updatedClients = [...clients, client];
    setClients(updatedClients);
    localStorage.setItem('clients', JSON.stringify(updatedClients));
  };

  const deleteClient = (cpf) => {
    const updatedClients = clients.filter(client => client.cpf !== cpf);
    setClients(updatedClients);
    localStorage.setItem('clients', JSON.stringify(updatedClients));
  };

  return (
    <Router>
      <GlobalStyle />
      <Container>
        <Navigation>
          <Link to="/">Cadastro</Link>
          <Link to="/list">Lista de Clientes</Link>
        </Navigation>
        <Routes>
          <Route path="/" element={<FormPage addClient={addClient} />} />
          <Route path="/list" element={<ListPage clients={clients} deleteClient={deleteClient} />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
