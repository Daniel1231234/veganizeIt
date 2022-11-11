import React from "react"
import { HomePage } from "./pages/HomePage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AppHeader } from "./cmps/AppHeader"
import { WishListPage } from "./pages/WishListPage"
import { CheckIfVegan } from "./pages/CheckIfVegan"
import { ScannerPage } from "./pages/ScannerPage"

import bgcImg from "./assets/imgs/img-bgc.jpg"

import "./assets/scss/global.scss"
import { SearchRecipe } from "./pages/SearchRecipe"
import { useState } from "react"

function App() {

  return (
    <BrowserRouter>
        <AppHeader />
          <div className="main-app"  style={{backgroundImage: "url(" + bgcImg + ")"}}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/recipe" element={<SearchRecipe />} />
              <Route path="/explore" element={<WishListPage />} />
              <Route path="/isvegan" element={<CheckIfVegan />} />
              <Route path="/scanner" element={<ScannerPage />} />
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



