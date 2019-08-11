import React from 'react';
import './App.css';

function App() {
  return (
    <React.Fragment>
<h1>Choose your doggy</h1>
    <div className="flex">
    <div className="card">
      <h3>Corgi</h3>
      <a href="https://en.wikipedia.org/wiki/Pembroke_Welsh_Corgi"> <img className="picture" src="pictures/Corgi.jpg" alt="doggy"/> </a>
    </div>
    <div className="card">
      <h3>White Pomeranian</h3>
      <a href="https://en.wikipedia.org/wiki/Pomeranian_(dog)"> <img className="picture" src="pictures/Micro-Lightning-White-Pomeranian.jpg" alt="doggy"/></a>
    </div>
    <div className="card">
      <h3>Pomeranian</h3>
      <a href="https://en.wikipedia.org/wiki/Pomeranian_(dog)"><img className="picture" src="pictures/Pomeranian.jpg" alt="doggy" /></a>
    </div>
    <div className="card">
      <h3>Chihuahua</h3>
      <a href="https://en.wikipedia.org/wiki/Chihuahua_(dog)"><img className="picture" src="pictures/Chihuahua.jpg" alt="doggy" /> </a>
    </div>
    <div className="card">
      <h3>Chocolate-Labrador-retriever</h3>
      <a href="https://en.wikipedia.org/wiki/Labrador_Retriever"><img className="picture" src="pictures/Chocolate-Labrador-retriever.jpg" alt="doggy" /></a>
    </div>
    <div className="card">
      <h3>Australian Terrier</h3>
      <a href="https://en.wikipedia.org/wiki/Australian_Terrier"><img className="picture" src="pictures/Austalian Terrier.jpg" alt="doggy" /> </a>
    </div>
    <div className="card">
      <h3>American Eskimo Dog</h3>
      <a href="https://en.wikipedia.org/wiki/American_Eskimo_Dog"><img className="picture" src="pictures/American Eskimo Dog.jpg" alt="doggy" /></a>
    </div>
    </div>
    </React.Fragment>
  );
}

export default App;
