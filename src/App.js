import React, { useState } from "react";
import Home from "./components/Home"
import Movies from "./components/Movies"
import Contact from "./components/Contact"
import About from "./components/About"
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function NoneRouter() {
  const [theme, setTheme] = useState('black')
  const [blockMovies, setBlockMovies] = useState(false)
  return (
    <Router>
      <div class="topnav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <main style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 61px)', backgroundColor: `${theme === 'white' ? 'white' : '#222831'}`}}>
      <div style={{display: 'flex'}}>
        <button style={{
          padding: '20px',
          border: 'none',
          width: '200px',
          margin: '10px',
          background: 'grey'
        }}
        onClick={() => setTheme(theme === 'white' ? 'black' : 'white')}
        >Toggle Theme</button>
        <button style={{
          padding: '20px',
          width: '200px',
          margin: '10px',
          border: 'none',
          background: 'grey'
        }}
          onClick={() => setBlockMovies(true)}
        >Block Fetching Movies</button>
      </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movies">
            <Movies blockMovies={blockMovies} unblockMovies={() => setBlockMovies(false)}/>
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
