import { useEffect, useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

const FilterBy = ({setFilterBy, setResults}) => {
  const [radioValue, setRadioValue] = useState("country");

  const radios = [
    { name: "מדינה", value: "country" },
    { name: "יקב", value: "name" },
  ];


  const handleFilterChange = (e) => {
    setFilterBy(e.currentTarget.value)
    setRadioValue(e.currentTarget.value)
  }

  return (
    <div className="filter">
      <ButtonGroup style={{display:'flex', justifyContent:'space-between', gap:'5px'}}>
        <label>סנן תוצאות על פי: </label>
        {radios.map((radio, idx) => (
          <ToggleButton 
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={"outline-success"}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={handleFilterChange}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
}

export default FilterBy;
