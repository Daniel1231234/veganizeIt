import { LinkCard } from "../cmps/LinkCard";
import wineSvg from "../assets/imgs/wine2.svg";
import { useState } from "react";
import SearchBar from "../cmps/SearchBar";

export function HomePage() {
  const [showSearchBar, setShowSearchBar] = useState(false)

  const revealSearch = (e) => {
    setShowSearchBar(true)
  }

  return (
    <div className="home-page">
      {showSearchBar ? (
        <SearchBar setShowSearchBar={setShowSearchBar} />
      ) : (
        <>
          <div className="headline">
            <h2 style={{ fontSize: "2rem", marginTop: "0" }}>
              ברוכים הבאים לפק"ל הטבעוני
            </h2>
            <p>האתר שמאפשר לכם לחפש יינות ומרכיבים ולבדוק האם הם טבעוניים.</p>
          </div>
          <div className="home-links">
            <LinkCard
              svg={wineSvg}
              title="חיפוש יינות טבעוניים"
              onClick={revealSearch}
            />
            {/* <LinkCard title="חפש מוצר לפי ברקוד" href="/scanner" /> */}
          </div>
        </>
      )}
    </div>
  );
}
