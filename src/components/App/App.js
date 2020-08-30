import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../container/Home';
import Movie from '../Movie/Movie';
import NotFound from '../NotFound/NotFound';
import GlobalStyle from '../../GlobalStyle'
const App = () => {
  return (
    <Router>
      <React.Fragment>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/:movieId' component={Movie} exact />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    </Router>
  );
};

export default App;
