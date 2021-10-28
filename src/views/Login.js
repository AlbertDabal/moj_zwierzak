import React from 'react';
import Heading from 'components/atom/Heading/Heading';
import { MainTemplate } from 'templates/MainTemplate';
import styled from 'styled-components';
import Input from 'components/atom/Input/Input';
import Button from 'components/atom/Button/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vh;
  background-color: white;
  width: 30%;
  margin-top: 30px;
  padding: 50px 50px;
`;

export const Login = () => (
  <MainTemplate>
    <Heading>Sprawdź gdzie są twoje futszaki ...</Heading>
    <Wrapper>
      <Input placeholder="Email" />
      <Input placeholder="Hasło" type="password" />
      <Button style={{ width: '50%', marginTop: '30px' }}>dalej</Button>
    </Wrapper>
  </MainTemplate>
);
