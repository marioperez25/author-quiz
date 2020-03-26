import React from 'react';
import logo from './logo.svg';
import './AuthorQuiz.css';
import './bootstrap.min.css'

function AuthorQuiz() {
  return (
    <div className="AuthorQuiz">
      <header className="AuthorQuiz-header">
        <img src={logo} className="AuthorQuiz-logo" alt="logo" />
        <p>
          Edit <code>src/AuthorQuiz.js</code> and save to reload.
        </p>
        <a
          className="AuthorQuiz-link"
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

export default AuthorQuiz;
