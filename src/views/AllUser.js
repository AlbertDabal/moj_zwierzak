/* eslint-disable operator-linebreak */
import { GetUsers } from 'api/FetchUser';
import Heading from 'components/atom/Heading/Heading';
import { UserItems } from 'components/molecues/UserItems';
import React, { useEffect, useState } from 'react';
import { MainTemplate } from 'templates/MainTemplate';
import styled from 'styled-components';
import Paragraph from 'components/atom/Paragraph/Paragraph';
import Button from 'components/atom/Button/Button';

const WrapperMain = styled.div`
  overflow-y: scroll;
  height: 70vh;
`;

const WrapperTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #dfe0eb;
  margin-top: 40px;
`;

const StyledParagraph = styled(Paragraph)`
  width: 16%;
  padding: 10px 0px;
`;

export const AllUser = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const GetAllUsers = async () => {
      try {
        const res = await GetUsers();
        console.log(res.data);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    GetAllUsers();
  }, []);

  return (
    <MainTemplate>
      <Heading style={{ userSelect: 'none' }}>Wszyscy użytkownicy</Heading>
      <WrapperTop style={{ userSelect: 'none' }}>
        <StyledParagraph>Imie</StyledParagraph>
        <StyledParagraph>Nazwisko</StyledParagraph>
        <StyledParagraph>Email</StyledParagraph>
        <StyledParagraph>Login</StyledParagraph>

        <StyledParagraph>Data utworzenia</StyledParagraph>
        <StyledParagraph> </StyledParagraph>
      </WrapperTop>

      <WrapperMain style={{ userSelect: 'none' }}>
        {data &&
          data.map((item) => (
            <UserItems
              imie={item.imie}
              nazwisko={item.nazwisko}
              email={item.email}
              login={item.login}
              dataAktualizacji={item.data_ostatniej_aktualizacji}
              dataUtworzenia={item.data_utworzenia}
              id={item.id_uzytkownika}
            />
          ))}
      </WrapperMain>
    </MainTemplate>
  );
};
