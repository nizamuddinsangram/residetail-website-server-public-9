import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
const Navbar = () => {
  const { user, logOut, setUser } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu z-[100] menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "btn bg-teal-500 border-0" : "default"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "btn bg-teal-500 border-0" : "default"
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? "btn bg-teal-500 border-0" : "default"
                }
              >
                Register
              </NavLink>
            </li>
            <li>
              {user && (
                <NavLink
                  to="/aboutUs"
                  className={({ isActive }) =>
                    isActive ? "btn bg-teal-500 border-0" : "default"
                  }
                >
                  About Us
                </NavLink>
              )}
            </li>

            <li>
              {user && (
                <NavLink
                  to="/updateProfile"
                  className={({ isActive }) =>
                    isActive ? "btn bg-teal-500 border-0" : "default"
                  }
                >
                  Update Profile
                </NavLink>
              )}
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Residential</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "btn bg-teal-500 border-0" : "default"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "btn bg-teal-500 border-0" : "default"
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? "btn bg-teal-500 border-0" : "default"
              }
            >
              Register
            </NavLink>
          </li>
          <li>
            {user && (
              <NavLink
                to="/aboutUs"
                className={({ isActive }) =>
                  isActive ? "btn bg-teal-500 border-0" : "default"
                }
              >
                About Us
              </NavLink>
            )}
          </li>

          <li>
            {user && (
              <NavLink
                to="/updateProfile"
                className={({ isActive }) =>
                  isActive ? "btn bg-teal-500 border-0" : "default"
                }
              >
                Update Profile
              </NavLink>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <img
              src={user?.photoURL}
              alt="img"
              title={user?.displayName}
              className="w-10 h-10 rounded-full object-cover"
            />
            <button className="btn btn-sm" onClick={handleLogOut}>
              logOut
            </button>
          </>
        ) : (
          <Link to="/login" className="btn btn-sm">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
// <nav className="bg-teal-400 bg-opacity-50	 	shadow-lg	 py-4 rounded-t-lg">
//   <div className="container mx-auto flex items-center justify-between">
//     {/* Left side */}
//     <div className="flex items-center">
//       <span className=" text-xl font-semibold text-cyan-700">
//         My Home
//         <br />
//         <span className="text-green-600">Real State</span>
//       </span>
//     </div>

//     {/* Middle */}
//     <div className="flex items-center space-x-10">
//       <NavLink
//         to="/"
//         className={({ isActive }) =>
//           isActive ? "btn bg-teal-500 border-0" : "default"
//         }
//       >
//         Home
//       </NavLink>
//       <NavLink
//         to="/login"
//         className={({ isActive }) =>
//           isActive ? "btn bg-teal-500 border-0" : "default"
//         }
//       >
//         Login
//       </NavLink>
//       <NavLink
//         to="/register"
//         className={({ isActive }) =>
//           isActive ? "btn bg-teal-500 border-0" : "default"
//         }
//       >
//         Register
//       </NavLink>
//       {user && (
//         <NavLink
//           to="/aboutUs"
//           className={({ isActive }) =>
//             isActive ? "btn bg-teal-500 border-0" : "default"
//           }
//         >
//           About Us
//         </NavLink>
//       )}

//       {user && (
//         <NavLink
//           to="/updateProfile"
//           className={({ isActive }) =>
//             isActive ? "btn bg-teal-500 border-0" : "default"
//           }
//         >
//           Update Profile
//         </NavLink>
//       )}
//     </div>

//     {/* Right side */}
//     <div className="flex items-center">
//       {user ? (
//         <>
//           <img
//             src={user?.photoURL}
//             alt="img"
//             title={user?.displayName}
//             className="w-10 h-10 rounded-full object-cover"
//           />
//           <button className="btn btn-sm" onClick={handleLogOut}>
//             logOut
//           </button>
//         </>
//       ) : (
//         <Link to="/login" className="btn btn-sm">
//           Login
//         </Link>
//       )}
//     </div>
//   </div>
// </nav>
{
  /* <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              {" "}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "btn bg-teal-500 border-0" : "default"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "btn bg-teal-500 border-0" : "default"
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? "btn bg-teal-500 border-0" : "default"
                }
              >
                Register
              </NavLink>
            </li>
            <li>
              {" "}
              {user && (
                <NavLink
                  to="/aboutUs"
                  className={({ isActive }) =>
                    isActive ? "btn bg-teal-500 border-0" : "default"
                  }
                >
                  About Us
                </NavLink>
              )}
            </li>

            <li>
              {user && (
                <NavLink
                  to="/updateProfile"
                  className={({ isActive }) =>
                    isActive ? "btn bg-teal-500 border-0" : "default"
                  }
                >
                  Update Profile
                </NavLink>
              )}
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "btn bg-teal-500 border-0" : "default"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "btn bg-teal-500 border-0" : "default"
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? "btn bg-teal-500 border-0" : "default"
              }
            >
              Register
            </NavLink>
          </li>
          <li>
            {user && (
              <NavLink
                to="/aboutUs"
                className={({ isActive }) =>
                  isActive ? "btn bg-teal-500 border-0" : "default"
                }
              >
                About Us
              </NavLink>
            )}
          </li>
          <li>
            {" "}
            {user && (
              <NavLink
                to="/updateProfile"
                className={({ isActive }) =>
                  isActive ? "btn bg-teal-500 border-0" : "default"
                }
              >
                Update Profile
              </NavLink>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <img
              src={user?.photoURL}
              alt="img"
              title={user?.displayName}
              className="w-10 h-10 rounded-full object-cover"
            />
            <button className="btn btn-sm" onClick={handleLogOut}>
              logOut
            </button>
          </>
        ) : (
          <Link to="/login" className="btn btn-sm">
            Login
          </Link>
        )}
      </div>
    </div> */
}
