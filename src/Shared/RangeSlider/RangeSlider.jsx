import React from 'react'
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
    return `${value}°C`;
}


const RangeSlider = () => {
    const [value, setValue] = React.useState([0, 500]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Box sx={{ width: "90%" }}>
                <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    sx={{
                        color: "7ED957",
                        "& .MuiSlider-thumb": {
                            borderRadius: "1px",
                            padding: "0",
                            width: "6px"
                        }
                    }}
                />
            </Box>

            {/* display min and max price */}
            <div className="flex items-center justify-between mt-3">
                <span className="text-[16px] text-gray-600">
                    Price: <span className='font-semibold text-textColor'> $521 - $632</span>
                </span>
                <button
                    className=" text-white py-1 px-5  hover: rounded text-sm  bg-primary   border-2 border-transparent hover:border-textColor  hover:bg-transparent hover:text-textColor capilatize"
                >
                    Filter
                </button>
            </div>

        </>
    )
}

export default RangeSlider