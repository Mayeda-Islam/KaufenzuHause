import React, { useEffect } from "react";

import ProductDetailsTabs from "../../Shared/ProductDetailsShared/ProductDetailsTabs";
import ProductInfo from "../../Shared/ProductDetailsShared/ProductInfo";
import GetAPI from "../../APIHooks/GetAPI";
import { useParams } from "react-router-dom";
import ProductSideGalleryMobile from "../../Shared/ProductDetailsShared/ProductSideGalleryMobile";
import ImagesGallery from "../../Shared/ProductDetailsShared/ImagesGallery";
import SingleProduct from "../../Shared/SingleProduct/SingleProduct";
import { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState({});
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    GetAPI(`products/${id}`, setProduct);
  }, [id]);
  useEffect(() => {
    GetAPI(`product/${product?.category}`, setProducts);
  }, [product]);

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
          <ProductDetailsTabs product={product} setProduct={setProduct} />
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
          <div className="">
            <Swiper
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                },
                // when window width is >= 400px
                400: {
                  slidesPerView: 2,
                },

                // when window width is >= 640px
                640: {
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 3,
                },
                // when window width is >= 1024px
                1024: {
                  width: 1024,
                  slidesPerView: 4,
                },
                1400: {
                  width: 1400,
                  slidesPerView: 5,
                },
                1916: {
                  width: 1916,
                  slidesPerView: 5,
                },
              }}
              slidesPerView={4}
              // slidesPerView="auto"
              // loop={true}
              loopfillgroupwithblank="false"
              // navigation={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
                // loop: true
              }}
              // centeredSlides={true}
              modules={[Pagination, Navigation, Autoplay]}
              // freeMode={true}
              // modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              {products?.slice(0, 5)?.map((product) => {
                const { _id } = product;
                return (
                  <SwiperSlide key={_id}>
                    <SingleProduct product={product} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
