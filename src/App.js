import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Landing/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from './Components/AdminPanel/Admin/Admin';

import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login';
import User from './Components/UserPanel/User/User';
import NotFound from './Components/NotFound';



function App() {
  return (
    <div> 
    
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/userPanel/:id'>
            <User></User>
          </Route>
          <Route path='/admin'>
            <Admin></Admin>
          </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        </Switch>
        <Route path ="*">
        <NotFound></NotFound>
      </Route>
      </Router>
      

    </div>
  );
}

export default App;
