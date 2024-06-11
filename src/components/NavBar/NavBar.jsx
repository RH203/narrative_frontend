import { Link } from "react-router-dom";
import Buttons from "../Button/Buttons";

function NavBar() {
  return (
    <div className="navbar bg-white font-poppins shadow-sm">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-white shadow-md rounded-box w-52 font-medium text-gray-800"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>Novels</a>
              <ul className="p-1 bg-gray-500 rounded-md text-white">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="cursor-pointer font-semibold text-2xl text-indigo-400">
          Narrative
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-gray-800">
          <li className="">
            <Link to={"/"} className="focus:text-gray-800 focus:bg-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              className="focus:text-gray-800 focus:bg-gray-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={"/contact"}
              className="focus:text-gray-800 focus:bg-gray-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <details>
              <summary className="focus:text-gray-800 focus:bg-gray-300">
                Novels
              </summary>
              <ul className="p-2 bg-white">
                <li>
                  <Link
                    to={"/error"}
                    className="focus:text-gray-800 focus:bg-gray-300"
                  >
                    Category
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/novels"}
                    className="focus:text-gray-800 focus:bg-gray-300"
                  >
                    Novels
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex">
        <Buttons
          title={"Sign in"}
          link={"/sign-in"}
          style={
            "text-indigo-400block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline"
          }
        />
        <Buttons
          title={"Sign up"}
          link={"/sign-up"}
          style={
            "block py-3 text-center text-gray-700 hover:text-indigo-600 border rounded-lg md:border-none font-medium"
          }
        />
      </div>
    </div>
  );
}

export default NavBar;
