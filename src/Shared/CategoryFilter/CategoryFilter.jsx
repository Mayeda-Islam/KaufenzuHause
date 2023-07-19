import React, { useEffect, useState } from "react";

import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import GetAPI from "../../APIHooks/GetAPI";

const CategoryFilter = ({ filterInputs, handleFilterProducts }) => {
  const [categories, setCategories] = React.useState([]);

  useEffect(() => {
    GetAPI(`categories`, setCategories);
  }, []);

  return (
    <>
      <FormGroup>
        {categories?.map((elm, index) => (
          <label key={index}>
            <Checkbox
              key={elm?.categoryTitle}
              value={elm?.categoryTitle}
              checked={filterInputs?.includes(elm?.categoryTitle)}
              onChange={(e) => handleFilterProducts(e.target.value)}
            />

            {elm?.categoryTitle}
          </label>
        ))}
      </FormGroup>
    </>
  );
};

export default CategoryFilter;
