import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/MainTheme';
import GlobalStyle from 'theme/GlobalStyle';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { routes } from 'routes';
import { Login } from './Login';
import { Register } from './Register';
import Wellcome from './Wellcome';

export const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path={routes.home} component={Wellcome} />
        <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.register} component={Register} />
      </Switch>
    </Router>
  </ThemeProvider>
);
