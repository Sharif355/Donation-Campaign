import { NavLink, useLocation } from "react-router-dom";
import Banner from "../Banner/Banner";

const Navbar = () => {
  const location = useLocation();
  console.log(location);

  const isHome = location.pathname === "/";

  return (
    <div
      className={`hero ${
        isHome ? "h-[50vh]" : "h-[20vh]"
      } bg-cover relative   ${isHome ? " mb-32 " : ""}
      } `}
      style={{
        backgroundImage: isHome
          ? "url(https://i.ibb.co/JjVdF42/Rectangle-4281.png)"
          : "none",
      }}
    >
      <div
        className={` hero-overlay bg-opacity-90 bg-slate-100  ${
          isHome ? "block" : "hidden"
        }`}
      ></div>
      {/* Navbar */}
      <div
        className={`  absolute top-0 flex flex-col gap-5 md:gap-0 md:flex-row items-center justify-between  container mx-auto py-10 ${
          isHome ? "block" : "block"
        }`}
      >
        <div>
          <img src="https://i.ibb.co/4fDBsbz/Logo.png" alt="" />
        </div>
        <div>
          <ul className="flex gap-5">
            <li>
              <NavLink
                to="/"
                style={({ isActive, isPending }) => {
                  return {
                    color: isActive ? "red" : "",
                    backgroundColor: isPending ? "green" : "",
                    fontWeight: isActive ? "bold" : "",
                    textDecoration: isActive ? "underline" : "",
                  };
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/donation"
                style={({ isActive, isPending }) => {
                  return {
                    color: isActive ? "red" : "",
                    backgroundColor: isPending ? "green" : "",
                    fontWeight: isActive ? "bold" : "",
                    textDecoration: isActive ? "underline" : "",
                  };
                }}
              >
                Donation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                style={({ isActive, isPending }) => {
                  return {
                    color: isActive ? "red" : "",
                    backgroundColor: isPending ? "green" : "",
                    fontWeight: isActive ? "bold" : "",
                    textDecoration: isActive ? "underline" : "",
                  };
                }}
              >
                Statistics
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className=" ">
          <div className={`text-black ${isHome ? "block" : "hidden"}`}>
            <Banner></Banner>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
