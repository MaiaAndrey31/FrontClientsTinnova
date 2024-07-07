import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  background-color: #eb4a46;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
