import styled from 'styled-components';

export const Wrapper = styled.div`
margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  border: 10px solid pink;
  border-radius: 50px;
  height: 100%;
  button {
    border-radius: 0 0 20px 20px;
  }

  img {
width: 100px;
margin: 10px;

  }
  text-align: center;
  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
  }
`;