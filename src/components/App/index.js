// @flow
import React, { useContext } from 'react';
import { Router, Link } from '@reach/router';
import { useTransition, animated } from 'react-spring';
import { __RouterContext, BrowserRouter, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { LastLocationProvider, useLastLocation } from 'react-router-last-location';
import { cx } from 'emotion';
import LandingScreen from '../../screens/LandingScreen';
import PostScreen from '../../screens/PostScreen';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import {
  routePreviousTransitionEnabled,
  routeTransitionDisabled,
  routeTransitionEnabled,
} from '../../styles/shared/transitions';
import RevisedLandingScreen from '../../screens/RevisedLandingScreen/RevisedLandingScreen';

const animateRoute = (location): boolean => {
  return location.pathname === '/' || location.pathname === '/post';
};

const Routes = () => {
  const lastLocation = useLastLocation();
  const stuff = useContext(__RouterContext);
  const { location } = stuff;
  // const validPreviousRoute = lastLocation && animateRoute(lastLocation);
  // const validRoute = animateRoute(location);
  const validPreviousRoute = true;
  const validRoute = true;
  return (
    <div
      className={cx({
        [routePreviousTransitionEnabled]: validPreviousRoute,
        [routeTransitionEnabled]: validRoute,
        [routeTransitionDisabled]: !validRoute,
      })}
    >
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.pathname}
          classNames={validRoute ? 'fade' : ''}
          timeout={validRoute ? 700 : 0}
        >
          <Switch location={location}>
            <Route exact path="/" component={LandingScreen} />
            <Route exact path="/post" component={PostScreen} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Route exact path="/profile" component={ProfileScreen} />
    </div>
  );
  // const transitions = useTransition(location, loc => loc.pathname, {
  //   from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
  //   enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
  //   leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  // });
  // return transitions.map(({ item, props, key }) => (
  //   <animated.div
  //     style={{ ...props, position: 'absolute', height: '100%', width: '100%' }}
  //     key={key}
  //   >
  //     <Switch location={item}>
  //       <Route exact path="/" component={LandingScreen} />
  //       <Route exact path="/post" component={PostScreen} />
  //     </Switch>
  //   </animated.div>
  // ));
};

const App = () => (
  <React.Fragment>
    <BrowserRouter>
      <LastLocationProvider>
        <Routes />
      </LastLocationProvider>
    </BrowserRouter>
    <Router>
      <RevisedLandingScreen path="/revised" />
    </Router>
  </React.Fragment>
);

export default App;
