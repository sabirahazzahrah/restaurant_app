import { useState } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "../src/routers/index";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
