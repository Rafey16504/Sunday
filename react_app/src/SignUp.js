import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [selectedProfession, setSelectedProfession] = useState("");

  const handleChange = (e) => {
    setSelectedProfession(e.target.value);
  };
  useEffect(() => {
    setSelectedProfession("");
  }, []);

  return (
    <div
      className="w-screen h-screen bg-blue-200"
      style={{
        backgroundImage: "url(./background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "bottom right",
      }}
    >
      <div className=" py-[6rem] px-[5rem]">
        <div>
          <a className="flex font-shalimar text-[9rem] -ml-[0.5rem] text-cyan-800 text-opacity-100 md:text-6xl lg:text-xl font-bold tracking-wides z-10">
            Sunday
          </a>
        </div>

        <div className="py-[1rem] px-[1.7rem]">
          <div>
            <input
              type="text"
              placeholder="Username"
              className="bg-white rounded-3xl -ml-[0.5rem] px-[0.5rem] py-[0.4rem] text-center"
            />
          </div>
          <div className="py-[1rem]">
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-white rounded-3xl -ml-[0.5rem] px-[0.5rem] py-[0.4rem] text-center"
            />
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Password"
              className="bg-white rounded-3xl -ml-[0.5rem] px-[0.5rem] py-[0.4rem] text-center"
            />
          </div>
          <div className="py-[1rem]">
            <input
              type="text"
              placeholder="Email"
              className="bg-white rounded-3xl -ml-[0.5rem] px-[0.5rem] py-[0.4rem] text-center"
            />
          </div>
          <div className="-ml-[0.8rem] px-[2.2rem]">
            <select
              className="bg-white rounded-3xl py-[0.4rem] text-center w-auto"
              value={selectedProfession} 
              onChange={handleChange}
            >
              <option value="" disabled>
               Select Profession
              </option>
              <option value="student">Student</option>
              <option value="freelancer">Freelancer</option>
              <option value="jobholder">Jobholder</option>
            
            </select>
          </div>
          <div className="absolute py-[1.2rem]">
            <Link
              to="/"
              className="bg-emerald-200 hover:bg-emerald-300 rounded-3xl px-[4rem] py-[0.5rem]"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
