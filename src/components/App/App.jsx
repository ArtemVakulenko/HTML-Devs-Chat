import React from 'react';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../Header';
import { useTheme } from '../hooks';
import LoginPage from '../LoginPage';
import RegPage from '../RegPage';
import MainPage from '../MainPage';
import { StGlobalStyle } from './styled';

const App = () => {
  const { colors, theme } = useTheme();
  const { i18n } = useTranslation();
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/registration" component={RegPage} />
          <Route exact path="/main/:id?" component={MainPage} />
        </Switch>
      </Router>
      <StGlobalStyle
        lang={i18n.language}
        theme={theme}
        colors={colors}
      />
      <NotificationContainer />
    </>
  );
};

export default App;
