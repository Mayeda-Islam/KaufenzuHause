import serverUrl from "../config/Config";

const GetAPI = (url, setState) => {
  fetch(`${serverUrl}/${url}`)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      if (result.status == "success") {
        setState(result?.data);
      }
    });
};

export default GetAPI;
