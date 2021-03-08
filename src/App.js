import React from 'react'
import GlobalState from './GlobalState'
import Navbar from './components/Navbar.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <div>

      <Router>
        <GlobalState>
          <Navbar />
          <Switch>
            <Route exact path='/' >
              <Login />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>
          </Switch>
        </GlobalState>
      </Router>
    </div>
  )
}

export default App
