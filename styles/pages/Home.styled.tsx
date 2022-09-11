import styled from '@emotion/styled'

export const ContactListSection = styled.section`
  color: #000;

  ul {
    margin: 0;
    padding: 0px 30px 10px;
    width: 100%;

    .not-found {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.3s;
      height: 70vh;
      p {
        font-size: 20px;
        color: #777;
      }
    }
  }

  li {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.3s;
    border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
    margin: 25px auto;
  }

  a {
    text-decoraction: inherit;
    color: inherit;
  }
`
export const InfoSection = styled.div`
  display: block;
  h3 {
    background: -webkit-linear-gradient(
      90deg,
      hsla(197, 100%, 63%, 1) 0%,
      hsla(294, 100%, 55%, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const ButtonGroup = styled.span`
  display: flex;
  width: auto;
  justify-content: space-between;
  gap: 14px;

  svg {
    font-size: 25px;
    cursor: pointer;
    color: #777;
  }

  svg:hover {
    transform: scale(1.1);
  }
`

export const Form = styled.form``

export const Input = styled.input`
  font-size: 1.2em;
  padding: 0.3em 1em;
  border-radius: 10px;
  border: 1px solid white;
  outline: none;
  width: 260px;
`

export const AddContactButton = styled.span`
  font-size: 30px;
  cursor: pointer;
`
