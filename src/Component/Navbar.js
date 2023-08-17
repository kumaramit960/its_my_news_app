import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Changecolor from "./Changecolor";

export default function Navbar(props) {
  const [selectCategory, setSelectcategory] = useState("");

  const HandelCtagory = (category) => {
    setSelectcategory(category);
  };

  const business = "business";
  const entertainment = "entertainment";
  const general = "general";
  const health = "health";
  const science = "science";
  const sports = "sports";
  const technology = "technology";

  return (
    <div>
      <nav className="navbar navbar-expand-lg  fixed-top navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            AMIT NEWS APP
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  Contact Us
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/general"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  NEWS Category
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className={`dropdown-item ${
                        selectCategory === "business" ? "active" : ""
                      }   `}
                      to="/business"
                      onClick={() => HandelCtagory(business)}
                    >
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${
                        selectCategory === "entertainment" ? "active" : ""
                      }   `}
                      to="/entertainment"
                      onClick={() => HandelCtagory(entertainment)}
                    >
                      Entertainment
                    </Link>
                  </li>

                  <li>
                    <Link
                      className={`dropdown-item ${
                        selectCategory === "health" ? "active" : ""
                      }   `}
                      to="/health"
                      onClick={() => HandelCtagory(health)}
                    >
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${
                        selectCategory === "science" ? "active" : ""
                      }   `}
                      to="/science"
                      onClick={() => HandelCtagory(science)}
                    >
                      Science
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${
                        selectCategory === "sports" ? "active" : ""
                      }   `}
                      to="/sports"
                      onClick={() => HandelCtagory(sports)}
                    >
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${
                        selectCategory === "technology" ? "active" : ""
                      }   `}
                      to="/technology"
                      onClick={() => HandelCtagory(technology)}
                    >
                      Technology
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <Changecolor />
          </div>
        </div>
      </nav>
    </div>
  );
}
