import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sx};
  font-weight: ${({ theme, bold }) => (bold ? '600' : '400')};
`;

export default Paragraph;
