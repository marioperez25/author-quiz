//Llibraries:
import React from 'react';
//Components:
import './AuthorQuiz.css';
//Bootstrap:
import './bootstrap.min.css';

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

function Book({title}){
  return(
    <div className="answer">
      <h4>{title}</h4>
    </div>
  )
}

function Turn({author,books}){
  return(
    <div className="row turn" style={{backgroundColor: "white"}}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorimage" alt={author.name} />
      </div>
      <div className="col-6">
        {books.map(
          (title) => <Book title={title} key={title} />
        )}
      </div>
    </div>
  );
}

function Continue(){
  return(
    <div></div>
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

function AuthorQuiz({turnData}) {
  return (
    <div className="container-fluid">
      <Hero/>
      <Turn {...turnData}/>
      <Continue/>
      <Footer/>
    </div>
  );
}

export default AuthorQuiz;
