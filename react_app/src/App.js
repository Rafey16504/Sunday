import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const App = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div
        className="w-full h-full bg-blue-200 flex items-center justify-center"
        style={{
          backgroundImage: "url(./background.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "bottom right",
        }}
      >
        <div className="flex flex-col h-4/6 md:h-3/4 lg:h-3/4 items-center space-y-6 w-full max-w-sm">
          <a className="font-shalimar text-[10rem] text-cyan-800 font-bold tracking-wider -mb-6">
            Sunday
          </a>
          <div className="space-y-3 w-9/12 md:w-7/12 lg:w-8/12 flex flex-col items-center">
            <input
              type="text"
              placeholder="Email"
              className="bg-white rounded-3xl px-[0.5rem] py-[0.5rem] text-center w-11/12 md:w-full lg:w-full"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-white rounded-3xl px-[0.5rem] py-[0.5rem] text-center w-11/12 md:w-full lg:w-full"
            />
            <Link
              to="/"
              className="bg-emerald-200 hover:bg-emerald-300 rounded-3xl px-[4.6rem] py-[0.3rem]"
            >
              Sign in
            </Link>
            <p className="text-center">
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
