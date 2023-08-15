import React from "react";
import logo from "../assets/logo.svg";
import "./Navbar.css";
import Button from "./Button";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <img src={logo}></img>
      <Search />
      <Button
        style={{
          borderRadius: "12px",
          border: "1px solid #34C94B",
          background: "#121212",
          display: "inline-flex",
          alignItems: "flex-start",
          gap: "10px",
          padding: "10px 16px",
          color: "var(--primary-400, #34C94B)",
          textAlign: "center",
          fontFeatureSettings: "'clig' off, 'liga' off",
          fontFamily: "Poppins",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "normal",
          letterSpacing: "0.25px",
          cursor: "pointer",
        }}
      >
        Give Feedback
      </Button>
    </div>
  );
};

export default Navbar;
