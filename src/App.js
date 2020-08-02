import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Login from './components/auth/Login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/login' component={Login} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;