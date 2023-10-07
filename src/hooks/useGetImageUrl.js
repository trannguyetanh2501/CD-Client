import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import useFireBase from "../shared/helper/useFireBase";

export default function useGetImageUrl() {
  const { storage } = useFireBase();
  const [imageCover, setImageCover] = useState("");
  const getImageUrl = (e) => {
    const file = e.target.files[0];
    console.log("file", file);
    setImageCover(file);

    // // Tạo tham chiếu đến nơi lưu trữ ảnh trên firebase-storage
    // const storageRef = ref(storage, file.name);
    // // Upload ảnh lên firebase
    // const uploadTask = uploadBytesResumable(storageRef, file);
    // // Register three observers:
    // // 1. 'state_changed' observer, called any time the state changes
    // // 2. Error observer, called on failure
    // // 3. Completion observer, called on successful completion
    // uploadTask.on(
    //   "state_changed",
    //   (snapshot) => {},
    //   (error) => {
    //     // Handle unsuccessful uploads
    //     console.log(error.message);
    //   },
    //   () => {
    //     // Handle successful uploads on complete
    //     // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    //     getDownloadURL(uploadTask.snapshot.ref)
    //       .then((url) => setImageCover(url))
    //       .catch((err) => {
    //         console.log(err.message);
    //       });
    //   }
    // );
  };

  return {
    imageCover,
    getImageUrl,
    setImageCover,
  };
}
