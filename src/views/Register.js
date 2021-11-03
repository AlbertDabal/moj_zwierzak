import Heading from 'components/atom/Heading/Heading';
import React from 'react';
import { MainTemplate, WelcomeTemplate } from 'templates/WelcomeTemplate';
import styled from 'styled-components';
import Input from 'components/atom/Input/Input';
import Button from 'components/atom/Button/Button';
import Paragraph from 'components/atom/Paragraph/Paragraph';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vh;
  background-color: white;
  width: 30%;
  margin-top: 30px;
  padding: 50px 50px;
`;

export const Register = () => (
  <WelcomeTemplate>
    <Heading>Sprawdź gdzie są twoje futszaki ...</Heading>
    <Wrapper>
      <Input placeholder="Imie" />
      <Input placeholder="Nazwisko" />
      <Input placeholder="Email" />
      <Input placeholder="Hasło" type="password" />
      <Input placeholder="Powtórz hasło" type="password" />
      <Button style={{ width: '50%' }}>dalej</Button>
    </Wrapper>
  </WelcomeTemplate>
);
