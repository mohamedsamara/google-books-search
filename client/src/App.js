import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Books from './pages/Books';
import Saved from './pages/Saved';
import NavMenu from './components/NavMenu';

const App = () => {
  return (
    <Router>
      <div className='application'>
        <div className='wrapper'>
          <NavMenu />
          <Switch>
            <Route exact path='/' component={Books} />
            <Route path='/saved' component={Saved} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
