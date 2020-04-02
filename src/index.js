//libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import { shuffle, sample } from 'underscore'; // learn more about underscore.js

import './index.css';
import AuthorQuiz from './AuthorQuiz';
import AddAuthorForm from './AddAuthorForm';
import * as serviceWorker from './serviceWorker';

const authors = [
  {
    name: 'Mark Twain',
    imageUrl: 'images/authors/marktwain.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['The Adventures of Huckleberry Finn']
  },
  {
    name: 'Joseph Conrad',
    imageUrl: 'images/authors/josephconrad.png',
    imageSource: 'Wikimedia Commons',
    books: ['Heart of Darkness']
  },
  {
    name: 'J.K. Rowling',
    imageUrl: 'images/authors/jkrowling.jpg',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Daniel Ogren',
    books: ['Harry Potter and the Sorcerers Stone']
  },
  {
    name: 'Stephen King',
    imageUrl: 'images/authors/stephenking.jpg',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Pinguino',
    books: ['The Shining', 'IT']
  },
  {
    name: 'Charles Dickens',
    imageUrl: 'images/authors/charlesdickens.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['David Copperfield', 'A Tale of Two Cities']
  },
  {
    name: 'William Shakespeare',
    imageUrl: 'images/authors/williamshakespeare.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
  }
];

let state = resetState();

function getTurnData(){
  const allBooks = authors.reduce(function (p, c, i){
    return p.concat(c.books);
  },[]);

  const fourRandomBooks = shuffle(allBooks).slice(0,4);

  const answer = sample(fourRandomBooks);

  return {
    books: fourRandomBooks,
    author: authors.find((author) => 
      author.books.some(
        (title) => title === answer
      )
    )
  }
}

function onAnswerSelected(answer) {
  const isCorrect = state.turnData.author.books.some((book) => book === answer);
  state.highlight = isCorrect ? 'correct' : 'wrong';
  render();
}

const AddAuthorFormWrapper = withRouter(({ history }) => 
    <AddAuthorForm onAddAuthor={
      (author) => {
        authors.push(author);
        history.push('/');
      }
    } />
);

function resetState() {
  return {
    turnData: getTurnData(authors),
    highlight: ''
  }
}

function render() {
  ReactDOM.render(
    <BrowserRouter>
      <Route exact path="/" component={App} />
      <Route path="/add" component={AddAuthorFormWrapper} />
    </BrowserRouter>
    ,
    document.getElementById('root')
  );
}

function App(){
  return (
    <AuthorQuiz 
      {...state}
      onAnswerSelected={onAnswerSelected}
      onContinue={
        () => {
          state = resetState();
          console.log(state);
          render();
        }
      }
    />
  );
}

render();

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
