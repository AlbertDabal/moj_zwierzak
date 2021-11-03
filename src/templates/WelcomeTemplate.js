import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atom/Heading/Heading';
import background from 'images/background.jpg';

const Title = styled.div`
  font-size: 3rem;
  font-weight: 500;
  margin-top: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: blue;
  height: 100vh;
  background-image: url(${background});
`;

const Page = styled.div`
  width: 80%;
  margin-top: 100px;
`;

export const WelcomeTemplate = ({ children }) => (
  <Wrapper>
    <Title>
      <span>Mój</span>
      <span>Zwierzak</span>
    </Title>
    <Page>{children}</Page>
  </Wrapper>
);

WelcomeTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};
