import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-[#55e190] pt-20">
      <p className="font-bold text-lg mb-4">Click below to view the Dashboard</p>
      <Link to="/dashboard" className="flex items-center text-blue-600 hover:text-blue-800">
        <span className="mr-2">View Dashboard</span>
        <svg
          className="w-6 h-6 transform transition-transform hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Home;

