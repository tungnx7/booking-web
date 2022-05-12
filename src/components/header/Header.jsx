import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
  faBed,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

import "./header.scss";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <div className="header">
      <div className={type === "list" ? "header-container list-mode": "header-container"}>
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
        {type !== "list" && (
          <>
            {" "}
            <h1 className="header-title">A life of discounts? It's Genius</h1>
            <p className="header-desc">
              Get rewarded for your travels - unlock instant saving of 10% or
              more with a free booking account
            </p>
            <button className="header-btn">Sign in / Register</button>
            <div className="header-search">
              <div className="header-search-item">
                <FontAwesomeIcon icon={faBed} className="header-icon" />
                <input
                  type="text"
                  placeholder="Where are you going"
                  className="header-search-input"
                />
              </div>
              <div className="header-search-item">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="header-icon"
                />
                <span
                  onClick={() => {
                    setOpenDate(!openDate);
                  }}
                  className="header-search-text"
                >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="header-date"
                  />
                )}
              </div>
              <div className="header-search-item">
                <FontAwesomeIcon icon={faPerson} className="header-icon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="header-search-text"
                >
                  {`${options.adult} adult ~ ${options.children} children ~ ${options.room} room`}
                </span>
                {openOptions && (
                  <div className="header-options">
                    <div className="header-options-item">
                      <span className="header-opntions-text">Adult</span>
                      <div className="header-options-counter">
                        <button
                          disabled={options.adult <= 1}
                          className="header-options-counterBtn"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="header-options-counterNum">
                          {options.adult}
                        </span>
                        <button
                          className="header-options-counterBtn"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="header-options-item">
                      <span className="header-opntions-text">Children</span>
                      <div className="header-options-counter">
                        <button
                          disabled={options.children <= 0}
                          className="header-options-counterBtn"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="header-options-counterNum">
                          {options.children}
                        </span>
                        <button
                          className="header-options-counterBtn"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="header-options-item">
                      <span className="header-opntions-text">Room</span>
                      <div className="header-options-counter">
                        <button
                          disabled={options.room <= 1}
                          className="header-options-counterBtn"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="header-options-counterNum">
                          {options.room}
                        </span>
                        <button
                          className="header-options-counterBtn"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="header-search-item">
                <button className="header-btn">Search</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
