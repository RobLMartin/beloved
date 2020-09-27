import React from "react";
import "./App.css";

import { Button } from "beloved";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>Cats</Button>
        <Button primary>Dogs</Button>
      </header>
    </div>
  );
}

export default App;
