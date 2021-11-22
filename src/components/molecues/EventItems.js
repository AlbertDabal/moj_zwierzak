import React from 'react';
import PropTypes from 'prop-types';
import Paragraph from 'components/atom/Paragraph/Paragraph';
import styled from 'styled-components';
import Button from 'components/atom/Button/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 30px;
  width: 20%;
  text-align: center;
`;

const StyledButton = styled(Button)`
  padding: 5px 20px;
  height: 50px;
`;

export const EventItems = ({ dataWykrycia, wlasnaNazwa, zwierze }) => (
  <Wrapper>
    <StyledParagraph>{`${dataWykrycia.substr(0, 10)} ${dataWykrycia.substr(11, 5)}`}</StyledParagraph>
    <StyledParagraph>{wlasnaNazwa}</StyledParagraph>
    <StyledParagraph>{zwierze === 'K' ? 'KOT' : 'PIES'}</StyledParagraph>
    <StyledButton>PODGLĄD ZDJĘCIA</StyledButton>
  </Wrapper>
);

EventItems.propTypes = {
  dataWykrycia: PropTypes.string.isRequired,
  wlasnaNazwa: PropTypes.string.isRequired,
  zwierze: PropTypes.string.isRequired,
};
