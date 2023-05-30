import Swal from "sweetalert2";
import serverUrl from "../config/Config";

const PostAPI = (url, productData, reset) => {
    fetch(`${serverUrl}/${url}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data, "post method");
            // if (data?.status === "success") {
            //   setCategories(data.data);
            // }
            reset();
            // alert("Product added successfully");
            Swal.fire("Congrats!", "Product Added Successfully!", "success");
        });
}
export default PostAPI;