import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="h-96 flex flex-col justify-center items-center">
      <p className="font-bold text-3xl">404</p>
      <p className="text-2xl">Page not found.</p>
      <Link to="/" className="text-main-color">
        Return home
      </Link>
    </div>
  );
};

export default NotFoundPage;
