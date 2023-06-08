import parse from "html-react-parser";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteItems from "../../../APIHooks/DeleteItems";
const ProductList = ({ products, setProducts }) => {
  const handleDelete = (_id) => {
    DeleteItems(`product/${_id}`, setProducts);
  };
  const handleUpdateProduct = (id) => {
    console.log(id);
  };
  const handleViewProductDetails = (data) => {
    console.log(data);
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

              {/* <td className="border border-gray-400 py-2 px-4 sm:px-6 text-md font-medium">
                {parse(
                  product?.description.length > 100
                    ? product?.description.slice(0, 100) + "..."
                    : product?.description
                )}
              </td> */}
              {/* <td className="border border-gray-400 py-2 px-4 sm:px-6 text-md font-medium">
                {product?.sizes.map((size) => `${size + " "}`)}
              </td> */}
              {/* <td className="border border-gray-400 py-2 px-4 sm:px-6 text-md font-medium">
                {product?.colors.map((color) => `${color + " "}`)}
              </td> */}
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
                <button onClick={() => handleUpdateProduct(product._id)}>
                  <BorderColorIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
