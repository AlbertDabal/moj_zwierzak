import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from 'theme/MainTheme';
import GlobalStyle from 'theme/GlobalStyle';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { routes } from 'routes';
import { Login } from './Login';
// import { Register } from './Register';
import Wellcome from './Wellcome';
import Dashboard from './Dashboard';
import { Test } from './Test';
import { Raport } from './Raport';
import { Settings } from './Settings';
import { AvaibleCamera } from './AvaibleCamera';
import { AllUser } from './AllUser';

export const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path={routes.home} component={Wellcome} />
        <Route exact path={routes.login} component={Login} />
        <PrivateRoute exact path={routes.dashboard}>
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute exact path={routes.avaibleCamera}>
          <AvaibleCamera />
        </PrivateRoute>
        <PrivateRoute exact path={routes.raport}>
          <Raport />
        </PrivateRoute>
        <PrivateRoute exact path={routes.allUser}>
          <AllUser />
        </PrivateRoute>
        <PrivateRoute exact path={routes.settings}>
          <Settings />
        </PrivateRoute>
      </Switch>
    </Router>
  </ThemeProvider>
);

function PrivateRoute({ children }) {
  return (
    // prettier-ignore
    <Route render={() => (sessionStorage.getItem('isAuth') !== null ? children : <Redirect to={routes.home} />)} />
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
