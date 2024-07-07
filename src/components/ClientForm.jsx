import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FormContainer,
  Input,
  Button,
  ErrorMessage,
  Loader,
} from './ClientForm.styled';

const validateCPF = (cpf) => {
  if (!cpf) return false;
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf.length !== 11) return false;
  if (/^(\d)\1+$/.test(cpf)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let remainder = 11 - (sum % 11);
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.charAt(9))) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  remainder = 11 - (sum % 11);
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.charAt(10))) return false;

  return true;
};

const ClientForm = ({ addClient }) => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Nome é obrigatório';
    if (!cpf) newErrors.cpf = 'CPF é obrigatório';
    if (!validateCPF(cpf)) newErrors.cpf = 'CPF inválido';
    if (!phone) newErrors.phone = 'Telefone é obrigatório';
    if (!email) newErrors.email = 'Email é obrigatório';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      setTimeout(() => {
        addClient({ name, cpf, phone, email });
        setName('');
        setCpf('');
        setPhone('');
        setEmail('');
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type='text'
        placeholder='Nome completo'
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ borderColor: errors.name ? '#eb4a46' : '#efeeed' }}
      />
      {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
      <Input
        type='text'
        placeholder='CPF'
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        style={{ borderColor: errors.cpf ? '#eb4a46' : '#efeeed' }}
      />
      {errors.cpf && <ErrorMessage>{errors.cpf}</ErrorMessage>}
      <Input
        type='text'
        placeholder='Telefone'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{ borderColor: errors.phone ? '#eb4a46' : '#efeeed' }}
      />
      {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
      <Input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ borderColor: errors.email ? '#eb4a46' : '#efeeed' }}
      />
      {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      <Button
        type='submit'
        disabled={loading || !name || !cpf || !phone || !email}
      >
        {loading ? <Loader/> : 'Cadastrar'}
      </Button>
    </FormContainer>
  );
};

ClientForm.propTypes = {
  addClient: PropTypes.func,
};

export default ClientForm;
