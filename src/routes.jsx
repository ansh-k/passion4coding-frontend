import React,{Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Categories from './components/Categories/Categories';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';

const PrivateRoute = ({component: Component, isLoggedIn, ...rest}) => (
  <Route
    {...rest}
    render={(props) => isLoggedIn
      ? <Component {...props} />
      : <Redirect to={{pathname: '/'}} />}
  />
)

const UnAuthenticatedRoute = ({component: Component, isLoggedIn, ...rest}) =>(
  <Route
    {...rest}
    render={(props) => isLoggedIn 
      ? <Redirect to={{pathname: '/Dashboard'}} />
      : <Component {...props} />}
  />
)

const Routes = (props) => (
  <Fragment>
    { props.isLoggedIn 
      ? <Layout>
          <Router>
            <Switch>
              <PrivateRoute exact path='/Dashboard' isLoggedIn={props.isLoggedIn} component={Dashboard} />
              <PrivateRoute exact path='/Music/:id' isLoggedIn={props.isLoggedIn} component={Categories} />
              <PrivateRoute exact path='/Business/:id' isLoggedIn={props.isLoggedIn} component={Categories} />
              <PrivateRoute exact path='/Health_&_Fitness/:id' isLoggedIn={props.isLoggedIn} component={Categories} />
              <Route render={() => <Redirect to="/Dashboard" />} />
            </Switch>
          </Router>
        </Layout>
      : <Router>
          <Switch>
            <UnAuthenticatedRoute exact path='/Signup' isLoggedIn={props.isLoggedIn} component={Signup} />
            <UnAuthenticatedRoute exact path='/' isLoggedIn={props.isLoggedIn} component={Login} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </Router>
    }
  </Fragment>
);

export default Routes;