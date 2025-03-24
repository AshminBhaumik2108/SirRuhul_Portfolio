import React from "react";
import { Link } from "react-router-dom";

const image1 =
  "https://images.unsplash.com/photo-1709990740078-05aa8ee5b9b7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D";
const image2 =
  "https://images.unsplash.com/photo-1709990740078-05aa8ee5b9b7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D";
const image3 =
  "https://images.unsplash.com/photo-1709990740078-05aa8ee5b9b7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D";
const image4 =
  "https://images.unsplash.com/photo-1709990740078-05aa8ee5b9b7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D";
// const image5 = '../img/covers/5.webp';
// const image6 = '../img/covers/6.webp';
// const image7 = '../img/covers/7.webp';
// const image8 = '../img/covers/8.webp';

const collection = () => {
  return (
    <div className="container">
      <div className="row g-4 sequence">
        <div className="col-lg-3 col-md-6 gallery-item">
          <div className="de-item wow">
            <div className="d-overlay">
              <div className="d-label"></div>
              <div className="d-text">
                <h4>Publications</h4>
                <p className="d-price">
                  Influential | Insightful | Groundbreaking | Credible |
                  Visionary<span className="price"></span>
                </p>
                <Link className="btn-main btn-fullwidth" to="/">
                  View Profile
                </Link>
              </div>
            </div>
            <img src={image1} className="img-fluid " alt="" />
          </div>
        </div>

        <div className="col-lg-3 col-md-6 gallery-item">
          <div className="de-item wow">
            <div className="d-overlay">
              <div className="d-label"></div>
              <div className="d-text">
                <h4>Granted Patents</h4>
                <p className="d-price">
                  Innovative | Pioneering | Impactful | Transformative |
                  Trailblazing<span className="price"></span>
                </p>
                <Link className="btn-main btn-fullwidth" href="#">
                  View Profile
                </Link>
              </div>
            </div>
            <img src={image2} className="img-fluid " alt="" />
          </div>
        </div>

        <div className="col-lg-3 col-md-6 gallery-item">
          <div className="de-item wow">
            <div className="d-overlay">
              <div className="d-label"></div>
              <div className="d-text">
                <h4>Journal Publication</h4>
                <p className="d-price">
                  Scholarly | Peer-Reviewed | Impactful | Insightful |
                  Groundbreaking<span className="price"></span>
                </p>
                <Link className="btn-main btn-fullwidth" href="#">
                  View profile
                </Link>
              </div>
            </div>
            <img src={image3} className="img-fluid " alt="" />
          </div>
        </div>

        <div className="col-lg-3 col-md-6 gallery-item">
          <div className="de-item wow">
            <div className="d-overlay">
              <div className="d-label"></div>
              <div className="d-text">
                <h4>Media Publication</h4>
                <p className="d-price">
                  Noteworthy | Wide-Reaching | Influential | Credible | Trending
                  <span className="price"></span>
                </p>
                <Link className="btn-main btn-fullwidth" href="#">
                  View Profile
                </Link>
              </div>
            </div>
            <img src={image4} className="img-fluid " alt="" />
          </div>
        </div>

        {/* <div className="col-lg-3 col-md-6 gallery-item">
                <div className="de-item wow">
                    <div className="d-overlay">
                        <div className="d-label">
                            20% OFF
                        </div>
                        <div className="d-text">
                            <h4>Galactic Odyssey</h4>
                            <p className="d-price">Starting at <span className="price">$14.99</span></p>
                            <Link className="btn-main btn-fullwidth" href="#">Order Now</Link>
                        </div>
                    </div>
                    <img src={image5} className="img-fluid " alt=""/>
                </div>
            </div> */}

        {/* <div className="col-lg-3 col-md-6 gallery-item">
                <div className="de-item wow">
                    <div className="d-overlay">
                        <div className="d-label">
                            20% OFF
                        </div>
                        <div className="d-text">
                            <h4>Warfare Legends</h4>
                            <p className="d-price">Starting at <span className="price">$14.99</span></p>
                            <Link className="btn-main btn-fullwidth" href="#">Order Now</Link>
                        </div>
                    </div>
                    <img src={image6} className="img-fluid " alt=""/>
                </div>
            </div> */}

        {/* <div className="col-lg-3 col-md-6 gallery-item">
                <div className="de-item wow">
                    <div className="d-overlay">
                        <div className="d-label">
                            20% OFF
                        </div>
                        <div className="d-text">
                            <h4>Raceway Revolution</h4>
                            <p className="d-price">Starting at <span className="price">$14.99</span></p>
                            <Link className="btn-main btn-fullwidth" href="#">Order Now</Link>
                        </div>
                    </div>
                    <img src={image7} className="img-fluid " alt=""/>
                </div>
            </div> */}

        {/* <div className="col-lg-3 col-md-6 gallery-item sandbox">
                <div className="de-item wow">
                    <div className="d-overlay">
                        <div className="d-label">
                            20% OFF
                        </div>
                        <div className="d-text">
                            <h4>Starborne Odyssey</h4>
                            <p className="d-price">Starting at <span className="price">$14.99</span></p>
                            <Link className="btn-main btn-fullwidth" href="#">Order Now</Link>
                        </div>
                    </div>
                    <img src={image8} className="img-fluid" alt=""/>
                </div>
            </div> */}
      </div>
    </div>
  );
};

export default collection;
