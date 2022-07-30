import styled from 'styled-components';

export const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #131324;
  gap: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  
  img {
    height: 5rem;
  }
  
  form {
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem 3rem;
    gap: 1rem;
    width: 400px;
    background-color: #00000076;
    border-radius: 15px;
    color: white;
    .brand {
      display: flex;
    }
    input {
      background: transparent;
      padding: 1rem;
      border-radius: 0.4rem;
      border: 1px solid #4e0eff;
      color: white;
      width: 100%;
    }
    
    h1 {
      color: white;
      margin: auto;
      padding-left: 8px;
    }
    
    button {
      border-radius: 15px;
      width: 100%;
      padding: 1rem 2rem;
      background-color: #997af0;
      border: none;
      color: white;
      font-weight: bold;
      font-size: 1rem;
      cursor: pointer;
      transition: 0.5s ease-in-out;
      &:hover{
        background-color: #4e0eff;
      }
    }
    
    span{
      color: white;
      font-size: 14px;
      text-transform: uppercase;
      a {
        color: #4e0eff;
        text-transform: none;
        font-weight: bold;
      }
    }
  }
  
`;