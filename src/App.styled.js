import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #fff;
  }
`;

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Navigation = styled.nav`
  margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 450px;
  a {
    
    text-decoration: none;
    color: #00c8b3;
    &:hover {
      opacity: 0.7;
    }
  }
`;
