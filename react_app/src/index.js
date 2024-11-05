import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App"; // Adjust the import based on your project structure
import SignUp from "./SignUp";

ReactDOM.render(
  <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* Use element prop instead of component */}
        <Route path="/signup" element={<SignUp />} /> {/* Use element prop instead of component */}
      </Routes>
    </Router>,
  document.getElementById("root")
);
