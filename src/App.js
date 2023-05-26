import React, { useEffect } from 'react';
import logo from './wordhunt.gif';
import './App.css';
import Form from './Form';

function App() {

  useEffect(() => {
    document.title = "WordHunt Solver";
  }, []);

  return (
    <div className="solver">
      <header className="solver-header">
        <img src={logo} className="solver-logo" alt="logo"/>
        <h2>Get the optimal number of points in GamePigeon's WordHunt!</h2>
        <h4>Start by entering your 16-letter board below.</h4>
        <h6>Input reads board top down, left to right.</h6>
        {/* <form>
          <label>
            Board:    
            <input type="text" className="textInput" placeholder="your board here..."/>
          </label>
          <input type="submit" className="submitInput" value="Submit"/>
        </form> */}
        <Form />
        <div className="wh-footer">
          <a
          className="github-link"
          href="https://github.com/32111jl/WordHuntSolver"
          target="_blank"
          rel="noopener noreferrer"
          >
            github
          </a>
          <a
            className="about-link"
            href="https://32111jl.github.io/johnnyliujj/"
            target="_blank"
            rel="noopener noreferrer"
          >
            about me!
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
