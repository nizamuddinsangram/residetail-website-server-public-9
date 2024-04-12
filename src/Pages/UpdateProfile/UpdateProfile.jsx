import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const UpdateProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const handleSave = () => {
    console.log("hello");
    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photoURL });
        Swal.fire({
          icon: "success",
          title: "Registration Successful!",
          text: "You have successfully registered.",
        });
      })
      .catch(() => {});
  };
  return (
    <>
      <Helmet>
        <title>Residential | UpdateProfile</title>
      </Helmet>
      <div>
        <h2>Profile</h2>
        <form>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              title="read Only"
              type="email"
              value={user?.email}
              readOnly
            />
          </div>
          <div>
            <label>Photo URL:</label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />
          </div>
          <button type="button" onClick={handleSave}>
            Save
          </button>
        </form>
        {/* {success && <p>Profile updated successfully!</p>} */}
      </div>
    </>
  );
};

export default UpdateProfile;
