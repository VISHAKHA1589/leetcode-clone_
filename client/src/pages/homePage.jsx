import React, { useState } from "react";

import Questions from "./Questions";
import Navbar from "./Navbar";

const HomePage = () => {
  const [code, setCode] = useState("// Code");

  return (
    <>
      <div className="container" style={{ marginTop: "2rem" }}>
        <div className="row flex-sm-column flex-md-row">
          <div className="col-md-8 col-sm-12">
            <div
              className="d-flex justify-content-sm-center gap-3 flex-sm-column flex-md-row align-items-sm-center"
              style={{ marginTop: "5rem" }}
            >
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://assets.leetcode.com/users/images/49479bba-73b3-45d2-9272-99e773d784b2_1687290663.3168745.jpeg"
                  className="object-cover w-100 h-auto"
                  alt="Image 1"
                />
              </div>
              <div className="card img-fluid" style={{ width: "18rem" }}>
                <img
                  src="https://assets.leetcode.com/users/images/770789b0-c96b-4663-86d1-baab25534864_1669795265.8012726.png"
                  className="object-cover w-100 h-auto"
                  alt="Image 2"
                />
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://assets.leetcode.com/users/images/b0a08a5c-c575-48f6-9110-b6ae4e011e98_1655746322.579097.png"
                  className="object-cover w-100 h-auto"
                  alt="Image 3"
                />
              </div>
            </div>
            <Questions />
          </div>
          <div className="col-4">
            <img
              src="calender.png"
              alt="Calendar"
              className="img-fluid d-sm-none d-md-block"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
