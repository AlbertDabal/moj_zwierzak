import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Paragraph from 'components/atom/Paragraph/Paragraph';
import styled from 'styled-components';
import Button from 'components/atom/Button/Button';
import { GetPhoto } from 'api/FetchEvents';
import { AiOutlineClose } from 'react-icons/ai';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #dfe0eb;
`;

const Image = styled.img`
  width: 50%;
  height: 50vh;
  border-radius: 30px;
`;

const ShadowBox = styled.div`
  width: 100%;
  background: rgba(213, 213, 213, 0.8);
  height: 100vh;
  z-index: 999;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
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

const Icon = styled(AiOutlineClose)`
  cursor: pointer;
  font-size: 40px;
  position: absolute;
  top: 8px;
  right: 16px;
`;

export const EventItems = ({ dataWykrycia, wlasnaNazwa, zwierze, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState(null);

  const ShowPhoto = async () => {
    try {
      const res = await GetPhoto(id);
      setIsOpen(!isOpen);
      setUrl(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <StyledParagraph>{`${dataWykrycia.substr(0, 10)} ${dataWykrycia.substr(11, 5)}`}</StyledParagraph>
      <StyledParagraph>{wlasnaNazwa}</StyledParagraph>
      <StyledParagraph>{zwierze === 'K' ? 'KOT' : 'PIES'}</StyledParagraph>
      <StyledButton onClick={() => ShowPhoto()}>PODGLĄD ZDJĘCIA</StyledButton>
      {isOpen && (
        <ShadowBox>
          <Icon onClick={() => setIsOpen(!isOpen)} />
          <Image src={`data:image/png;base64,${url}`} />
        </ShadowBox>
      )}
    </Wrapper>
  );
};

EventItems.propTypes = {
  dataWykrycia: PropTypes.string.isRequired,
  wlasnaNazwa: PropTypes.string.isRequired,
  zwierze: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
