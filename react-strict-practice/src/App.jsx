import React from "react";
import Stopwatch from "./components/Stopwatch";

import "./styles/style.css";

function App() {
  return (
    <>
      <React.StrictMode>
        <Stopwatch />
      </React.StrictMode>
      <Stopwatch color="red" />
    </>
  );
}

export default App;

