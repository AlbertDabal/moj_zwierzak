/* eslint-disable operator-linebreak */
import { GetCamera } from 'api/FetchCamera';
import Heading from 'components/atom/Heading/Heading';
import styled from 'styled-components';
import Paragraph from 'components/atom/Paragraph/Paragraph';
import React, { useState, useEffect } from 'react';
import { MainTemplate } from 'templates/MainTemplate';
import { AiTwotoneEdit, AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';
import Button from 'components/atom/Button/Button';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #dfe0eb;
`;

const StyledParagraph = styled(Paragraph)`
  width: 30%;

  padding: 10px;
`;

const WrapperEdit = styled.div`
  user-select: none;
  padding: 10px;
  display: flex;
  font-weight: 600;
  align-items: center;
  cursor: pointer;
  flex-direction: row;
  width: 7%;

  > svg {
    font-size: 20px;
    margin-left: 10px;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 30px;
  margin-left: 87%;
`;

const WrapperTop = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  border-bottom: 1px solid #dfe0eb;

  > p {
    padding: 10px;
    width: 30%;
  }
`;

export const AvaibleCamera = () => {
  const [data, setData] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    const SetCamera = async () => {
      try {
        const res = await GetCamera();
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    SetCamera();
  }, []);

  return (
    <MainTemplate>
      <Heading>Lista kamer</Heading>
      <WrapperTop>
        <Paragraph>NAZWA</Paragraph>
        <Paragraph>MODEL</Paragraph>
        <Paragraph>NUMER SERYJNY</Paragraph>
        {!isEdit ? (
          <WrapperEdit onClick={() => setIsEdit(!isEdit)}>
            <Paragraph>EDYTUJ</Paragraph>
            <AiTwotoneEdit />
          </WrapperEdit>
        ) : (
          <WrapperEdit onClick={() => setIsEdit(!isEdit)}>
            <Paragraph>ZAPISZ</Paragraph>
            <AiOutlineCheck />
          </WrapperEdit>
        )}
      </WrapperTop>

      {data &&
        data.map((item) => (
          <Wrapper>
            <StyledParagraph>{item.wlasna_nazwa}</StyledParagraph>
            <StyledParagraph>{item.model}</StyledParagraph>
            <StyledParagraph>{`NUMER SERYJNY: ${item.numer_seryjny}`}</StyledParagraph>
            {isEdit ? <AiOutlineClose style={{ cursor: 'pointer' }} /> : <div style={{ width: '16px' }}> </div>}
          </Wrapper>
        ))}

      <StyledButton>DODAJ NOWĄ</StyledButton>
    </MainTemplate>
  );
};
