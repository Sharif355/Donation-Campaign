import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col   items-center justify-center mt-80">
        <h1>404!</h1>
        <h2>Page Not Found!</h2>
        <Link to="/">
          <button className="btn btn-accent normal-case">Return Home!</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
