import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Categories from './components/Categories/Categories';

const Routes = () =>(
  <Router>
    <Switch>
      <Route path='/Music/:id' component={Categories} />
      <Route path='/Business/:id' component={Categories} />
      <Route path='/Health_&_Fitness/:id' component={Categories} />
    </Switch>
  </Router>
);

export default Routes;