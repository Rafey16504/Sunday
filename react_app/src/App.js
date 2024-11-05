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
      <div className=" py-[6rem] px-[4.5rem]">
        <div>
          <a className="flex font-shalimar text-[9rem] text-cyan-800 text-opacity-100 md:text-6xl lg:text-xl font-bold tracking-wides z-10">
            Sunday
          </a>
        </div>

        <div className="py-[2rem] px-[1.7rem]">
          <div>
            <input
              type="text"
              placeholder="Username"
              className="bg-white rounded-3xl px-[0.5rem] py-[0.4rem] text-center"
            />
          </div>
          <div className="py-[1rem]">
            <input
              type="text"
              placeholder="Password"
              className="bg-white rounded-3xl px-[0.5rem] py-[0.4rem] text-center"
            />
          </div>
          <div className="absolute ">
            <Link
              to="/"
              className="bg-emerald-200 hover:bg-emerald-300 rounded-3xl px-[4.7rem] py-[0.3rem]"
            >
              Sign in
            </Link>
          </div>
          <div className="py-[2.4rem] px-[1rem] ml-[1.3rem]">
            <p>
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="px-[rem] underline hover:text-blue-500"
              >
                Sign-Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
