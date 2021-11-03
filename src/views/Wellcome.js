import Button from 'components/atom/Button/Button';
import styled from 'styled-components';
import Heading from 'components/atom/Heading/Heading';
import React from 'react';
import { MainTemplate, WelcomeTemplate } from 'templates/WelcomeTemplate';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  background-color: ${({ theme }) => theme.thameColor};
  color: ${({ secondary }) => (secondary ? 'black' : 'white')};
  border-radius: 30px;
  border: none;
  padding: 15px 38px;
  font-size: ${({ theme }) => theme.fontSize.sx};
  text-transform: uppercase;
  text-decoration: none;
  font-weight: ${({ secondary }) => (secondary ? '400' : '600')};
  cursor: pointer;
  text-align: center;
`;

const Wellcome = () => (
  <WelcomeTemplate>
    <Wrapper>
      <Heading>Sprawdź gdzie są twoje futszaki ...</Heading>
      <StyledLink to="/login" style={{ width: '250px', marginTop: 30 }}>
        dołącz już teraz
      </StyledLink>
    </Wrapper>
  </WelcomeTemplate>
);

export default Wellcome;
