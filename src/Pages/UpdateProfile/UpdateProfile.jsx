import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const { user, setUser, setLoading, loading } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = (e) => {
    e.preventDefault();

    setLoading(true);
    console.log("hello");
    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photoURL });
        setName("");
        setPhotoURL("");

        Swal.fire({
          icon: "success",
          title: "update profile Successful!",
          text: "You have successfully update your profile.",
        });
        navigate("/");
        setLoading(false);
      })
      .catch(() => {});
  };
  return (
    <>
      <Helmet>
        <title>Residential | UpdateProfile</title>
      </Helmet>
      <div className=" mx-auto px-4 mb-10">
        <h2 className="text-2xl text-center font-bold mt-8 mb-4">Profile</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block mb-2">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email:</label>
            <input
              type="email"
              id="email"
              value={user?.email}
              readOnly
              className="w-full px-3 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Photo URL:</label>
            <input
              type="text"
              id="photoURL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <button
            type="button"
            onClick={handleUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            update
          </button>
        </form>
        {/* {success && <p>Profile updated successfully!</p>} */}
      </div>
    </>
  );
};

export default UpdateProfile;
{
  /* <Helmet>
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
        {/* {success && <p>Profile updated successfully!</p>} */
}
{
  /* </div>  */
}
