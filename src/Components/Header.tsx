import React from "react";
import "./Component.styles.css";

const Header = () => {
  return (
    <div className="container-fluid text-center header">
      <div className="row justify-content-md-center">
        <div className="col-md-10 align-center">
          <div className="mbr-section-btn">
            <a
              className="btn btn-md btn-white-outline display-4"
              href="page1.html"
            >
              STOCKS
            </a>
            <a
              className="btn btn-md btn-white-outline display-4"
              href="Options Main.html"
            >
              OPTIONS
            </a>
            <a
              className="btn btn-md btn-white-outline display-4"
              href="Crypto Main.html"
            >
              CRYPTO
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
