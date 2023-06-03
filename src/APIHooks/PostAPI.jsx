import serverUrl from "../config/Config";
import swal from "sweetalert";

const PostAPI = (url, productData, setState) => {
  fetch(`${serverUrl}/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      if (data?.status === "success") {
        setState(data?.data);
        swal("Congrats!", "Product Added Successfully!", "success");
      } else {
        swal("Oops!", "Something Went Wrong!", "error");
      }
    });
};
export default PostAPI;
