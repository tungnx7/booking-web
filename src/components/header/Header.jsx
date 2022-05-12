import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
  faBed,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-list">
          <div className="header-item active ">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="header-item">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="header-item">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="header-item">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="header-item">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxi</span>
          </div>
        </div>
        <h1 className="header-title">A life of discounts? It's Genius</h1>
        <p className="header-desc">Get rewarded for your travels - unlock instant saving of 10% or more with a free booking account</p>
        <button className="header-btn">Sign in / Register</button>
        <div className="header-search">
            <div className="header-search-item">
            <FontAwesomeIcon icon={faBed} className="header-icon" />
            <input type="text" placeholder="Where are you going" className="header-search-input"/>
            </div>
            <div className="header-search-item">
            <FontAwesomeIcon icon={faCalendarDays} className="header-icon" />
            <span className="header-search-text" >date to date</span>
            </div>
            <div className="header-search-item">
            <FontAwesomeIcon icon={faPerson} className="header-icon" />
            <span className="header-search-text" >2 adults 2 children 1 room</span>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Header;
