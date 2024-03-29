import { GetCamera, GetCameraUser } from 'api/FetchCamera';
import PropTypes from 'prop-types';
import Heading from 'components/atom/Heading/Heading';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineSync } from 'react-icons/ai';
import Paragraph from 'components/atom/Paragraph/Paragraph';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { SetEvents, SetEventsUser } from 'api/FetchEvents';
import styles from './Raport.css';
import { RaportItems } from './RaportItems';

const WrapperTop = styled.div`
  width: 80%;
  padding: 10px 100px;
  display: flex;
  margin-top: 60px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const WrapperSynchronize = styled.div`
  cursor: pointer;
  margin-left: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  > svg {
    font-size: 20px;
    margin-left: 10px;
  }
`;

const StyledDatePicker = styled(DatePicker)`
  font-size: 20px;
  width: 120px;
`;

const ParagraphStyled = styled(Paragraph)`
  &:nth-child(1) {
    margin-left: 0px;
  }

  font-weight: 600;
  margin-left: 30px;
  margin-right: 30px;
`;

const WrapperMain = styled.div`
  margin-top: 0px;
  overflow-y: auto;
  height: 65vh;
`;

export const RaportsMain = ({ userId }) => {
  const [startDate, setStartDate] = useState(new Date(new Date().setDate(new Date().getDate() - 6)));
  const [finishDate, setFinishDate] = useState(new Date(new Date().setDate(new Date().getDate() + 1)));
  const [camera, setCamera] = useState(null);
  const [selectedCamera, setSelectedCamera] = useState(null);
  const [selectedAnimals, setSelectedAnimals] = useState(null);

  const [raport, setRaport] = useState(null);

  useEffect(() => {
    const SetCamera = async () => {
      try {
        const res = await (userId ? GetCameraUser(userId) : GetCamera());
        setCamera(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    SetCamera();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      SetRaport();
    }, 120000);
    return () => {
      clearInterval(interval);
    };
  }, [startDate, finishDate, selectedCamera, selectedAnimals]);

  const SetRaport = async () => {
    const start = startDate.toJSON().substr(0, 10);
    const finish = finishDate.toJSON().substr(0, 10);
    try {
      const res = await (userId
        ? SetEventsUser(userId, start, finish, selectedCamera, selectedAnimals)
        : SetEvents(start, finish, selectedCamera, selectedAnimals));
      setRaport(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    SetRaport();
  }, [selectedCamera, selectedAnimals, startDate, finishDate]);

  return (
    <div>
      <Heading>Gdzie ostatnio widziano twoje futrzaki...</Heading>
      <WrapperTop>
        <ParagraphStyled>OD</ParagraphStyled>
        <StyledDatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        <ParagraphStyled>DO</ParagraphStyled>
        <StyledDatePicker selected={finishDate} onChange={(date) => setFinishDate(date)} />
        <ParagraphStyled>KAMERA</ParagraphStyled>
        <select value={selectedCamera} onChange={(e) => setSelectedCamera(e.target.value)}>
          <option value={null}>WSZYSTKIE</option>
          {camera && camera.map((item) => <option value={item.id_kamery}>{item.wlasna_nazwa}</option>)}
        </select>
        <ParagraphStyled>OBIEKT</ParagraphStyled>
        <select value={selectedAnimals} onChange={(e) => setSelectedAnimals(e.target.value)}>
          <option value={null}>WSZYSTKIE</option>
          <option value="K">KOT</option>
          <option value="P">PIES</option>
        </select>
        <WrapperSynchronize>
          <Paragraph onClick={() => SetRaport()} style={{ fontWeight: 600 }}>
            SYNCHRONIZUJ
          </Paragraph>
          <AiOutlineSync />
        </WrapperSynchronize>
      </WrapperTop>

      <WrapperMain>
        {raport && raport.length !== 0 ? (
          raport.map((item) => (
            <RaportItems
              dataWykrycia={item.data_wykrycia}
              wlasnaNazwa={item.wlasna_nazwa}
              zwierze={item.zwierze}
              id={item.id_zdarzenia}
            />
          ))
        ) : (
          <Paragraph>BRAK ZDARZEN</Paragraph>
        )}
      </WrapperMain>
    </div>
  );
};

RaportsMain.propTypes = {
  userId: PropTypes.string.isRequired,
};
