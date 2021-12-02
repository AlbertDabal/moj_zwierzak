/* eslint-disable operator-linebreak */
import { AddCamera, DeleteCamera, GetCamera, GetCameraUser } from 'api/FetchCamera';
import Heading from 'components/atom/Heading/Heading';
import styled from 'styled-components';
import Paragraph from 'components/atom/Paragraph/Paragraph';
import React, { useState, useEffect } from 'react';
import { MainTemplate } from 'templates/MainTemplate';
import { AiTwotoneEdit, AiOutlineClose, AiOutlineCheck, AiOutlineMore, AiOutlineArrowLeft } from 'react-icons/ai';
import Button from 'components/atom/Button/Button';
import { CameraItems } from 'components/organism/Cameras/CameraItems';
import Input from 'components/atom/Input/Input';
import PropTypes from 'prop-types';

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

const StyledParagraphButton = styled(Paragraph)`
  background-color: ${({ theme, secondary }) => (secondary ? theme.secondaryColor : theme.thameColor)};
  color: ${({ secondary }) => (secondary ? 'black' : 'white')};
  border-radius: 30px;
  border: none;
  padding: 15px 38px;
  font-size: ${({ theme }) => theme.fontSize.sx};
  text-transform: uppercase;
  font-weight: ${({ secondary }) => (secondary ? '400' : '600')};
  cursor: pointer;
`;

const WrapperEdit = styled.div`
  margin-top: 30px;
  user-select: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledButton = styled(Button)``;

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

const StyledInput = styled(Input)`
  background-color: transparent;
  font-weight: 400;
  padding: 5px 10px;
  outline: none;
  margin: 5px 5px;
  width: 30%;

  padding: 10px;
`;

export const CamerasMain = ({ userId }) => {
  const [data, setData] = useState(null);
  const [isAddNew, setIsAddNew] = useState(false);
  const [error, setError] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const SetCamera = async () => {
      try {
        const res = await (userId ? GetCameraUser(userId) : GetCamera());
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    SetCamera();
  }, [refresh]);

  const AddNewCamera = async (e) => {
    e.preventDefault();
    console.log(e.target);
    if (!isAddNew) {
      setIsAddNew(!isAddNew);
    } else if (e.target[0].value && e.target[0].value && e.target[1].value) {
      setError(false);
      const camera = {
        nazwa: e.target[0].value,
        model: e.target[1].value,
        nrSeryjny: e.target[2].value,
      };

      try {
        const res = await AddCamera(camera.nrSeryjny, camera.model, camera.nazwa);
        console.log(res);
        setIsAddNew(!isAddNew);
        setRefresh(!refresh);
      } catch (err) {
        console.log(err);
      }

      console.log(camera);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <Heading>Lista kamer</Heading>
      <WrapperTop>
        <Paragraph>NAZWA</Paragraph>
        <Paragraph>MODEL</Paragraph>
        <Paragraph>NUMER SERYJNY</Paragraph>
      </WrapperTop>

      {data &&
        data.map((item) => (
          <CameraItems
            wlasnaNazwa={item.wlasna_nazwa}
            model={item.model}
            idKamery={item.id_kamery}
            nrSeryjny={item.numer_seryjny}
            refresh={refresh}
            setRefresh={setRefresh}
          />
        ))}
      <form onSubmit={AddNewCamera}>
        {isAddNew && (
          <div style={{ width: '97%' }}>
            <StyledInput placeholder="Nazwa" />
            <StyledInput placeholder="Model" />
            <StyledInput placeholder="Numer seryjny" />
          </div>
        )}
        {error && <Paragraph style={{ color: 'red' }}>Nie wypełniono wszystkich pól</Paragraph>}
        {!isAddNew ? (
          <WrapperEdit>
            <StyledButton type="submit">DODAJ NOWĄ</StyledButton>
          </WrapperEdit>
        ) : (
          <WrapperEdit>
            <StyledParagraphButton type="button" secondary onClick={() => setIsAddNew(!isAddNew)}>
              ANULUJ
            </StyledParagraphButton>
            <StyledButton type="submit" value="Submit">
              ZAPISZ
            </StyledButton>
          </WrapperEdit>
        )}
      </form>
    </div>
  );
};

CamerasMain.propTypes = {
  userId: PropTypes.string.isRequired,
};
