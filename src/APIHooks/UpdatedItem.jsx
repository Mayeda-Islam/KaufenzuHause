import SuccessSweetAlert from "../Shared/SuccessSweetAlert/SuccessSweetAlert";
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
      if (result.status == "success") {
        SuccessSweetAlert();
        setState(result?.data);
      }
    });
};

export default UpdatedApi;
