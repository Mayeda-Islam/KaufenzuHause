import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import parse from 'html-react-parser'
import ProductReviews from './ProductReviews';
import { Context } from '../../ContextProvider/ContextProvider';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const ProductDetailsTabs = ({ product }) => {
    const [value, setValue] = React.useState(0);
    const { language } = useContext(Context)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} className='' onChange={handleChange} aria-label="basic tabs example">

                        <Tab
                            label="Description"
                            sx={{
                                fontSize: { xs: '12px', sm: '12px', md: '13px', lg: '16px' },
                                color: "#191919",
                                fontWeight: { xs: '500', md: '600' }
                            }}
                            {...a11yProps(0)}
                        />
                        <Tab
                            label="Reviews"
                            sx={{
                                fontSize: { xs: '12px', sm: '12px', md: '13px', lg: '16px' },
                                color: "#191919",
                                fontWeight: { xs: '500', md: '600' }
                            }}
                            {...a11yProps(1)}
                        />
                        <Tab
                            label="Shipping and Delivery"
                            sx={{
                                fontSize: { xs: '12px', sm: '12px', md: '13px', lg: '16px' },
                                color: "#191919",
                                fontWeight: { xs: '500', md: '600' }
                            }}
                            {...a11yProps(2)}
                        />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <div className="text-sm text-gray-500 leading-7 pt-5">
                        {
                            language === 'english' ?
                                <>

                                    {parse(`${product?.description}`)}
                                </>
                                :
                                <>
                                    {parse(`${product?.descriptionGerman}`)}
                                </>
                        }

                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ProductReviews />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <div className="pt-5">
                        {
                            language === 'english' ?
                                <>
                                    {parse(`${product?.shipping}`)}
                                </>
                                :
                                <>
                                    {parse(`${product?.shippingGerman}`)}
                                </>

                        }
                    </div>

                </TabPanel>
            </Box>
        </div>
    )
}

export default ProductDetailsTabs