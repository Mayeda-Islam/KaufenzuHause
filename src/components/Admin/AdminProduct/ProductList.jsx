import parse from "html-react-parser";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
const ProductList = ({ products }) => {
  return (
    <div className="overflow-x-auto">
      <table className="border-collapse border border-gray-400 w-full">
        <thead className="bg-gradient-to-r from-[#031f4bee] to-[#55c3c1f7] text-white font-bold text-lg">
          <tr className="text-center text-white">
            <th className="px-6 py-4  ">SL</th>

            <th className="px-6 py-4  ">Product Name</th>

            <th className="px-6 py-4  ">Price</th>
            <th className="px-6 py-4  ">Previous price</th>
            <th className="px-6 py-4  ">Total product</th>
            <th className="px-6 py-4  ">Category</th>

            <th className="px-6 py-4  ">Brand</th>
            <th className="px-6 py-4  ">Colors</th>
            <th className="px-6 py-4  ">Sizes</th>
            <th className="px-6 py-4  ">Description</th>

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
                {product.previousPrice}
              </td>
              <td className="border border-gray-400 py-2 px-4 sm:px-6 text-md font-medium">
                {product.category}
              </td>
              <td className="border border-gray-400 py-2 px-4 sm:px-6 text-md font-medium">
                {product.brand}
              </td>
              <td></td>
              <td className="border border-gray-400 py-2 px-4 sm:px-6 text-md font-medium">
                {parse(product.shipping)}
              </td>
              <td className="border border-gray-400 py-2 px-4 sm:px-6 text-md font-medium">
                {parse(product.delivery)}
              </td>
              <td className="border border-gray-400 py-2 px-4 sm:px-6 text-md font-medium">
                {parse(product.description)}
              </td>
              <td className="border border-gray-400 py-2 px-4 sm:px-6 text-red-400">
                <DeleteForeverIcon />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
