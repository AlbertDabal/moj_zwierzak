import styled from 'styled-components';

const Input = styled.input`
  font-size: ${({ theme }) => theme.fontSize.sx};
  border: none;
  border-bottom: 2px solid gray;
  padding: 5px 10px;
  outline: none;
  font-weight: 600;
  margin: 20px 0px;
  width: 80%;
`;

export default Input;
