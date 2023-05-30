import serverUrl from "../config/Config";

const DeleteItems = (url) => {
  fetch(`${serverUrl}/${url}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    });
};

export default DeleteItems;
