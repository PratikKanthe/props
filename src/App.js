import React from "react";
import './App.css';
import ClassProps from "./ClassProps";

function App() {
  return (
    <div className="App">
      <h1> React Props</h1>
      <ClassProps name="Pratik" place="Dapoli"/>
      <ClassProps name="Pratik" place="Shiralla"/>
      <ClassProps name="Pratik" place="Mumbai"/>
    </div>
  );
}

export default App;
