import { useNavigate } from "react-router-dom";
import checkmark from "../images/checkmark.png";

const Login = () => {
  const navigate = useNavigate();

  const NavigateToLogin = () => {
    navigate("/main/dashboard");
  };

  return (
    <div
      className="flex 
        flex-col 
        h-screen
        w-screen
        md:flex-row"
    >
      {/* LEFT SIDE */}
      <div
        className="bg-[rgb(27,34,34)] 
    w-full md:w-1/2 
    flex-1 
    p-14 
    flex flex-col justify-between"
      >
        {/* Header */}
        <header>
          <div className="flex items-center">
            <div className="bg-emerald-600 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white">
              W
            </div>
            <span className="ml-4 text-white text-xl font-bold">
              WealthWise
            </span>
          </div>
        </header>

        {/* Middle Content */}
        <div>
          <h1 className="font-bold text-5xl text-white leading-tight">
            Master your money.
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-md">
            Stop guessing where your money goes. Track expenses, set smart
            budgets, and visualize your spending habits in one beautiful
            dashboard.
          </p>

          <div className="mt-10 space-y-5 text-white text-lg">
            <div className="flex items-center">
              <img src={checkmark} className="mr-3 w-5 h-5" alt="check" />
              Smart budget tracking
            </div>

            <div className="flex items-center">
              <img src={checkmark} className="mr-3 w-5 h-5" alt="check" />
              Visual spending insights
            </div>

            <div className="flex items-center">
              <img src={checkmark} className="mr-3 w-5 h-5" alt="check" />
              Secure & private
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-gray-500 text-sm">
          © 2026 WealthWise. All rights reserved.
        </footer>
      </div>

      {/* RIGHT SIDE */}
      <div
        className="bg-[rgb(12,18,33)] 
    w-full md:w-1/2 
    flex-1 
    flex flex-col items-center justify-center"
      >
        <h2 className="text-white text-3xl font-bold">Welcome Back</h2>

        <p className="text-gray-400 text-lg mt-3">
          Sign in to access your dashboard
        </p>

        <button
          className="mt-6 bg-emerald-400 w-80 h-12 rounded-xl text-white border border-white font-semibold hover:scale-105 transition-transform duration-200"
          onClick={NavigateToLogin}
        >
          Sign In
        </button>

        <p className="text-gray-400 text-xs mt-4 text-center">
          By signing in, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Login;
