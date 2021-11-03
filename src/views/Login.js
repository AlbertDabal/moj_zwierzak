import React from 'react';
import Heading from 'components/atom/Heading/Heading';
import { MainTemplate, WelcomeTemplate } from 'templates/WelcomeTemplate';
import styled from 'styled-components';
import Input from 'components/atom/Input/Input';
import Button from 'components/atom/Button/Button';
import { useHistory, Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vh;
  background-color: white;
  width: 30%;
  margin-top: 30px;
  padding: 50px 50px;
`;

export const Login = () => {
  const history = useHistory();

  const Zaloguj = () => {
    history.push('/dashboard');
  };

  return (
    <WelcomeTemplate>
      <Heading>Sprawdź gdzie są twoje futszaki ...</Heading>
      <Wrapper>
        <form onSubmit={Zaloguj}>
          <Input placeholder="Email" />
          <Input placeholder="Hasło" type="password" />
          <Button type="submit" style={{ width: '50%', marginTop: '30px' }}>
            dalej
          </Button>
        </form>
      </Wrapper>
    </WelcomeTemplate>
  );
};
