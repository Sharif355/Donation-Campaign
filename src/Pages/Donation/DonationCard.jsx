import PropTypes from "prop-types";

const DonationCard = ({ donation }) => {
  const { image, category, title, price, text_color, card_bg, category_bg } =
    donation;
  return (
    <div className=" flex flex-col md:flex-row   items-center justify-center rounded-l-lg  ">
      <img
        className="w-60 md:w-56 h-48 lg:h-full "
        src={image}
        alt={category}
      />

      <div
        style={{ backgroundColor: card_bg }}
        className="flex flex-col items-start p-6 justify-start rounded-lg  w-60 md:w-full  "
      >
        <button
          style={{ backgroundColor: category_bg, color: text_color }}
          className="px-5 normal-case border rounded-r-lg"
        >
          {category}
        </button>
        <div className="flex flex-col ">
          <h3 className="text-xl  py-2">{title}</h3>
          <p className="pb-2" style={{ color: text_color }}>
            {price}
          </p>
        </div>
        <button
          style={{ backgroundColor: text_color }}
          className="px-5 py-2 text-white normal-case border rounded-lg"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

DonationCard.propTypes = {
  donation: PropTypes.object,
};

export default DonationCard;
