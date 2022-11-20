import React from "react"
import { HomePage } from "./pages/HomePage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AppHeader } from "./cmps/AppHeader"
import { CheckIfVegan } from "./pages/CheckIfVegan"
import { ScannerPage } from "./pages/ScannerPage"


function App() {
  return (
    <BrowserRouter>
        <AppHeader />
          <div className="main-app" >
            <Routes>
              <Route path="/veganizeIt/" element={<HomePage />} />
              <Route path="/veganizeIt/isvegan" element={<CheckIfVegan />} />
              <Route path="/veganizeIt/scanner" element={<ScannerPage />} />
            </Routes>
          </div>
    </BrowserRouter>
  )
}

export default App


//! TODO: 
//? 1. WISHLIST
//? 2.18A RECIPES
//? 3. UI



