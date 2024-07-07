import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 400px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #efeeed;
  border-radius: 4px;
  font-size: 16px;
  &:focus {
    border-color: #333333;
  }
`;

export const ErrorMessage = styled.span`
  color: #eb4a46;
  font-size: 12px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  display: flex;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #ffffff;
  background-color: ${({ disabled }) => (disabled ? '#f6f6f6' : '#00c8b3')};
  border: none;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? '1' : '1')};
  transition: opacity 0.3s;

  &:hover {
    opacity: ${({ disabled }) => (disabled ? '1' : '0.7')};
  }
`;

export const Loader = styled.div`
  border: 2px solid #00c8b3;
  border-top: 2px solid #f3f3f3;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: ${loadingAnimation} 4s linear infinite;
`;
