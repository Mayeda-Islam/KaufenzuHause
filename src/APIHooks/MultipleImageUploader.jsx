import serverUrl from "../config/Config";

export const MultipleImageUploader = (formData, setImage) => {
  fetch(`${serverUrl}/multipleImageUpload`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Data: ", data);
      if (data.status === "success") {
        console.log("Response:", data);
        setImage(data.url);
      }
    });
};
