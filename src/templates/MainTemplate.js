import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atom/Heading/Heading';
import background from 'images/background.jpg';
import { NavigationMain } from 'components/organism/Navigation/NavigationMain';

const Title = styled.div`
  font-size: 3rem;
  font-weight: 500;
  margin-top: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(247.25deg, rgba(0, 190, 53, 0.2) 13.12%, rgba(0, 0, 0, 0) 102.02%),
    #ffffff;
  height: 100vh;
`;

const Page = styled.div`
  width: 80%;
  margin-top: 100px;
`;

export const MainTemplate = ({ children }) => (
  <Wrapper>
    <Title>
      <span>Mój</span>
      <span>Zwierzak</span>
    </Title>
    <NavigationMain />
    <Page>{children}</Page>
  </Wrapper>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};
