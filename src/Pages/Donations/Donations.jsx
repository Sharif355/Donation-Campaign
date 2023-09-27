import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Donations = ({ donation }) => {
  const { id, image, category, title, text_color, description, price } =
    donation;

  const notify = () =>
    toast.success("You have successfully donated !", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const handleDonations = () => {
    const addToDonations = [];

    const donations = JSON.parse(localStorage.getItem("Donations"));

    if (!donations) {
      addToDonations.push(donation);
      localStorage.setItem("Donations", JSON.stringify(addToDonations));
    } else {
      addToDonations.push(...donations, donation);
      localStorage.setItem("Donations", JSON.stringify(addToDonations));
    }
  };

  return (
    <div className="container mx-auto">
      <div className="">
        <img className="w-full h-[50vh] relative " src={image} alt={category} />
        <div className="border border-black top-[400px] lg:top-[525px] absolute w-full container p-5 bg-[#0b0b0b80]">
          <button
            style={{ backgroundColor: text_color }}
            className="btn text-white normal-case "
            onClick={() => {
              notify(), handleDonations();
            }}
          >
            Donate {price}
          </button>
        </div>
      </div>
      <h2 className="font-bold text-4xl my-14">{title}</h2>
      <p className="text-base text-justify">{description}</p>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

Donations.propTypes = {
  donation: PropTypes.object,
};

export default Donations;
