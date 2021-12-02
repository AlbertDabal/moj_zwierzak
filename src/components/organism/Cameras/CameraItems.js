import Paragraph from 'components/atom/Paragraph/Paragraph';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atom/Input/Input';
import { AiTwotoneEdit, AiOutlineClose, AiOutlineCheck, AiOutlineMore, AiOutlineArrowLeft } from 'react-icons/ai';
import { DeleteCamera, EditCamera, EditCameraUsers } from 'api/FetchCamera';

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

const StyledButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

const WrapperEdit = styled.div`
  user-select: none;
  padding: 10px;
  display: flex;
  font-weight: 600;
  cursor: pointer;
  flex-direction: row;
  width: 10%;
  justify-content: space-between;
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

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const CameraItems = ({ wlasnaNazwa, model, nrSeryjny, idKamery, refresh, setRefresh, userId }) => {
  const [isEdit, setIsEdit] = useState(false);

  const Delete = async () => {
    try {
      console.log(idKamery);
      const res = await DeleteCamera(idKamery);
      console.log(res);
      setIsEdit(!isEdit);
      setRefresh(!refresh);
    } catch (err) {
      console.log(err);
    }
  };

  const Edit = async (e) => {
    e.preventDefault();

    const camera = {
      nazwa: e.target[0].value,
      model: e.target[1].value,
      nrSeryjny: e.target[2].value,
    };
    try {
      const res = await (userId
        ? EditCameraUsers(userId, idKamery, camera.nrSeryjny, camera.model, camera.nazwa)
        : EditCamera(idKamery, camera.nrSeryjny, camera.model, camera.nazwa));
      console.log(res);
      setIsEdit(!isEdit);
      setRefresh(!refresh);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={Edit}>
        {isEdit ? (
          <>
            <StyledInput defaultValue={wlasnaNazwa} />
            <StyledInput defaultValue={model} />
            <StyledInput defaultValue={nrSeryjny} />
          </>
        ) : (
          <>
            <StyledParagraph>{wlasnaNazwa}</StyledParagraph>
            <StyledParagraph>{model}</StyledParagraph>
            <StyledParagraph>{nrSeryjny}</StyledParagraph>
          </>
        )}
        {isEdit ? (
          <WrapperEdit>
            <AiOutlineArrowLeft onClick={() => setIsEdit(!isEdit)} style={{ cursor: 'pointer', fontSize: 20 }} />
            <AiOutlineClose onClick={() => Delete()} style={{ cursor: 'pointer', fontSize: 20 }} />
            <StyledButton type="submit">
              <AiOutlineCheck type="submit" style={{ cursor: 'pointer', fontSize: 20 }} />
            </StyledButton>
          </WrapperEdit>
        ) : (
          <AiOutlineMore
            onClick={() => setIsEdit(!isEdit)}
            style={{ cursor: 'pointer', fontSize: 26, marginLeft: '4%' }}
          />
        )}
      </StyledForm>
    </Wrapper>
  );
};

CameraItems.propTypes = {
  model: PropTypes.string.isRequired,
  wlasnaNazwa: PropTypes.string.isRequired,
  nrSeryjny: PropTypes.string.isRequired,
  idKamery: PropTypes.string.isRequired,
  refresh: PropTypes.string.isRequired,
  setRefresh: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};
