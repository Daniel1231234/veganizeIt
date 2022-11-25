import React from "react"
import { HomePage } from "./pages/HomePage"
import { Routes, Route } from "react-router-dom"
import { AppHeader } from "./cmps/AppHeader"
import { CheckIngsPage } from "./pages/CheckIngsPage"
import { CheckWinePage } from "./pages/CheckWinePage"
// import { useState } from "react"
import imgUrl from "./assets/theme.jpg"
import { ContactPage } from "./pages/ContactPage"



function App() {


  return (
          <div className="main-app" >
            <AppHeader img={imgUrl} />
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/winery" element={<CheckWinePage />} />
              <Route path="/ings" element={<CheckIngsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
  )
}

export default App





