import React,{Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Categories from './components/Categories/Categories';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

const Routes = (props) =>(
  <Fragment>
    { props.isLoggedIn 
      ? <Layout>
          <Router>
            <Switch>
              <Route path='/Music/:id' component={Categories} />
              <Route path='/Business/:id' component={Categories} />
              <Route path='/Health_&_Fitness/:id' component={Categories} />
            </Switch>
          </Router>
        </Layout>
      : <Router>
          <Switch>
            <Route path='/Signup' component={Signup} />
            <Route path='/' component={Login} />
          </Switch>
        </Router>
    }
  </Fragment>
);

export default Routes;