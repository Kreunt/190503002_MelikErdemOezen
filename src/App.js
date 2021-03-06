import "./css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import { Heading } from "@chakra-ui/react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState();

  if (!loggedIn) {
    return (
      <div className="wrapper">
        <Heading fontFamily="heading" fontStyle="italic" textAlign="center">
          Meal-Sys
        </Heading>
        <LoginPage setLoggedIn={setLoggedIn} setRole={setRole} />
      </div>
    );
  }

  return (
    <div className="wrapper">
      <Heading fontFamily={"heading"} fontStyle={"italic"} textAlign="left">
        Meal-Sys
      </Heading>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard role={role} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
