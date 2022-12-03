import React from "react"
import { HomePage } from "./pages/HomePage"
import { Routes, Route, Navigate, Link } from "react-router-dom"
import { AppHeader } from "./cmps/AppHeader"
import { CheckIngsPage } from "./pages/CheckIngsPage"
import { CheckWinePage } from "./pages/CheckWinePage"
import imgUrl from "./assets/theme.jpg"
import { ContactPage } from "./pages/ContactPage"
import { ErrorPage } from "./pages/ErrorPage"

function App() {


  return (
          <div className="main-app" >
           <AppHeader img={imgUrl} />
            <Routes>
              <Route path="/" element={<Navigate replace to='/home' />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/ing" element={<CheckIngsPage />} />
              <Route path="/winery" element={<CheckWinePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path='*' element={<ErrorPage />} />
            </Routes>
          </div>
  )
}

export default App





