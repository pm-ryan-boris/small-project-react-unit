import styled from 'styled-components/macro';

const Styles = styled.div`
  form {
    display: flex;
    flex-direction: row nowrap;
    justify-content: center;
    margin: 20px 0;
    width: 100vw;
    height: 100vh;
  }

  input[type='text'] {
    width: 35%;
    height: 3.1%;
    margin: 20px;
    text-align: center;
    border: 1px solid RGBA(37, 42, 52, 0.5);
    font-size: 0.8rem;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 2px;
    font-weight: 100;
    color: black;
  }

  ol {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100vh;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2rem;
    list-style-type: none;
  }
`;

export default Styles;
