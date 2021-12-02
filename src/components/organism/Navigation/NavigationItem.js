import Heading from 'components/atom/Heading/Heading';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import Paragraph from 'components/atom/Paragraph/Paragraph';
import { routes } from 'routes';

const Wrapper = styled.div`
  cursor: pointer;
  user-select: none;
  margin-top: 30px;
`;

const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
  text-decoration: none;
  color: black;
`;

export const NavigationItem = ({ title, path, location }) => (
  <Wrapper>
    <StyledLink to={path} style={path === location ? { color: 'hsl(137, 100%, 37%) ' } : { color: 'black' }}>
      {title}
    </StyledLink>
  </Wrapper>
);

NavigationItem.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
