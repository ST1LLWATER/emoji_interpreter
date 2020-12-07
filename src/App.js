import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [likeCounter, setLikeCounter] = useState(0);
  function likeClickHandler() {
    var newLikeCounter = likeCounter + 1;
    setLikeCounter(newLikeCounter);
  }

  console.log(likeCounter);

  return (
    <div className="App">
      <h1>Inside Outtt!</h1>
      <button onClick={likeClickHandler}>Like!</button>
      <p>{likeCounter}</p>
    </div>
  );
}
