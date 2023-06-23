import React from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../ContextProvider/ContextProvider';
const SingleProduct = ({ product }) => {
    const { _id, images, category, productTitle, totalProduct, productPrice, previousPrice, colors, brand, model, productTitleGerman } = product;
    const { language } = React.useContext(Context)
    return (
        <Link to={`/productDetails/${_id}`} key={_id} className="lg:h-[360px]">
            <div >
                <div className=" shadow-md shadow-gray-100 m-2.5 border border-gray-200 rounded prod_card ">
                    <div className="relative overflow-hidden">
                        <div className="flex items-center justify-center">
                            <img src={`${images[0]}`} className='w-full sm:w-full md:w-full h-[300px]  object-cover  lg:h-[217px]' />
                        </div>
                        {/* button group */}
                        <div className="absolute top-4 left-4 ">
                            {
                                totalProduct > 0 ?
                                    <button className="py-1 px-3 bg-primary text-sm text-white  block rounded mb-2">
                                        In Stock
                                    </button>
                                    :
                                    <button className="py-1 px-3 bg-secondary text-sm text-white  block rounded mb-2">
                                        Out Of Stock
                                    </button>
                            }

                            {
                                previousPrice &&
                                <del className="py-1 px-2 bg-secondary text-sm text-white rounded-sm  text-center ">
                                    €{previousPrice}
                                </del>
                            }


                        </div>



                    </div>
                    {/* card body */}
                    <div className="p-4 overflow-hidden">
                        <span className="text-sm text-gray-600 my-2 capitalize">{category}</span>
                        {
                            language === 'english' ?
                                <h3 className="text-base font-semibold text-textPrimary mb-1">{productTitle?.length > 25 ? productTitle?.slice(0, 25) + '..' : productTitle}</h3>
                                :

                                <h3 className="text-base font-semibold text-textPrimary mb-1">{productTitleGerman?.length > 25 ? productTitleGerman?.slice(0, 25) : productTitleGerman}</h3>
                        }
                        <p className='text-xs'>Model: <span className='text-sm font-medium text-gray-500'> {model}</span></p>
                        <p className='text-xs'>Brand: <span className='text-sm font-medium text-gray-500'> {brand}</span></p>

                        {/* rating icon */}

                        {/* <div className='text-sm my-2'>
                            {parse(`${description.length > 100 ? description.slice(0, 100) : description}`)}
                        </div> */}

                        {/* product price */}
                        <div className='flex justify-between items-center mt-2'>
                            <span className="text-lg font-semibold text-textPrimary ">€{productPrice}</span>


                            {
                                colors.length &&
                                <p className=''>Colors Available</p>
                            }
                        </div>

                    </div>

                </div>
            </div>
        </Link>

    )
}

export default SingleProduct