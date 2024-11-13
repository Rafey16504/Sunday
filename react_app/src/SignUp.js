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
      className="w-screen h-screen flex items-center justify-center bg-blue-200"
      style={{
        backgroundImage: "url(./background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "bottom right",
      }}
    >
      <div className="flex flex-col items-center space-y-6 p-[2rem] rounded-lg max-w-md w-full">
        <a className="font-shalimar text-[10rem] text-cyan-800 font-bold tracking-wider -mb-6">
          Sunday
        </a>
        <input
          type="text"
          placeholder="Name"
          className="bg-white rounded-3xl px-[1rem] py-[0.5rem] text-center w-5/6 lg:w-4/6 "
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="bg-white rounded-3xl px-[1rem] py-[0.5rem] text-center w-5/6 lg:w-4/6"
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-white rounded-3xl px-[1rem] py-[0.5rem] text-center w-5/6 lg:w-4/6"
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-white rounded-3xl px-[1rem] py-[0.5rem] text-center w-5/6 lg:w-4/6"
        />
        <select
          className="bg-white rounded-3xl py-[0.5rem] text-center w-5/6 lg:w-4/6"
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
        <Link
          to="/"
          className="bg-emerald-200 hover:bg-emerald-300 rounded-3xl px-16 py-2 text-center"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
