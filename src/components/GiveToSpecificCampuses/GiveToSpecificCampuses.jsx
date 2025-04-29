import React, { useState } from "react";
import "./GiveToSpecificCampuses.css";

function GiveToSpecificCampuses() {
  const [showSearch, setShowSearch] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const buttonConfigs = [
    {
      label: "Offering",
      inactiveImage:
        "https://joincci.org/_next/static/media/purpose-offering-inactive.3c726b27.svg",
      activeImage:
        "https://joincci.org/_next/static/media/purpose-offering-active.def67890.svg",
      gradient: "linear-gradient(#B20000, #6B0000)",
    },
    {
      label: "Tithe",
      inactiveImage:
        "https://joincci.org/_next/static/media/purpose-tithe-inactive.0bd72f4e.svg",
      activeImage:
        "https://joincci.org/_next/static/media/purpose-tithe-active.abc12345.svg",
      gradient: "linear-gradient(#B20000, #6B0000)",
    },
    {
      label: "Rent",
      inactiveImage:
        "https://joincci.org/_next/static/media/purpose-rent-inactive.9f5d4392.svg",
      activeImage:
        "https://joincci.org/_next/static/media/purpose-rent-active.dca55255.svg",
      gradient: "linear-gradient(#B20000, #6B0000)",
    },
    {
      label: "Special",
      inactiveImage:
        "https://joincci.org/_next/static/media/purpose-special-inactive.adeb743f.svg",
      activeImage:
        "https://joincci.org/_next/static/media/purpose-special-active.d6b58a65.svg",
      gradient: "linear-gradient(#B20000, #6B0000)",
    },
  ];

  const handleButtonClick = (index) => {
    setShowSearch(true);
    setActiveButton(index);
  };

  return (
    <section className="specificGivingSection">
      <div className="specificGivingContentContainer">
        <button>🌍 GIVE TO SPECIFIC CCI CAMPUSES</button>
        <h2>Give to specific Campuses</h2>
        <p>
          Join us as we put our money right where our faith is, partnering with
          God for the spread of the gospel in our day.
        </p>
      </div>

      <div className="typeOfGive">
        <p>What would you like to give</p>

        <div className="typeToGiveContainer">
          {buttonConfigs.map((config, index) => {
            const isActive = activeButton === index;
            const backgroundImage = isActive
              ? config.activeImage
              : config.inactiveImage;
            const backgroundStyle = {
              backgroundImage: isActive
                ? `${config.gradient}, url(${backgroundImage})`
                : `url(${backgroundImage})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom right",
              backgroundSize: "100% ",
              color: isActive ? "white" : "black",
            };

            return (
              <button
                key={index}
                id="special-button"
                className={`extramargin ${isActive ? "active-button" : ""}`}
                onClick={() => handleButtonClick(index)}
                style={backgroundStyle}>
                {config.label}
              </button>
            );
          })}
        </div>

        {showSearch && (
          <div className="search-container">
            <div className="search-input-wrapper">
              <i className="bi bi-search search-icon"></i>
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default GiveToSpecificCampuses;
