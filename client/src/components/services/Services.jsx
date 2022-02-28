import React from "react";
import "./services.scss";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HomeIcon from "@mui/icons-material/Home";

const Services = () => {
  return (
    <div className="item-container">
      <div className="items">
        <div className="itemIcon">
          <SupportAgentIcon />
        </div>
        <div className="itemTitle">
          <h3>Personal Support</h3>
        </div>
        <div className="itemText">
          <p>
            Our professional agents will assist you during the sales/buy
            process. We take care of people. We offer personalized support.
          </p>
        </div>
      </div>
      <div className="items">
        <div className="itemIcon">
          <LaptopMacIcon />
        </div>
        <div className="itemTitle">
          <h3>Personal Support</h3>
        </div>
        <div className="itemText">
          <p>
            Our professional agents will assist you during the sales/buy
            process. We take care of people. We offer personalized support.
          </p>
        </div>
      </div>
      <div className="items">
        <div className="itemIcon">
          <HomeIcon />
        </div>
        <div className="itemTitle">
          <h3>Personal Support</h3>
        </div>
        <div className="itemText">
          <p>
            Our professional agents will assist you during the sales/buy
            process. We take care of people. We offer personalized support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
