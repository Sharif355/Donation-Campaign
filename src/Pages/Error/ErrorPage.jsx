import { Link } from "react-router-dom";
import { BsEmojiFrown } from "react-icons/bs";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col   items-center justify-center mt-72 text-gray-400 space-y-3">
        <BsEmojiFrown className="text-9xl "></BsEmojiFrown>
        <h1>404!</h1>
        <h2>Page Not Found!</h2>
        <p>The Page you looking for doesn't exit or an other error occurred.</p>
        <Link to="/">
          <button className="btn btn-accent normal-case">Return Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
