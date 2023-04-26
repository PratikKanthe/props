import React from "react";
import './App.css';
import ClassProps from "./ClassProps";

function App() {
  return (
    <div className="App">
      <h1> React Props</h1>
      <ClassProps name="Pratik" place="Dapoli"> <p>This is child Component</p> </ClassProps>
      <ClassProps name="Pratik" place="Shiralla"> <button>Click</button> </ClassProps>
      <ClassProps name="Pratik" place="Mumbai"/>
    </div>
  );
}

export default App;
