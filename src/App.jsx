import React from "react";
import Nav from "../components/Nav";
import Routing from "../utils/Routing";

function App() {
  return (
    <div className="relative text-white bg-zinc-900 h-screen ">
      <Nav/>
      <Routing/>
    </div>
  );
}

export default App;
