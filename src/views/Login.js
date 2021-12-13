import React, { useState } from 'react';
import Heading from 'components/atom/Heading/Heading';
import Paragraph from 'components/atom/Paragraph/Paragraph';
import { MainTemplate, WelcomeTemplate } from 'templates/WelcomeTemplate';
import styled from 'styled-components';
import Input from 'components/atom/Input/Input';
import Button from 'components/atom/Button/Button';
import { useHistory, Link } from 'react-router-dom';
import SwitchSelector from 'react-switch-selector';
import { CheckAdmin, Register, SetLogin } from 'api/FetchUser';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 74vh;
  background-color: white;
  width: 30%;
  margin-left: 27%;
  margin-top: 30px;
  padding: 50px 50px;
`;

const SwitchWrapper = styled.div`
  height: 50px;
`;

const MainWrapper = styled.div`
  background-color: red;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Login = () => {
  const [typeForm, setTypeForm] = useState('login');
  const [error, setError] = useState(null);

  const options = [
    {
      label: 'ZALOGUJ',
      value: 'login',
      selectedBackgroundColor: 'hsl(137, 100%, 37%)',
    },
    {
      label: 'ZAREJESTRUJ',
      value: 'register',
      selectedBackgroundColor: 'hsl(137, 100%, 37%)',
    },
  ];

  const onChange = (newValue) => {
    setTypeForm(newValue);
    console.log(newValue);
  };

  const history = useHistory();

  const Zaloguj = async (e) => {
    e.preventDefault();

    if (typeForm === 'register') {
      console.log(e.target[1].value);

      const user = {
        login: e.target[0].value,
        imie: e.target[1].value,
        nazwisko: e.target[2].value,
        email: e.target[3].value,
        haslo: e.target[4].value,
      };

      console.log(user);
      if (user.login && user.imie && user.nazwisko && user.email && user.haslo) {
        if (e.target[4].value === e.target[5].value) {
          // find camel lather and number
          if (e.target[4].value.match(/\w*[A-Z]\w*[0-9]|\w*[0-9]\w*[A-Z]/g)) {
            try {
              const res = await Register(user.login, user.imie, user.nazwisko, user.email, user.haslo);
              e.target.reset();
              setError(null);
              setTypeForm('login');
              window.location.reload(false);
            } catch (err) {
              console.log(err);
            }
          } else {
            setError('Hasło nie zawiera dużych znaków i cyfr');
          }
        } else {
          setError('Hasla nie są identyczne');
        }
      } else {
        setError('Nie wypełniono wszystkich pól');
      }
    } else {
      const user = {
        login: e.target[0].value,
        haslo: e.target[1].value,
      };

      console.log(user);

      try {
        const res = await SetLogin(user.login, user.haslo);
        e.target.reset();
        CheckUser();
      } catch (err) {
        setError(err.response.data.error_description);
      }
    }
  };

  const CheckUser = async () => {
    try {
      const response = await CheckAdmin();
      console.log(response.data);
      history.push('/dashboard');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <WelcomeTemplate>
      <Wrapper>
        <SwitchWrapper>
          <SwitchSelector
            onChange={(newValue) => {
              setTypeForm(newValue);
              setError(null);
            }}
            options={options}
            initialSelectedIndex="login"
            optionBorderRadius="25"
            wrapperBorderRadius="25"
          />
        </SwitchWrapper>
        <form onSubmit={Zaloguj}>
          {typeForm === 'register' ? (
            <>
              <Input placeholder="Login" />
              <Input placeholder="Imie" />
              <Input placeholder="Nazwisko" />
              <Input placeholder="Email" />
              <Input placeholder="Hasło" type="password" />
              <Input placeholder="Powtórz hasło" type="password" />
              <Paragraph style={{ fontSize: '11px' }}>
                *Hasło powinno zawierać przynajmniej jedną dużą literę i cyfrę
              </Paragraph>
            </>
          ) : (
            <>
              <Input placeholder="Login" />
              <Input placeholder="Hasło" type="password" />
            </>
          )}

          <Paragraph style={{ color: 'red' }}>{error}</Paragraph>

          <Button type="submit" style={{ width: '50%', marginTop: '30px' }}>
            dalej
          </Button>
        </form>
      </Wrapper>
    </WelcomeTemplate>
  );
};
