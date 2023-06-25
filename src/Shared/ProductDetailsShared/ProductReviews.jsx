import React, { useContext, useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import swal from "sweetalert";
import UpdatedApi from "../../APIHooks/UpdatedItem";
import { Context } from "../../ContextProvider/ContextProvider";
import moment from "moment";
import serverUrl from "../../config/Config";
import { Link } from "react-router-dom";

const ProductReviews = ({ product, setProduct }) => {
  const { user } = useContext(Context);

  const [reviewText, setReviewText] = useState("");
  const [userMap, setUserMap] = useState({});

  const submitReview = (e) => {
    e.preventDefault();

    // console.log("reviewText", reviewText);
    if (reviewText?.length < 4) {
      return swal("Warning", "Review should be longer", "warning");
    }
    UpdatedApi("product/review", setProduct, {
      productId: product?._id,
      email: user?.email,
      text: reviewText,
    });
  };

  useEffect(() => {
    const fetchUserInformation = async () => {
      try {
        const uniqueEmails = [
          ...new Set(product?.reviews.map((review) => review.email)),
        ];

        const response = await fetch(
          `${serverUrl}/users/reviews/bulkUser?emails=${uniqueEmails.join(",")}`
        );
        const userInformation = await response.json();

        if (Array.isArray(userInformation)) {
          const userMap = {};
          userInformation.forEach((user) => {
            userMap[user.email] = {
              name: user?.fullName,
              image: user?.image,
            };
          });

          setUserMap(userMap);
        } else {
          console.log("Invalid user information format");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserInformation();
  }, [product?.reviews]);

  const deleteReview = async (productId, reviewIndex) => {
    try {
      const response = await fetch(
        `${serverUrl}/products/${productId}/reviews/${reviewIndex}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (response.ok) {
        swal("Success", `${data?.message}`, "success");
        setProduct(data?.data);
      } else {
        swal("Error", `${data?.message}`, "error");
      }
    } catch (error) {
      swal("Error", "Error deleting review", "error");
    }
  };

  return (
    <div className="pt-5 flex flex-wrap lg:flex-nowrap">
      <div className="w-full sm:w-full lg:w-6/12">
        <div className="flex items-start justify-between pb-5 rounded-t bg-transparent">
          <h3 className="text-xl  text-textColor font-semibold">All Reviews</h3>
        </div>
        <div className="mx-2 border-b border-blue-500 shadow-md px-5 py-4 rounded-md  mb-4">
          {product?.reviews?.length > 0 ?

            product?.reviews?.map((review, index) => {
              const { email, text, createdAt } = review;
              const userInformation = userMap[email];
              return (
                <div
                  key={index}
                  className="m-4 flex  md:flex-row md:space-x-6 justify-between "
                >
                  <div className="flex justify-center">
                    <img
                      className="object-cover w-20 lg:w-16 lg:h-16 rounded-full bg-gray-500"
                      src={
                        userInformation?.image ||
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXnHCfhPKKAy1zSl8__FmI1hsMmSR-MVgh5IcfD_-43Q&s"
                      }
                      alt="profile img"
                    />
                    <div className="flex  justify-between ml-4">
                      <div className="flex flex-col my-4 md:my-0">
                        <div className="flex flex-col ">
                          <h4 className="font-bold">
                            {userInformation?.name || "Anonymous"}
                          </h4>
                          <span className="text-xs text-gray-400">
                            {moment().diff(createdAt, "days") === 0
                              ? "Today"
                              : `${moment().diff(createdAt, "days")} days age`}
                          </span>
                        </div>

                        <div className="hidden md:block lg:block mt-3">
                          <p className="text-sm text-gray-600">{text}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {email === user?.email && (
                    <div className="flex justify-around">
                      <span className="cursor-pointer text-lg text-red-500">
                        <RiDeleteBin6Line
                          onClick={() => deleteReview(product?._id, index)}
                        />
                      </span>
                    </div>
                  )}
                </div>
              );
            })
            :
            <span>
              <p className="my-10 text-center font-semibold text-lg">No Review Yet</p>
            </span>
          }


          <div className="block md:hidden lg:hidden mt-3">
            <p className="text-sm text-gray-600">
              {
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molliti"
              }
            </p>
          </div>
        </div>
        :

      </div>
      <div className="w-full sm:w-full lg:w-6/12">
        <div className="mx-4  border-0 rounded-md sm:w-[95%]  lg:w-[97%] bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between pb-5 rounded-t bg-transparent">
            <h3 className="text-[22px]  text-textColor font-semibold">
              Please Leave your Review here
            </h3>
          </div>
          {/*body*/}

          {
            user?.email ?
              <div className=" px-6 py-8   w-full shadow-sm shadow-gray-200 border border-gray-200 rounded-md">
                <form onSubmit={submitReview}>
                  <div className="mb-3">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                      Your Review
                    </label>
                    <textarea
                      rows="4"
                      className=" mb-5 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-lightGray"
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      placeholder="Write your Review here..."
                      required
                    ></textarea>
                  </div>
                  <input
                    value="Submit"
                    type="submit"
                    className=" my-2 px-4 md:px-8 py-2 md:text-lg font-medium text-white bg-primary hover:bg-secondary rounded-lg  
                               flex items-center"
                  />
                </form>
              </div>
              :
              <div>
                <p>
                  Please <Link to={'/login'} className="text-blue-500 font-medium underline">Login</Link> to give a review.
                </p>
              </div>
          }
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
