import { GetCamera } from 'api/FetchCamera';
import Heading from 'components/atom/Heading/Heading';
import React, { useState, useEffect } from 'react';
import { MainTemplate } from 'templates/MainTemplate';
import styled from 'styled-components';
import { AiOutlineSync } from 'react-icons/ai';
import Paragraph from 'components/atom/Paragraph/Paragraph';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { SetEvents } from 'api/FetchEvents';
import { EventItems } from 'components/molecues/EventItems';
import styles from './Raport.css';

const WrapperTop = styled.div`
  width: 60%;
  display: flex;
  margin-left: 110px;
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
  margin-top: 70px;
`;

export const Raport = () => {
  const [camera, setCamera] = useState(null);
  const [selectedCamera, setSelectedCamera] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState(new Date(new Date().setDate(new Date().getDate() + 7)));
  const [raport, setRaport] = useState(null);

  const SetRaport = async () => {
    const start = startDate.toJSON().substr(0, 10);
    const finish = finishDate.toJSON().substr(0, 10);
    try {
      const res = await SetEvents(start, finish, selectedCamera);
      setRaport(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const SetCamera = async () => {
      try {
        const res = await GetCamera();
        setCamera(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    !camera && SetCamera();

    SetRaport();
  }, [selectedCamera, startDate, finishDate]);

  useEffect(() => {
    setInterval(() => {
      SetRaport();
      console.log('REFRESH');
    }, 120000);
  }, []);

  return (
    <MainTemplate>
      <Heading>Gdzie ostatnio widziano twoje futrzaki...</Heading>
      <WrapperTop>
        <ParagraphStyled>OD</ParagraphStyled>
        <StyledDatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        <ParagraphStyled>DO</ParagraphStyled>
        <StyledDatePicker selected={finishDate} onChange={(date) => setFinishDate(date)} />
        <ParagraphStyled>KAMERA</ParagraphStyled>
        <select value={selectedCamera} onChange={(e) => setSelectedCamera(e.target.value)}>
          <option value={0}>WSZYSTKIE</option>
          {camera && camera.map((item) => <option value={item.id_kamery}>{item.wlasna_nazwa}</option>)}
        </select>
        <ParagraphStyled>RODZAJ</ParagraphStyled>
        <select>
          <option value="w">WSZYSTKIE</option>
          <option value="k">KOT</option>
          <option value="p">PIES</option>
        </select>
        <WrapperSynchronize>
          <Paragraph style={{ fontWeight: 600 }}>SYNCHRONIZUJ</Paragraph>
          <AiOutlineSync />
        </WrapperSynchronize>
      </WrapperTop>
      {console.log(raport)}
      {/* prettier-ignore */}
      <WrapperMain>
        {raport
          && (raport.length !== 0 ? (
            raport.map((item) => (
              <EventItems dataWykrycia={item.data_wykrycia} wlasnaNazwa={item.wlasna_nazwa} zwierze={item.zwierze} />
            ))
          ) : (
            <Paragraph>BRAK ZDARZEN</Paragraph>
          ))}
      </WrapperMain>
    </MainTemplate>
  );
};
