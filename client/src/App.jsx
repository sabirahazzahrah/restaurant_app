import { useState } from "react";
import Home from "./pages/home";
import DetailPage from "./pages/detail-cuisine";
import { useParams } from "react-router-dom";

// const { id } = useParams();
function App() {
  return (
    <>
      <Home />
      <DetailPage />
    </>
  );
}

export default App;
