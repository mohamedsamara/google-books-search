import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Books from './pages/Books';
import Saved from './pages/Saved';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className='application'>
      <div className='wrapper'>
        <Nav />
        <Router>
          <Switch>
            <Route exact path='/' component={Books} />
            <Route path='/saved' component={Saved} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
