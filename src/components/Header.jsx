import React from "react";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className="sticky top-0">
        <Navbar fluid roun ded>
          <Navbar.Brand href="/">
            <Link to="/">
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                Nexa Core
              </span>
            </Link>
          </Navbar.Brand>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
