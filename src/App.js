import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import React from 'react';
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Tasks from './pages/Tasks/Tasks'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/signup' exact component={Signup} />
          <Route path='/signin' exact component={Login} />
          <Route path={['/manage']} exact component={Tasks} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
