import axios from "axios";
import Swal from "sweetalert2";
import serverUrl from "../config/Config";

const MultiImagesUpload = (url, formData, setImages) => {
    axios.post(`${serverUrl}/${url}`, formData)
        .then(response => {
            if (response?.data.status === 'success') {
                setImages(response?.data?.imageURLs)
            }
        })
        .catch(error => {
            Swal.fire("Oops!", "Something went wrong!", "error");
            console.log(error)
        });
}

export default MultiImagesUpload;