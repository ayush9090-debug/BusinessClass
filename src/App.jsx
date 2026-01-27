import React from "react";
import Navbar from "./Components/Navbar";
import PathRouter from "./Components/PathRouter";



export default function App() {
  return (
    <>
      <Navbar />
      <div className="">
        <PathRouter />
      </div>
    </>
  );
}
