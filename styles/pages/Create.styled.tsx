import styled from '@emotion/styled'
import { FiChevronLeft, FiXSquare, FiPlusCircle } from 'react-icons/fi'

export const BackButton = styled(FiChevronLeft)`
  font-size: 40px;
  color: #fff;
`

export const DeleteButton = styled(FiXSquare)`
  font-size: 35px;
  color: #777;
`

export const AddButton = styled(FiPlusCircle)`
  font-size: 35px;
  color: #777;
`

export const ContactForm = styled.section`
  .input-container {
    display: flex;
    align-item: center;
    justify-content: center;
    margin: 15px auto;
    max-width: 300px;

    & > input {
      border-radius: 10px;
      width: 300px;
      padding: 10px 15px;
      border: double 2px transparent;
      background-image: linear-gradient(white, white),
        linear-gradient(
          90deg,
          hsla(197, 100%, 63%, 1) 0%,
          hsla(294, 100%, 55%, 1) 100%
        );
      background-origin: border-box;
      background-clip: padding-box, border-box;
    }

    & > input:focus {
      outline: none;
      box-shadow: 5px 5px 5px #cf77f3, 0px 5px 5px #009bff, 0px 5px 10px #2ac9db;
      background-image: linear-gradient(white, white),
        linear-gradient(
          90deg,
          hsla(197, 100%, 63%, 1) 0%,
          hsla(294, 100%, 55%, 1) 100%
        );
    }
  }

  .phoneInput-container {
    display: flex;
    align-item: center;
    justify-content: space-between;
    margin: 15px auto;
    width: 300px;

    & > input {
      border-radius: 10px;
      width: 210px;
      padding: 10px 15px;
      border: double 2px transparent;
      background-image: linear-gradient(white, white),
        linear-gradient(
          90deg,
          hsla(197, 100%, 63%, 1) 0%,
          hsla(294, 100%, 55%, 1) 100%
        );
      background-origin: border-box;
      background-clip: padding-box, border-box;
    }

    & > input:focus {
      outline: none;
      box-shadow: 5px 5px 5px #cf77f3, 0px 5px 5px #009bff, 0px 5px 10px #2ac9db;
      background-image: linear-gradient(white, white),
        linear-gradient(
          90deg,
          hsla(197, 100%, 63%, 1) 0%,
          hsla(294, 100%, 55%, 1) 100%
        );
    }

    & > .phoneButton-group {
      display: flex;
      align-item: center;
      justify-content: space-evenly;
      gap: 5px;
      width: 80px;
      padding-top: 11px;
    }
  }

  .phoneInput-container-full {
    display: flex;
    align-item: center;
    justify-content: space-between;
    margin: 15px auto;
    width: 300px;

    & > input {
      border-radius: 10px;
      width: 100%;
      padding: 10px 15px;
    }
  }

  form {
    margin: 1rem;
    display: flex;
    align-item: center;
    justify-content: start;
    flex-direction: column;
    font-size: 20px;
    height: 100vh;
  }
  .button-group {
    margin-top: 30px;
    display: flex;
    align-item: center;
    justify-content: center;
    gap: 15px;

    button {
      border-radius: 10px;
      cursor: pointer;
      padding: 5px 10px;
      width: 120px;
      border: none;
      color: #fff;
      background: linear-gradient(
        90deg,
        hsla(197, 100%, 63%, 1) 0%,
        hsla(294, 100%, 55%, 1) 100%
      );
    }
  }
  .submit-button {
    cursor: pointer;
    padding: 10px 50px;
    margin: 50px auto 15px;
    border-radius: 10px;
    border: none;
    color: #fff;
    background: linear-gradient(
      90deg,
      hsla(197, 100%, 63%, 1) 0%,
      hsla(294, 100%, 55%, 1) 100%
    );
  }

  button: hover {
    transform: scale(0.98);
  }

  .error {
    color: red;
    font-size: 12px;
    margin: 10px auto;
  }
`
