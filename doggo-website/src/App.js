import React from "react";
import "./App.css";
import Doggo from "./components/Doggo";

function App() {
  return (
    <React.Fragment>
      <h1>Choose your doggy</h1>
      <div className="flex">
        <Doggo
          name="Pomeranian"
          imgUrl="pictures/Micro-Lightning-White-Pomeranian.jpg"
        />
        <Doggo name="Chihuahua" imgUrl="pictures/Chihuahua.jpg" />
        <Doggo
          name="Chocolate-Labrador-retriever"
          imgUrl="pictures/Chocolate-Labrador-retriever.jpg"
        />
        <Doggo
          name="Australian Terrier"
          imgUrl="pictures/Austalian Terrier.jpg"
        />
        <Doggo
          name="American Eskimo Dog"
          imgUrl="pictures/American Eskimo Dog.jpg"
        />

        {/**
 POPKA MOLODETS
    */}
      </div>
    </React.Fragment>
  );
}

export default App;
