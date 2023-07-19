import swal from "sweetalert";
import serverUrl from "../config/Config";

const UpdatedApi = (url, setState, updatedData) => {
  fetch(`${serverUrl}/${url}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(updatedData),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      if (result.status == "success") {
        swal('Success', result?.message, 'success')
        setState(result?.data);
      }
      else {
        swal('Oops!', result?.message, 'error')
      }
    });
};

export default UpdatedApi;
