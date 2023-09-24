import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between  container mx-auto pt-14 ">
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
  );
};

export default Navbar;
