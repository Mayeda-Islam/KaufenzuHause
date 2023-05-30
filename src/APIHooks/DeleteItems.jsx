import Swal from "sweetalert2";
import serverUrl from "../config/Config";

const DeleteItems = (url) => {
  fetch(`${serverUrl}/${url}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.status == "success") {
        console.log("success");
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
};

export default DeleteItems;
