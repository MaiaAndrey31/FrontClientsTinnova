import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

export const BackButton = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  
  a {
    width: 100%;
    max-width: 400px;
    text-decoration: none;
    border: none;
    border-radius: 5px;
    background-color: #00c8b3;
    padding: 10px 25px;
    color: #dddcdc;
    display: flex;
    justify-content: center;
    font-weight: 600;
    font-size: 16px;
    
    &:hover {
      opacity: 0.7;
      cursor: pointer;
      color: #ffffff;
    }
  }
`;
