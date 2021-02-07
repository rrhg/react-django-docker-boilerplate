import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg'
import {Provider} from './Context'
import GetDjangoSampleModel from './components/GetDjangoSampleModel'
import CreateDjangoSampleModel from './components/CreateDjangoSampleModel'
import './App.css'

export default function App() {
  return (
  <Provider>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Create-react-app inlcluded component</Link>
            </li>
            <li>
              <Link to="/get">Get Django SampleModel</Link>
            </li>
            <li>
              <Link to="/create">Create Django SampleModel</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/get">
            <GetDjangoSampleModel />
          </Route>
          <Route path="/create">
            <CreateDjangoSampleModel />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  </Provider>
  );
}

function Home() {
  // Create-react-app included component
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit.. <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
