import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  const bgImage = {
    backgroundImage: "url('https://i.ibb.co/wLfW5dH/upic-team-cta.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={bgImage} className="h-[600px]">
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
};

export default Header;
