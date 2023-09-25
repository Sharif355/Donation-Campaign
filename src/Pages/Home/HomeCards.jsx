import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HomeCards = ({ data }) => {
  const { id, image, category, title, card_bg, category_bg, text_color } = data;

  return (
    <Link to={`/donations/${id}`}>
      <div className="border rounded-lg " style={{ backgroundColor: card_bg }}>
        <img className="w-full h-[194px]" src={image} alt={category} />
        <button
          style={{ backgroundColor: category_bg, color: text_color }}
          className="px-5 py-2  m-2 normal-case border rounded-lg"
        >
          {category}
        </button>
        <h5
          className="text-sm md:text-lg lg:text-xl mx-2 md:mx-2 lg:mx-4 pb-3"
          style={{ color: text_color }}
        >
          {title}
        </h5>
      </div>
    </Link>
  );
};

HomeCards.propTypes = {
  data: PropTypes.object,
};

export default HomeCards;
