import React from "react"
import { HomePage } from "./pages/HomePage"
import { Routes, Route } from "react-router-dom"
import { AppHeader } from "./cmps/AppHeader"
import { CheckIngsPage } from "./pages/CheckIngsPage"
import { CheckWinePage } from "./pages/CheckWinePage"
// import { useState } from "react"
import imgUrl from "./assets/theme.jpg"



function App() {


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





