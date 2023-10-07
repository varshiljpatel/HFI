import React, { useState } from "react";
import { Button } from "@mui/material";
import styles from "./navbar.module.css"; // Import the CSS module

function Navbar() {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavVisible(!mobileNavVisible);
  };

  return (
    <>
      <div>
        <div className={`fixed w-full ${styles.navbar}`}></div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex bg-[#0E3A5D] p-4 justify-between items-center">
          <div className="text-white text-2xl font-bold">
            <img src="" alt="" />
          </div>
          <ul className="flex space-x-6 text-white">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#feature">Features</a>
            </li>
            <li>
              <a href="#aboutUs">About Us</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="ml-4">
            <Button
              variant="contained"
              color="secondary"
              sx={{
                backgroundColor: "#A83232 !important",
                padding: "8px 10px !important",
                margin: "auto",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                boxShadow: "2px 2px 12px black",
              }}
            >
              <span className="">Create Your Menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${
            mobileNavVisible
              ? `${styles.mobileNav} ${styles.mobileNavContainer}`
              : ""
          } md:hidden bg-[#0E3A5D] p-4 flex justify-between items-center`}
        >
          <div className="text-white text-2xl font-bold">MenuCrafter</div>
          <button
            className="text-white text-xl focus:outline-none"
            onClick={toggleMobileNav}
          >
            {mobileNavVisible ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <div
          className={`${
            mobileNavVisible
              ? `${styles.mobileNav} ${styles.mobileNavContainer}`
              : "hidden"
          } md:hidden p-4 bg-[#0E3A5D]  transform transition-transform duration-300 ease-in-out`}
        >
          <ul className="flex flex-col space-y-4 text-center">
            <li>
              <a
                className="text-white"
                href="/"
                onClick={() => setMobileNavVisible(false)} // Close mobile nav on link click
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-white"
                href="#feature"
                onClick={() => setMobileNavVisible(false)} // Close mobile nav on link click
              >
                Features
              </a>
            </li>
            <li>
              <a
                className="text-white"
                href="#aboutUs"
                onClick={() => setMobileNavVisible(false)} // Close mobile nav on link click
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className="text-white"
                href="#faq"
                onClick={() => setMobileNavVisible(false)} // Close mobile nav on link click
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                className="text-white"
                href="#contact"
                onClick={() => setMobileNavVisible(false)} // Close mobile nav on link click
              >
                Contact
              </a>
            </li>
          </ul>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              backgroundColor: "#A83232 !important",
              padding: "8px 10px !important",
              margin: "auto",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              boxShadow: "2px 2px 12px black",
              marginBlock: "2rem",
            }}
          >
            <span className="">Create Your Menu</span>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
