import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accounts from "./pages/Accounts";
import Cards from "./pages/Cards";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/signin" element={<SignIn />} />
          
          <Route path="/dashboard" element = {<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
