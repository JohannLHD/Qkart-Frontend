import Register from "./components/Register";
import ipConfig from "./ipConfig.json";
import Login from"./components/Login";
import Products from"./components/Products";
import Checkout from"./components/Checkout";
import Thanks from"./components/Thanks";
import React from 'react';
import {Route,Switch} from "react-router-dom";

export const config = {
  endpoint: `https://qkart-frontend2.herokuapp.com/api/v1`,
};

function App() {
  return (
    <div className="App">
          {/* <Register /> 
          <Login label = {{"username" : "", "password" : ""}} /> */}
          <Switch>
            <Route exact path='/'>
              <Products />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/checkout'>
              <Checkout />
            </Route>
            <Route path='/thanks'>
              <Thanks />
            </Route>
          </Switch>
    </div>
  );
}

export default App;
