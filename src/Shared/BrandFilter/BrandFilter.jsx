import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { products } from '../../Data/Placeholder';

const BrandFilter = () => {
    function removeDuplicates(products) {
        let uniqueBrands = [];

        products.forEach(element => {
            if (!uniqueBrands.includes(element.brand)) {
                uniqueBrands.push(element.brand);
            }
        });
        return uniqueBrands;
    }


    const brands = removeDuplicates(products);

    return (
        <>
            <FormGroup>
                {

                    brands.map((elm, i) => (
                        <FormControlLabel key={i} control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: '20px' } }} />} label={elm} />
                    ))
                }


            </FormGroup>
        </>
    )
}

export default BrandFilter