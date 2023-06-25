import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useEffect } from "react";

function valuetext(value) {
  return `${value}°C`;
}

const RangeSlider = ({ priceRange, setPriceRange, handlePriceRange }) => {
  const handleChange = (event, newValue) => {
    setPriceRange(newValue);
    handlePriceRange(newValue[0], newValue[1]);
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
          <span className="font-semibold text-textColor"> €0 - €1000</span>
        </span>
        <button className=" text-white py-1 px-5  hover: rounded text-sm  bg-primary   border-2 border-transparent hover:border-textColor  hover:bg-transparent hover:text-textColor capilatize">
          Filter
        </button>
      </div>
    </>
  );
};

export default RangeSlider;
