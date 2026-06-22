import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <section role="main" className="h-screen flex flex-col justify-center items-center gap-6 bg-white">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary" aria-hidden="true">404</h1>
        <p className="text-2xl font-semibold text-gray-600 mt-4">
          Page Not Found
        </p>
        <p className="text-gray-400 mt-2 max-w-md mx-auto">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
        </p>
      </div>
      <Link aria-label="Go back to home page"
        to="/"
        className="bg-primary text-white py-3 px-8 font-medium hover:bg-gray-800 transition-colors duration-300"
      >
        Back to Home
      </Link>
    </section>
  );
};

export default NoPage;
