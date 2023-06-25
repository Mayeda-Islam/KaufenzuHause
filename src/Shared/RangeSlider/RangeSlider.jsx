import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useEffect } from "react";

function valuetext(value) {
  return `${value}°C`;
}

const RangeSlider = ({ priceRange, setPriceRange }) => {
  const [value, setValue] = useState([0, 1000]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setPriceRange(newValue);
  };

  return (
    <>
      <Box sx={{ width: "90%" }}>
        <Slider
          getAriaLabel={() => "Price range"}
          min={0}
          max={1000}
          value={priceRange}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          sx={{
            color: "7ED957",
            "& .MuiSlider-thumb": {
              borderRadius: "1px",
              padding: "0",
              width: "6px",
            },
          }}
        />
      </Box>

      {/* display min and max price */}
      <div className="flex items-center justify-between mt-3">
        <span className="text-[16px] text-gray-600">
          Price:{" "}
          <span className="font-semibold text-textColor">
            {" "}
            €{value[0]} - €{value[1]}
          </span>
        </span>
      </div>
    </>
  );
};

export default RangeSlider;
