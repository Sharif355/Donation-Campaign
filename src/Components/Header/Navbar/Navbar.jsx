import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <div>
      {/* Navbar */}
      <div
        className={`  flex flex-col lg:flex-row gap-5 md:gap-0 md:flex-row items-center justify-between  container mx-auto py-10 ${
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
    </div>
  );
};

export default Navbar;
