import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";

const MainLayout = () => {
  const navigation = useNavigation();
  return (
    <div className="px-2">
      <Navbar></Navbar>
      {navigation.state === "loading" ? (
        <p className="text-center">
          <span className="loading loading-spinner text-info  "></span>
        </p>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default MainLayout;
