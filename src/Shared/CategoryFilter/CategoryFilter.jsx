import React, { useEffect, useState } from 'react'

import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import GetAPI from '../../APIHooks/GetAPI';


const CategoryFilter = ({ setProductData, products }) => {
    const [categories, setCategories] = React.useState([])
    // const [checkValue, setCheckValue] = useState([])
    const [filterInputs, setFilterInputs] = useState([]);

    console.log(products);
    useEffect(() => {
        GetAPI(`categories`, setCategories)
    }, [])
    const handleCheckboxChange = (_value) => {
        // event.preventDefault()
        // const { value, checked } = event.target;
        // if (checked) {
        //     setCheckValue((prevSelectedItems) => [...prevSelectedItems, value]);
        // } else {
        //     setCheckValue((prevSelectedItems) =>
        //         prevSelectedItems.filter((item) => item !== value)
        //     );
        // }
        if (filterInputs.includes(_value)) {
            const filterResult = filterInputs?.filter((data) => data !== _value);
            setFilterInputs(filterResult);
        } else {
            setFilterInputs([...filterInputs, _value]);
        }
    }

    useEffect(() => {
        if (filterInputs?.length > 0) {
            const filterResult = products?.filter((data) =>
                filterInputs?.includes(data.category)
            );
            console.log(filterResult);
            // setProductData(filterResult);
        } else {
            // setProductData(products);
        }
    }, [filterInputs]);


    console.log(filterInputs);
    return (

        <>
            <FormGroup>
                {

                    categories?.map((elm, index) => (
                        <label key={index}>
                            <Checkbox
                                key={elm?.categoryTitle}
                                value={elm?.categoryTitle}
                                checked={filterInputs?.includes(elm?.categoryTitle)}
                                onChange={(e) => handleCheckboxChange(e.target.value)}
                            />

                            {elm?.categoryTitle}
                        </label>

                    ))
                }


            </FormGroup>
        </>
    )
}

export default CategoryFilter