import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg'
import Create from './Create'
import './App.css'


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create">Create a Django SampleModel</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  // return <h2>Home</h2>;
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

// function Create() {
  // return (
    // <>
 //     {/* <h2>Create a new Django SampleModel </h2> */}
 //     {/* <h4>This react-bootsrap form will send an http post request to Django sample app to create a new SampleModel in Postgres database </h4> */}
 //   {/* </> */}
  // )
// }

function Users() {
  return <h2>Users</h2>;
}