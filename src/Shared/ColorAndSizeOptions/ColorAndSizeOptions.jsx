import React from "react";
import Chip from "@mui/material/Chip";
import { Autocomplete, Stack, TextField } from "@mui/material";
const ColorAndSizeOptions = ({ setState, productsOptions }) => {
  console.log(productsOptions);
  return (
    <Stack spacing={3} className="w-full">
      <Autocomplete
        onChange={(event, selectedValue) => setState(selectedValue)}
        multiple
        id="tags-filled"
        options={productsOptions?.map((option) => option)}
        defaultValue={productsOptions?.forEach((option) => option)}
        freeSolo
        renderTags={(value, getTagProps) =>
          value?.map((option, index) => (
            <Chip
              key={index}
              variant="outlined"
              label={option}
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={(params) => <TextField {...params} variant="filled" />}
      />
    </Stack>
  );
};

export default ColorAndSizeOptions;
