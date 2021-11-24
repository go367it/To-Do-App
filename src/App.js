import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import React from 'react';
import Navbar from './components/Navbar'
import Tasks from './pages/Tasks/Tasks'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Tasks} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
