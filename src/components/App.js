import React from "react";
// import Tickler from "./Tickler";
// import MultiButton from "./MultiButton";
// import ChangeItUp from "./ChangeItUp";
// import Login from "./Login";


function Clickable() {
  function handleClick() {
    console.log("click");
  }
  return <button onClick={handleClick}>Click Me</button>;
}

function App() {
  return <Clickable />;
}

export default App;
