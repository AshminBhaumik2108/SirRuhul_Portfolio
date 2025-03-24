import React from "react";

const image1 = "../img/icons/1.png";
const image2 = "../img/icons/2.png";
const image3 = "../img/icons/3.png";
const image4 = "../img/icons/4.png";

const Section = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-sm-20">
          <div>
            <img src={image1} className="mb20" alt="" />
            <h4>Publications</h4>
            <p>
              - New Portable UV Racket Can Disinfect Surfaces Just by Waving
              <br /> - LPU Researcher Develop UV-Ray Based Device to Disinfect
              the Air Through Air Conditioner
              <br /> - LPU Researchers Develop an IoT Device, 20Sec4Life, for
              Soap Dispensers
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-sm-20">
          <div>
            <img src={image2} className="mb20" alt="" />
            <h4>Notable Granted Patents</h4>
            <p>
              - Automatic UV Racket for Sanitization
              <br />- IoT-Based Humidifier
              <br />- Smart Robot with Anti-Drowning System
              <br />- Shocker-Based Auto-Leveling Stretcher
              <br />- Internet of Things-Based Solar Power Generation System
              <br />
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-sm-20">
          <div>
            <img src={image3} className="mb20" alt="" />
            <h4>
              Professional Experience (5+ Years) Officer-Research & Innovation
            </h4>
            <p>
              Revolutionizing Indian academia through interdisciplinary
              research, blending mathematics, AI, IoT, and clean energy for
              transformative innovation.
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-sm-20">
          <div>
            <img src={image4} className="mb20" alt="" />
            <h4>Research Highlights</h4>
            <p>
              - Renewable Energy & Storage
              <br />
              - Robotics & Automation
              <br />
              - Deep Learning & Large-Scale ML
              <br />
              - Internet of Things (IoT)
              <br />
              - Image Processing
              <br />
              - Robust & Scalable AI Solutions
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
