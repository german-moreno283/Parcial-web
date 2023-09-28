import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginMail from "./components/LoginMail";
import LoginPass from "./components/LoginPass";
import Gallery from "./components/Gallery";
import Detail from "./components/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginMail />} />
        <Route path="/pswd" element={<LoginPass />} />
        <Route path="/parts" element={<Gallery />} />
        <Route path="/parts/:idPart" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
