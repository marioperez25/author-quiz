//Llibraries:
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//Components:
import './AuthorQuiz.css';
//Bootstrap:
import './bootstrap.min.css';

function AuthorQuiz({turnData, highlight, onAnswerSelected, onContinue}) {
  return (
    <div className="container-fluid">
      <Hero/>
      <Turn
        {...turnData}
        highlight={highlight}
        onAnswerSelected={onAnswerSelected}
      />
      <Continue
          show={highlight === 'correct'}
          onContinue={onContinue}
      />
      <p><Link to="/add">Add Author</Link> </p>
      <Footer/>
    </div>
  );
}

function Hero(){
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1> Author Quiz</h1>
        <p>To play, select the book written by the author shown in the picture</p>
      </div>
    </div>
  );
}

function Turn({author, books, highlight, onAnswerSelected}){
  function highlightToBgColor(highlight) {
    const mapping= {
      'none' : '',
      'correct' : 'green',
      'wrong' : 'red'
    }
    return mapping[highlight];
  }
  return(
    <div className="row turn" style={{backgroundColor: highlightToBgColor(highlight)}}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorimage" alt={author.name} />
      </div>
      <div className="col-6">
        {books.map(
          (title) => <Book title={title} key={title} onClick={onAnswerSelected} />
        )}
      </div>
    </div>
  );
}
Turn.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string).isRequired,
    highlight: PropTypes.string
  })
}

function Book({title, onClick}){
  return(
    <div className="answer" onClick={() => {onClick(title);}}>
      <h4>{title}</h4>
    </div>
  )
}

function Continue({ show, onContinue}){
  return(
    <div className="row continue">
      { show
        ? <div>
          <button className="btn btn-primary btn-lg float-right" onClick={onContinue}>Continue</button>
        </div>
        :null
      }
    </div>
  );
}

function Footer(){
  return(
    <div id="footer" className="row">
      <div className="col-12">
        <p className="text-muted credit">all images used from <a href="http://commons.wikimedia.org">Wikimedia Commons</a> and are in the public domain</p>
      </div>
    </div>
  );
}

export default AuthorQuiz;
