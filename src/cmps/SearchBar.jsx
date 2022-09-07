export  function SearchBar() {
  return (
    <div className="search-bar">
      <div className="search-container container">
          <h2> חפש מתכונים טעימים, מהירים, טעימים ללא רכיבים מן החי!</h2>
          <div className="main-input">
              <input type="text" id="search" placeholder="אני רוצה להכין..." />
              <button className="search-btn">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
          </div>
       </div>
    </div>
  )
}