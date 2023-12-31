import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <>
      <div className="app_container">
        <Routes>
          <Route path="" element={<Homepage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
