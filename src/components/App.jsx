import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Home from './home/Home.jsx';
import NotFound from './splash/NotFound.jsx';
import SignIn from './SignIn.jsx';
import MainContainer from './MainContainer.jsx';
import Clients from './data/Clients.jsx';
import Vehicles from './data/Vehicles.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.requireAuth = this.requireAuth.bind(this);
  }

  requireAuth(nextState, replace, next) {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    if (!token || !id) {
      localStorage.clear();
      replace('sign-in');
    } else {
      next();
    }
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={MainContainer}>
          <IndexRoute component={Home} />
          <Route path="application/:type" component={Clients} />
          <Route path="application/:type/:client_id/vehicles" component={Vehicles} />
          <Route path="sign-in" component={SignIn} />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    );
  }
}

export default App;
