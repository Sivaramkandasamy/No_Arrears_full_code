import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home/Home";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/Signup/Signup.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signup" />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
