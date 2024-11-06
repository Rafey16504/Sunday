import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const App = () => {
  return (
    <div
      className="w-screen h-screen bg-blue-200"
      style={{
        backgroundImage: "url(./background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "bottom right",
      }}
    >
      <div className="flex flex-row justify-center items-center h-full w-full">
        <div className="w-2/12 h-4/6">
          <a className="font-shalimar text-[9rem] text-cyan-800 text-opacity-100 md:text-6xl lg:text-xl font-bold tracking-wider">
            Sunday
          </a>
        </div>
        <div className="space-y-3 w-7/12">
          <div className="">
            <input
              type="text"
              placeholder="Username"
              className="bg-white rounded-3xl px-[0.5rem] py-[0.4rem] text-center"
            />
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Password"
              className="bg-white rounded-3xl px-[0.5rem] py-[0.4rem] text-center"
            />
          </div>
          <div className="">
            <Link
              to="/"
              className="bg-emerald-200 hover:bg-emerald-300 rounded-3xl px-[4.6rem] py-[0.3rem]"
            >
              Sign in
            </Link>
          </div>
          <div className="ml-5">
            <p>
              No account?{" "}
              <Link to="/signup" className="underline hover:text-blue-500">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
