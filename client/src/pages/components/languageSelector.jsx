import React, { useState } from "react";
import { LanguageVersions } from "../constants";

const LanguageSelection = ({ language, onSelect }) => {
  const languages = Object.entries(LanguageVersions);

  return (
    <div className="d-flex">
      <div className="justify-content-center align-content-center">
        <h4 className="ml-2">CODE</h4>
      </div>

      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle m-3"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {language || "Select Language"}
        </button>
        <ul className="dropdown-menu">
          {languages.map(([language, version]) => (
            <li key={language} onClick={() => onSelect(language)}>
              <button className="dropdown-item" type="button">
                {language}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LanguageSelection;
