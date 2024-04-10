// import { useContext } from "react";
// import { useForm } from "react-hook-form";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import img from "../../../public/login1.avif";
// import { AuthContext } from "../../Provider/AuthProvider";

// const Test = () => {
//   const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const {
//     register,
//     handleSubmit,
//     watch,
//     reset,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = (data) => {
//     console.log(data);
//     signIn(data.email, data.password)
//       .then((result) => {
//         console.log(result.user);
//         reset();
//         navigate(location?.state ? location.state : "/");
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   };
//   const handleGoogleLogin = () => {
//     googleSignIn()
//       .then((result) => {
//         console.log(result.user);
//         navigate(location?.state ? location.state : "/");
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   };
//   const handleGithubLogin = () => {
//     githubSignIn()
//       .then((result) => {
//         console.log(result.user);
//         navigate(location?.state ? location.state : "/");
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   };
//   return (
//     <div className="flex h-screen w-full">
//       <div
//         className="w-full flex justify-center items-center bg-cover bg-center"
//         style={{ backgroundImage: `url(${img})` }}
//       >
//         <div className="w-2/6 p-8 space-y-3 mb-4 rounded-lg bg-teal-300 bg-opacity-10 text-white">
//           <h1 className="text-2xl font-bold text-center">Login</h1>
//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             noValidate
//             className="space-y-6"
//           >
//             <div className="space-y-1 text-sm">
//               <label htmlFor="email" className="block text-white">
//                 Email
//               </label>
//               <input
//                 {...register("email")}
//                 type="email"
//                 name="email"
//                 id="email"
//                 placeholder="Enter your email address"
//                 className="w-full px-4 py-3 rounded-md border-gray-700  bg-gray-200  text-black focus:border-violet-400"
//               />
//             </div>
//             <div className="space-y-1 text-sm">
//               <label htmlFor="password" className="block text-white">
//                 Password
//               </label>
//               <input
//                 {...register("password")}
//                 type="password"
//                 name="password"
//                 id="password"
//                 placeholder="Password"
//                 className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-white focus:border-violet-400"
//               />
//               <div className="flex justify-end text-xs text-white">
//                 <a href="#" className="underline">
//                   Forgot Password?
//                 </a>
//               </div>
//             </div>
//             <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-100">
//               Login
//             </button>
//           </form>
//           <div className="flex items-center pt-4 space-x-1">
//             <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
//             <p className="px-3 text-sm ">Login with social accounts</p>
//             <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
//           </div>
//           <div className="flex justify-center space-x-4">
//             <button
//               onClick={handleGoogleLogin}
//               aria-label="Log in with Google"
//               className="p-3 rounded-sm"
//             >
//               Google
//             </button>
//             <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
//               Twitter
//             </button>
//             <button
//               onClick={handleGithubLogin}
//               aria-label="Log in with GitHub"
//               className="p-3 rounded-sm"
//             >
//               GitHub
//             </button>
//           </div>
//           <p className="text-xs text-center sm:px-6 ">
//             Don't have an account?{" "}
//             <Link to="/register" className="underline text-gray-100">
//               Register
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Test;
