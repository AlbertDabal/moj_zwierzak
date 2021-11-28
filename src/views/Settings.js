import { EditUserInfo, EditUserPassword, GetUser } from 'api/FetchUser';
import styled from 'styled-components';
import Paragraph from 'components/atom/Paragraph/Paragraph';
import React, { useEffect, useState } from 'react';
import { MainTemplate } from 'templates/MainTemplate';
import Button from 'components/atom/Button/Button';
import Input from 'components/atom/Input/Input';

const StyledWrapper = styled.div``;

const StyledForm = styled.form`
  width: 30%;
`;

const StyledInput = styled(Input)`
  width: 70%;
  background-color: transparent;
  font-weight: 400;
  padding: 5px 10px;
  outline: none;
  margin: 5px 5px;
`;

const WrapperButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 65%;
`;

const StyledParagraph = styled(Paragraph)`
  padding: 5px 10px;
  margin: 5px 5px;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-left: 100px;

  height: 70vh;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
`;

export const Settings = () => {
  const [data, setData] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [isChangePassword, setIsChangePassword] = useState(false);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const SetUser = async () => {
      try {
        const res = await GetUser();
        console.log(res);
        setData({
          login: res.data.login,
          imie: res.data.imie,
          nazwisko: res.data.nazwisko,
          email: res.data.email,
        });
      } catch (err) {
        console.log(err);
      }
    };

    SetUser();
  }, [refresh]);

  const SaveUserInfo = async (e) => {
    e.preventDefault();

    const user = {
      login: e.target[0].value,
      imie: e.target[1].value,
      nazwisko: e.target[2].value,
      email: e.target[3].value,
    };

    try {
      const res = await EditUserInfo(user.login, user.imie, user.nazwisko, user.email);
      setRefresh(!refresh);
      setIsEdit(!isEdit);

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const ChangePassword = async (e) => {
    e.preventDefault();
    const password = e.target[0].value;
    const passwordRepeat = e.target[1].value;

    if (password === passwordRepeat) {
      try {
        const res = await EditUserPassword(data.login, data.imie, data.nazwisko, data.email, password);
        console.log(res);
        setRefresh(!refresh);
        setIsChangePassword(!isChangePassword);
      } catch (err) {
        console.log(err);
      }
    } else {
      setError('Hasla nie są identyczne');
    }
  };

  return (
    <MainTemplate>
      <MainWrapper>
        {data && (
          <StyledForm onSubmit={SaveUserInfo}>
            {Object.keys(data).map((keyName, i) => (
              <StyledWrapper>
                <StyledParagraph bold>{keyName.toUpperCase()}</StyledParagraph>
                {!isEdit ? (
                  <StyledParagraph>{data[keyName]}</StyledParagraph>
                ) : (
                  <StyledInput defaultValue={data[keyName]} />
                )}
              </StyledWrapper>
            ))}
            {!isEdit ? (
              <StyledButton style={{ width: '80%' }} onClick={() => setIsEdit(!isEdit)}>
                EDYTUJ DANE LOGOWANIA
              </StyledButton>
            ) : (
              <WrapperButton>
                <StyledButton style={{ backgroundColor: 'grey' }} onClick={() => setIsEdit(!isEdit)}>
                  ANULUJ
                </StyledButton>
                <StyledButton type="submit">ZAPISZ</StyledButton>
              </WrapperButton>
            )}
          </StyledForm>
        )}
        {data && (
          <StyledForm onSubmit={ChangePassword}>
            {!isChangePassword ? (
              <StyledWrapper>
                <StyledParagraph bold>HASLO</StyledParagraph>
                <StyledParagraph>•••••••••••••••••••••</StyledParagraph>
                <StyledButton style={{ width: '60%' }} onClick={() => setIsChangePassword(!isChangePassword)}>
                  ZMIEN HASŁO
                </StyledButton>
              </StyledWrapper>
            ) : (
              <StyledWrapper>
                <StyledParagraph bold>PODAJ NOWE HASŁO</StyledParagraph>
                <StyledInput type="password" />
                <StyledParagraph bold>PODAJ PONOWNIE NOWE HASŁO</StyledParagraph>
                <StyledInput type="password" />
                <StyledParagraph style={{ color: 'red' }}>{error}</StyledParagraph>
                <WrapperButton>
                  <StyledButton
                    style={{ backgroundColor: 'grey' }}
                    onClick={() => setIsChangePassword(!isChangePassword)}
                  >
                    ANULUJ
                  </StyledButton>
                  <StyledButton type="submit">ZAPISZ</StyledButton>
                </WrapperButton>
              </StyledWrapper>
            )}
          </StyledForm>
        )}
      </MainWrapper>
    </MainTemplate>
  );
};
