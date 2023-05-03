import React from "react";
import { HomePage } from "./pages/HomePage";
import { Routes, Route, Navigate } from "react-router-dom";
import { AppHeader } from "./cmps/AppHeader";
import imgUrl from "./assets/theme.jpg";
import { ContactPage } from "./pages/ContactPage";
import { ErrorPage } from "./pages/ErrorPage";
import ScannerPage from "./pages/ScannerPage";

function App() {
  return (
    <div className="main-app">
      <AppHeader img={imgUrl} />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/scanner" element={<ScannerPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
