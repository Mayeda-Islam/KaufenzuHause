import Swal from "sweetalert2";
import serverUrl from "../config/Config";
import swal from "sweetalert";

const DeleteItems = (url, setState) => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      fetch(`${serverUrl}/${url}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log("data", data);
          setState(data.data);
          swal("File has been deleted!", {
            icon: "success",
          });
        });
    } else {
      swal("Your imaginary file is safe!");
    }
  });
};

export default DeleteItems;
