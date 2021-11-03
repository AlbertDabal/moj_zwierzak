import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/MainTheme';
import GlobalStyle from 'theme/GlobalStyle';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { routes } from 'routes';
import { Login } from './Login';
import { Register } from './Register';
import Wellcome from './Wellcome';
import Dashboard from './Dashboard';
import { Test } from './Test';
import { Raport } from './Raport';
import { Settings } from './Settings';

export const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path={routes.home} component={Test} />
        {/* <Route exact path={routes.home} component={Wellcome} /> */}
        <Route exact path={routes.raport} component={Raport} />
        <Route exact path={routes.settings} component={Settings} />
        <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.register} component={Register} />
        <Route exact path={routes.dashboard} component={Dashboard} />
      </Switch>
    </Router>
  </ThemeProvider>
);
