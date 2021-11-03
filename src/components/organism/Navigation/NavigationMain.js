import Heading from 'components/atom/Heading/Heading';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import * as IconName from 'react-icons/io5';
import { NavigationData } from './NavigationData';
import { NavigationItem } from './NavigationItem';

const Wrapper = styled.div``;

const WrapperItem = styled.div`
  height: 100vh;
  width: 20%;
  position: absolute;
  top: 0;
  padding: 100px 0px 500px 50px;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
export const NavigationMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation().pathname;

  return (
    <Wrapper>
      <Icon>
        {!isOpen ? (
          <IconName.IoMenuOutline
            onClick={() => setIsOpen(!isOpen)}
            style={{ width: 60, height: 60 }}
          />
        ) : (
          <IconName.IoCloseOutline
            onClick={() => setIsOpen(!isOpen)}
            style={{ width: 60, height: 60 }}
          />
        )}
      </Icon>

      {isOpen && (
        <WrapperItem>
          {NavigationData.map((item) => (
            <NavigationItem title={item.title} path={item.path} location={location} />
          ))}
        </WrapperItem>
      )}
    </Wrapper>
  );
};
