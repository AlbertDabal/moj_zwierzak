import styled from 'styled-components';
// prettier-ignore

const Button = styled.button`
  background-color: ${({ theme, secondary }) => (secondary ? theme.secondaryColor : theme.thameColor)};
  color: ${({ secondary }) => (secondary ? 'black' : 'white')};
  border-radius: 30px;
  border: none;
  padding: 15px 38px;
  font-size: ${({ theme }) => theme.fontSize.sx};
  text-transform: uppercase;
  font-weight: ${({ secondary }) => (secondary ? '400' : '600')};
  cursor: pointer;
`;

export default Button;
