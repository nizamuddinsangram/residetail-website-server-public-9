import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  const handleSave = async () => {
    try {
      await firebase.auth().currentUser.updateProfile({
        displayName: name,
        photoURL: photoURL,
      });
      setSuccess(true);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={user?.displayName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={user?.email} readOnly />
        </div>
        <div>
          <label>Photo URL:</label>
          <input
            type="text"
            value={user?.photoURL}
            // onChange={(e) => setPhotoURL(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
      {/* {success && <p>Profile updated successfully!</p>} */}
    </div>
  );
};

export default UpdateProfile;
