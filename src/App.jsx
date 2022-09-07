import React from "react"
import { HomePage } from "./pages/HomePage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AppHeader } from "./cmps/AppHeader"
import { ExplorePage } from "./pages/ExplorePage"
import { CheckIfVegan } from "./pages/CheckIfVegan"

import "./assets/scss/global.scss"

function App() {
  return (
    <BrowserRouter>
        <AppHeader />
          <div className="main-app">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/isvegan" element={<CheckIfVegan />} />
            </Routes>
          </div>
    </BrowserRouter>
  )
}

export default App



