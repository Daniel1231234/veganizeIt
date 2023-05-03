import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import FilterBy from "./FilterBy";
import { checkWineService } from "../services/checkWineService";
import ItemList from "./ItemList";

const BASE_URL =
  process.env.NODE_ENV !== "development"
    ? "/api/"
    : "//localhost:3000/api/wine";

const SearchBar = ({ setShowSearchBar }) => {
  const [searchInput, setSearchInput] = useState();
  const [filterBy, setFilterBy] = useState("country");
  const [results, setResults] = useState();

  const totalCountries = checkWineService.getCountries();
  const totalWineriesNames = checkWineService.getWineriesName();

  const handleChange = (val, res) => {
    setSearchInput(val);
  };

  useEffect(() => {
    if (setResults) setResults(null)
  }, [filterBy])

  const handleSubmit = async () => {
    try {
      let sendInput =
        filterBy === "country" ? searchInput.en : searchInput.name;
      const { data } = await axios.post(`${BASE_URL}/${sendInput}`, {
        filterBy,
      });
      setResults(data);
    } catch (err) {
      console.log(err);
    }
  };

  const formatResult = (item) => {
    return (
      <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
    );
  };

  return (
    <>
      <div className="search-bar">
        <div className="search-form">
          <h2 className="text-center">יינות ויקבים </h2>
          <Button className="btn-back" onClick={() => setShowSearchBar(false)}>
            חזרה לדף הבית
          </Button>
          <Form.Label>
            {filterBy === "name" ? "חפש לפי יקב" : "חפש לפי מדינה"}
          </Form.Label>
          <FilterBy filterBy={filterBy} setFilterBy={setFilterBy} setResults={setResults} />
          <ReactSearchAutocomplete
            formatResult={formatResult}
            items={filterBy === "country" ? totalCountries : totalWineriesNames}
            placeholder={
              filterBy === "name" ? "לדוגמא: תבור" : "לדוגמא: גרמניה"
            }
            onSearch={handleChange}
            onSelect={(val) => setSearchInput(val)}
            value={searchInput}
            autoFocus
          />
          <Form.Text className="text-muted">
            שים לב! חלק מהמוצרים והרכיבים במאגר רשומים באנגלית
          </Form.Text>
          <Button type="submit" onClick={handleSubmit}>
            חפש
          </Button>
        </div>
      {results && <ItemList items={results} />}
      </div>
    </>
  );
};

export default SearchBar;
