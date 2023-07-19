import React from "react";
// import Chip from "@mui/material/Chip";
// import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";
const ColorAndSizeOptions = ({ setState, productsOptions }) => {
  const [inputValue, setInputValue] = useState('');
  const [dataList, setDataList] = useState([]);



  React.useEffect(() => {
    setDataList(productsOptions)
  }, [productsOptions])
  
  React.useEffect(() => {
    setState(dataList)
  }, [setState, dataList])


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddData = () => {
    if (inputValue.trim() !== '') {
      setDataList([inputValue, ...dataList]);
      setInputValue('');
    }
  };

  const handleRemoveData = (index) => {
    const updatedDataList = [...dataList];
    updatedDataList?.splice(index, 1);
    setDataList(updatedDataList);
  };

  return (
    <div>
      <div className="flex  gap-3 ">
        {dataList?.map((data, index) => (
          <div key={index} className="flex border  gap-3  mx-2 py-2 px-5">
            {data}
            <span className="text-red-500 cursor-pointer" onClick={() => handleRemoveData(index)}>x</span>
          </div>
        ))}
      </div>

      <div className="my-3">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter data"
          className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
        />
        <p onClick={handleAddData} className='border-2 hover:border-primary rounded-lg bg-darkNavy hover:bg-white text-white hover:text-darkNavy px-4 py-2 my-3 inline-block'>Add</p>
      </div>
    </div>
    // <Stack spacing={3} className="w-full">
    //   <Autocomplete
    //     // onChange={(event, selectedValue) => setState(selectedValue)}
    //     multiple
    //     id="tags-filled"
    //     freeSolo
    //     defaultValue={selectedOptions}
    //     onChange={(event, newValue) => {
    //       setSelectedOptions(newValue);
    //     }}
    //     renderTags={(productsOptions, getTagProps) =>
    //       productsOptions?.map((option, index) => (
    //         <Chip
    //           key={index}
    //           variant="outlined"
    //           label={option}
    //           {...getTagProps({ index })}
    //         />
    //       ))
    //     }
    //     renderInput={(params) => <TextField {...params} variant="filled" />}
    //   />
    // </Stack>
  );
};

export default ColorAndSizeOptions;
