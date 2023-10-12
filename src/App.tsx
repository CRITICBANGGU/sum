import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./page/MainPage";
import GlobalStyle from "./components/layout/Global.style";
import ContentDetail from "./page/ContentDetail";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contents" element={<ContentDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
