// @flow
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CleanLandingScreen from '../../screens/CleanLandingScreen/CleanLandingScreen';
import CleanPostLayout from '../CleanPostLayout/CleanPostLayout';
import CleanPostScreen from '../../screens/CleanPostScreen/CleanPostScreen';
import CleanPublishScreen from '../../screens/CleanPublishScreen/CleanPublishScreen';

const App = () => (
  <Router>
    <CleanPostLayout>
      <Route exact path="/" component={CleanLandingScreen} />
      <Route exact path="/post/:id" component={CleanPostScreen} />
      <Route exact path="/post" component={CleanPublishScreen} />
    </CleanPostLayout>
  </Router>
);

export default App;
