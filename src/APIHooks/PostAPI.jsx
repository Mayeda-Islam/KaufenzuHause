import Swal from "sweetalert2";
import serverUrl from "../config/Config";

const PostAPI = (url, productData, reset, setState) => {
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
            if (data.status === 'success') {
                setState(data?.data)
                reset();
                Swal.fire("Congrats!", "Product Added Successfully!", "success");
            }
            else {
                Swal.fire("Oops!", "Something Went Wrong!", "error");
            }


        });

}
export default PostAPI;