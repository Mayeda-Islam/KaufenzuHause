import React, { useEffect } from "react";

import ProductDetailsTabs from "../../Shared/ProductDetailsShared/ProductDetailsTabs";
import ProductInfo from "../../Shared/ProductDetailsShared/ProductInfo";
import GetAPI from "../../APIHooks/GetAPI";
import { useParams } from "react-router-dom";
import ProductSideGalleryMobile from "../../Shared/ProductDetailsShared/ProductSideGalleryMobile";
import ImagesGallery from "../../Shared/ProductDetailsShared/ImagesGallery";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState({});

  useEffect(() => {
    GetAPI(`products/${id}`, setProduct);
  }, [id]);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* product thumbnail slider section */}
      <section className="pt-12 pb-6">
        <div className="w-11/12 mx-auto">
          <div className="grid lg:grid-cols-2 gap-5">
            <div className="w-full">
              <div className="">
                <ImagesGallery product={product} />
                <ProductSideGalleryMobile product={product} />
              </div>
            </div>
            {/* product info */}
            <div className=" m-3">
              <ProductInfo product={product} />
            </div>
          </div>
        </div>
      </section>

      {/* product tabs section*/}
      <hr className="my-5 border-0.5 border-gray-200" />
      <section>
        <div className="w-[94%] lg:w-[90%] mx-auto ">
          <ProductDetailsTabs product={product} />
        </div>
      </section>

      <hr className="my-9 border-0.5 border-gray-200" />

      {/* related production section */}
      <section className="py-6 ">
        <div className="w-[94%] lg:w-[93%] mx-auto ">
          <h2 className="text-2xl text-textColor font-semibold text-left capitalize mb-3 ml-3">
            Related Products
          </h2>
          {/* section title */}
          {/* <div className="flex items-center justify-between">

                        <div className="flex items-center  flex-wrap">
                            {
                                products.slice(0, 8).map((product) => (

                                    <div className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 xxl:w-1/5" key={product._id}>
                                        <SingleProduct product={product} />
                                    </div>

                                ))
                            }

                        </div>
                    </div> */}
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
