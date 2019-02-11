import styled from 'styled-components/macro';

const Styles = styled.div`
  width: 100vw;
  form {
    display: flex;
    flex-direction: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    margin: 20px 0;
    width: 100vw;
    height: 150px;
  }

  input[type='text'] {
    width: 55%;
    height: 20%;
    text-align: center;
    margin: 0 0 0 5%;
    border: 1px solid RGBA(37, 42, 52, 0.5);
    font-size: 0.8rem;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 2px;
    font-weight: 100;
    color: black;
  }
`;

export default Styles;
