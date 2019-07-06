// @flow
import React, { useContext } from 'react';
import { useTransition, animated } from 'react-spring';
import { __RouterContext, BrowserRouter, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { LastLocationProvider } from 'react-router-last-location';
import LandingScreen from '../../screens/LandingScreen';
import PostScreen from '../../screens/PostScreen';

const Routes = () => {
  const { location } = useContext(__RouterContext);
  const validRoute = location.pathname === '/' || location.pathname === '/post';
  return (
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
  </React.Fragment>
);

export default App;
