// import { updateProfile } from "firebase/auth";
// import { useContext, useState } from "react";
// import Swal from "sweetalert2";

// import { useForm } from "react-hook-form";
// import { FaEye, FaRegEyeSlash } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../Provider/AuthProvider";

// const Test = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const { createUser } = useContext(AuthContext);

//   const {
//     register,
//     handleSubmit,
//     watch,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//     console.log(data.email, data.password);
//     createUser(data.email, data.password)
//       .then((result) => {
//         console.log(result.user);
//         updateProfile(result.user, {
//           displayName: data.name,
//           photoURL: data.photo,
//         })
//           .then(() => {
//             reset();
//             Swal.fire({
//               icon: "success",
//               title: "Registration Successful!",
//               text: "You have successfully registered.",
//             });
//           })
//           .catch(() => {});
//       })
//       .catch((err) => {
//         console.log(err.message);
//         Swal.fire({
//           icon: "error",
//           title: "Registration Failed",
//           text: err.message,
//         });
//       });
//   };
//   const togglePassword = () => {
//     setShowPassword(!showPassword);
//   };
//   return (
//     <div className="flex h-screen w-full">
//       <div className="w-full flex justify-center items-center bg-cover bg-center">
//         <div className="w-2/6 p-8 space-y-3 mb-4 rounded-lg bg-teal-300 bg-opacity-10 text-gray-300">
//           <h1 className="text-2xl font-bold text-center">Register</h1>
//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             noValidate=""
//             className="space-y-6"
//           >
//             <div className="space-y-1 text-sm">
//               <label htmlFor="name" className="block ">
//                 Name
//               </label>
//               <input
//                 {...register("name", { required: true })}
//                 aria-invalid={errors.name ? "true" : "false"}
//                 type="text"
//                 name="name"
//                 id="name"
//                 placeholder="Enter your name "
//                 className="w-full px-4 py-3 rounded-md border-gray-700 bg-rose-100 text-black focus:border-violet-400"
//               />
//               {/*  */}
//               {errors.name?.type === "required" && (
//                 <p role="alert">First name is required</p>
//               )}
//               {/*  */}
//             </div>
//             <div className="space-y-1 text-sm">
//               <label htmlFor="photo" className="block">
//                 Photo Url
//               </label>
//               <input
//                 {...register("photo", { required: true })}
//                 type="text"
//                 name="photo"
//                 id="photo"
//                 placeholder="photoUrl"
//                 className="w-full px-4 py-3 rounded-md border-gray-700 bg-rose-100 text-white focus:border-violet-400"
//               />
//             </div>
//             <div className="space-y-1 text-sm">
//               <label htmlFor="email" className="block">
//                 Email
//               </label>
//               <input
//                 {...register("email", { required: true })}
//                 type="email"
//                 name="email"
//                 id="email"
//                 placeholder="Enter your email address"
//                 className="w-full px-4 py-3 rounded-md border-gray-700 bg-rose-100 text-white focus:border-violet-400"
//               />
//             </div>
//             <div className="space-y-1 text-sm">
//               <label htmlFor="password" className="block ">
//                 Password
//               </label>
//               {/* eye  */}
//               <div className="relative flex  items-center">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   {...register("password", {
//                     required: "password is required",
//                     minLength: {
//                       value: 6,
//                       message: "your password must be at least 6 characters",
//                     },
//                     pattern: {
//                       value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
//                       message:
//                         "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long",
//                     },
//                   })}
//                   name="password"
//                   id="password"
//                   placeholder="Password"
//                   className="w-full px-4 py-3 rounded-md border-gray-700 bg-rose-100 text-black focus:border-violet-400"
//                 />

//                 {showPassword ? (
//                   <FaRegEyeSlash
//                     className="text-black text-xl absolute right-2 cursor-pointer"
//                     onClick={togglePassword}
//                   />
//                 ) : (
//                   <FaEye
//                     className="text-black  text-xl absolute right-2 cursor-pointer"
//                     onClick={togglePassword}
//                   />
//                 )}
//               </div>
//               {errors.password && <p role="alert">{errors.password.message}</p>}
//             </div>
//             <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">
//               Register
//             </button>
//           </form>

//           <p className="text-xs text-center sm:px-6 text-gray-400">
//             Already have an account
//             <Link
//               to="/login"
//               rel="noopener noreferrer"
//               className="underline text-gray-100"
//             >
//               Login
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Test;
