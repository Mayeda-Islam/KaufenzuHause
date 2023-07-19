import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteItems from "../../../APIHooks/DeleteItems";
import { useState } from "react";
import ViewProductModal from "./ViewProductModal";
import UpdateProductModal from "./UpdateProductModal";
const ProductList = ({ products, setProducts }) => {
  const [open, setOpen] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState(null);
  const [product, setProduct] = useState({});
  const handleDelete = (_id) => {
    DeleteItems(`product/${_id}`, setProducts);
  };
  const handleUpdateProduct = (selectedProduct) => {
    setOpenUpdateModal(true);
    setUpdatedProduct(selectedProduct);
  };
  const handleViewProductDetails = (data) => {
    setOpen(true);
    setProduct(data);
  };
  return (
    <div className="overflow-x-auto">
      <table className="border-collapse border border-gray-400 w-full">
        <thead className="bg-gradient-to-r from-[#031f4bee] to-[#55c3c1f7] text-white font-bold text-lg">
          <tr className="text-center text-white">
            <th className="px-6 py-4  ">SL</th>

            <th className="px-6 py-4  ">Product Name</th>

            <th className="px-6 py-4  ">Price</th>
            <th className="px-6 py-4  ">Category</th>
            <th className="px-6 py-4  ">Total product</th>

            <th className="px-6 py-4  ">View</th>

            <th className="px-6 py-4  ">Delete</th>
            <th className="px-6 py-4  ">Edit</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, index) => (
            <tr className="text-center " key={index}>
              <td className="border border-gray-400 py-2 px-4 sm:px-6">
                {index + 1}
              </td>

              <td className="border border-gray-400 py-2 px-4 sm:px-6 text-md font-medium">
                {product.productTitle}
              </td>
              <td className="border border-gray-400 py-2 px-4 sm:px-6 text-md font-medium">
                {product.productPrice}
              </td>

              <td className="border border-gray-400 py-2 px-4 sm:px-6 text-md font-medium">
                {product.category}
              </td>
              <td className="border border-gray-400 py-2 px-4 sm:px-6 text-md font-medium">
                {product.totalProduct}
              </td>
              {/* <td className="border border-gray-400 py-2 px-4 sm:px-6 text-md font-medium">
                {product.brand}
              </td> */}
              {/* <td className="border border-gray-400 py-2 px-4 sm:px-6 text-md font-medium">
                {parse(
                  product.shipping.length > 100
                    ? product.shipping.slice(0, 100) + "..."
                    : product.shipping
                )}
              </td> */}
              <td
                className="border border-gray-400 py-2 px-4 sm:px-6 text-gray-700"
                onClick={() => handleViewProductDetails(product)}
              >
                <VisibilityIcon />
              </td>
              <td
                className="border border-gray-400 py-2 px-4 sm:px-6 text-red-400"
                onClick={() => handleDelete(product._id)}
              >
                <DeleteForeverIcon />
              </td>
              <td className="border border-gray-400 py-2 px-4 sm:px-6 text-[#55c3c1f7]">
                <button onClick={() => handleUpdateProduct(product)}>
                  <BorderColorIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ViewProductModal
        open={open}
        setOpen={setOpen}
        product={product}
      ></ViewProductModal>
      <div>
        <UpdateProductModal
          setOpenUpdateModal={setOpenUpdateModal}
          openUpdateModal={openUpdateModal}
          updatedProduct={updatedProduct}
          setProducts={setProducts}
        ></UpdateProductModal>
      </div>
    </div>
  );
};

export default ProductList;
