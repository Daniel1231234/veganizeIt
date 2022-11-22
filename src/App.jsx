import React from "react"
import { HomePage } from "./pages/HomePage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AppHeader } from "./cmps/AppHeader"
import { CheckIngsPage } from "./pages/CheckIngsPage"
import { CheckWinePage } from "./pages/CheckWinePage"
import { useState } from "react"
// import ImgContext from "./store/store"
import imgUrl from "./assets/theme.jpg"
// import { ScannerPage } from "./pages/ScannerPage"


function App() {
  const [showImg, setShowImg] = useState(false)

  return (
          <div className="main-app" >
            <AppHeader img={imgUrl} />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/winery" element={<CheckWinePage />} />
              <Route path="/ings" element={<CheckIngsPage />} />
            </Routes>
          </div>
  )
}

export default App


//! TODO: 
//? 1. WISHLIST
//? 2.18A RECIPES
//? 3. UI



