import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Signup from './imports/ui/Signup';
import Links from './imports/ui/Links';
import Login from './imports/ui/Login';
import NotFound from './imports/ui/NotFound';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import history from './imports/ui/history';


import { withRouter } from "react-router-dom";

const routes = (
  <div>
    <BrowserRouter history={history}>
      <Switch>
        <Route path="/signup" exact component={Signup}/>
        <Route path="/links" exact component={Links} history={history}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/app" exact component={App}/>
        <Route path="*" exact component={NotFound}/>
      </Switch>
    </BrowserRouter>
  </div>
);





ReactDOM.render(routes, 
  document.getElementById('root')
);
