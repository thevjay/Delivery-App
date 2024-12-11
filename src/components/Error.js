import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-600">Oops!</h1>
      <p className="text-xl text-gray-700 mt-4">
        Something went wrong or the page you are looking for does not exist.
      </p>
      <p className="text-lg text-gray-500 mt-2">
        Error 404 - Page Not Found
      </p>
      <div className="mt-6">
        <Link
          to="/"
          className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
