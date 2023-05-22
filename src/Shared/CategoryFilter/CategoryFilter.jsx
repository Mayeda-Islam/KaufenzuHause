import React from 'react'

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { products } from '../../Data/Placeholder';


const CategoryFilter = () => {


    function removeDuplicates(products) {
        let uniqueCategories = [];
        products.forEach(element => {
            if (!uniqueCategories.includes(element.categoryName)) {
                uniqueCategories.push(element.categoryName);
            }
        });
        return uniqueCategories;
    }


    console.log(removeDuplicates(products))
    const categories = removeDuplicates(products);
    return (

        <>
            <FormGroup>
                {

                    categories.map((elm) => (
                        <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 25 } }} />} label={elm} />
                    ))
                }


            </FormGroup>
        </>
    )
}

export default CategoryFilter