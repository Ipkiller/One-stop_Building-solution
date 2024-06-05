import React from "react";
import "./Main.css";
import "./Responsive_main.css";
const Main = () => {
  return (
    <main>
      <div className="container">
        <div className="txt">
          <h3>React Components</h3>
          <p><span>Components are the building blocks</span> <span>of any React application.</span></p>
        </div>
        <div className="slider">
          <div>
            <div className="img">
              <img src="src/assets/Iron.jpeg" alt="" />
            </div>
            <p>Iron</p>
          </div>
          <div>
            <div className="img">
              <img src="src/assets/Cement.jpeg" alt="" />
            </div>
            <p>Cement</p>
          </div>
          <div>
            <div className="img">
              <img src="src/assets/Chip_stones.jpeg" alt="" />
            </div>{" "}
            <p>Chip Stones</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
