import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from 'components/atom/Paragraph/Paragraph';
import Button from 'components/atom/Button/Button';
import { Link, useLocation } from 'react-router-dom';

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

const StyledButton = styled(Link)`
  background-color: ${({ theme, secondary }) => (secondary ? theme.secondaryColor : theme.thameColor)};
  color: ${({ secondary }) => (secondary ? 'black' : 'white')};
  border-radius: 30px;
  border: none;
  padding: 5px 18px;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.sx};
  text-transform: uppercase;
  font-weight: ${({ secondary }) => (secondary ? '400' : '600')};
  cursor: pointer;
`;

export const UserItems = ({ id, imie, nazwisko, email, login, dataAktualizacji, dataUtworzenia }) => (
  <Wrapper>
    <StyledParagraph>{imie}</StyledParagraph>
    <StyledParagraph>{nazwisko}</StyledParagraph>
    <StyledParagraph>{email}</StyledParagraph>
    <StyledParagraph>{login}</StyledParagraph>
    <StyledParagraph>{dataUtworzenia}</StyledParagraph>
    <WrapperButton>
      <StyledButton to={`/allUser/raport/${id}`}>RAPORTY</StyledButton>
      <StyledButton to={`/allUser/camera/${id}`}>KAMERY</StyledButton>
    </WrapperButton>
  </Wrapper>
);

UserItems.propTypes = {
  id: PropTypes.string.isRequired,
  imie: PropTypes.string.isRequired,
  nazwisko: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  dataAktualizacji: PropTypes.string.isRequired,
  dataUtworzenia: PropTypes.func.isRequired,
};
