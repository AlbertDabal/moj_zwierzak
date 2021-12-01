import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from 'components/atom/Paragraph/Paragraph';
import Button from 'components/atom/Button/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #dfe0eb;
  justify-content: space-between;
`;

const StyledParagraph = styled(Paragraph)`
  width: 15%;
  padding: 20px 0px;
`;

const WrapperButton = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 15%;
`;

const StyledButton = styled(Button)`
  padding: 10px 10px;

  width: 100px;
  height: 40px;
`;

export const UserItems = ({ imie, nazwisko, email, login, dataAktualizacji, dataUtworzenia }) => (
  <Wrapper>
    <StyledParagraph>{imie}</StyledParagraph>
    <StyledParagraph>{nazwisko}</StyledParagraph>
    <StyledParagraph>{email}</StyledParagraph>
    <StyledParagraph>{login}</StyledParagraph>
    <StyledParagraph>{dataUtworzenia}</StyledParagraph>
    <WrapperButton>
      <StyledButton>RAPORTY</StyledButton>
      <StyledButton>KAMERY</StyledButton>
    </WrapperButton>
  </Wrapper>
);

UserItems.propTypes = {
  imie: PropTypes.string.isRequired,
  nazwisko: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  dataAktualizacji: PropTypes.string.isRequired,
  dataUtworzenia: PropTypes.func.isRequired,
};
