import Heading from 'components/atom/Heading/Heading';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation, useHistory } from 'react-router-dom';
import * as IconName from 'react-icons/io5';
import Paragraph from 'components/atom/Paragraph/Paragraph';
import { NavigationData } from './NavigationData';
import { NavigationItem } from './NavigationItem';

const Wrapper = styled.div``;

const WrapperItem = styled.div`
  height: 100vh;
  z-index: 999;
  width: 20%;
  position: absolute;
  top: 0;
  padding: 150px 0px 50px 50px;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
`;

const Icon = styled.div`
  position: absolute;
  left: 0;
  padding: 30px 30px;
  top: 0;
  z-index: 999;

  > svg {
    cursor: pointer;
  }
`;

const WrapperMenu = styled.div``;
export const NavigationMain = () => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation().pathname;

  const Logout = () => {
    sessionStorage.clear();
    history.push('/');
  };

  return (
    <Wrapper>
      <Icon>
        {!isOpen ? (
          <IconName.IoMenuOutline onClick={() => setIsOpen(!isOpen)} style={{ width: 60, height: 60 }} />
        ) : (
          <IconName.IoCloseOutline onClick={() => setIsOpen(!isOpen)} style={{ width: 60, height: 60 }} />
        )}
      </Icon>

      {isOpen && (
        <WrapperItem>
          <WrapperMenu>
            {NavigationData.map((item) => (
              <NavigationItem title={item.title} path={item.path} location={location} />
            ))}
          </WrapperMenu>
          <Heading style={{ cursor: 'pointer' }} onClick={() => Logout()}>
            Wyloguj
          </Heading>
        </WrapperItem>
      )}
    </Wrapper>
  );
};
