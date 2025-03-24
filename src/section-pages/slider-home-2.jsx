import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const image1 = "../img/slider/creative-1.webp";
const image2 = "../img/slider/creative-2.webp";
const image3 = "../img/slider/creative-3.webp";

const Slider = () => {
  return (
    <Swiper
      className="mainslider"
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      navigation
      autoplay={{ delay: 4000 }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      pagination={{
        clickable: false,
        renderBullet: function (index, className) {
          return `<span class="${className}">${
            index + 1
          } <span className="swiper-pagination-current">/ 3</span></span>`;
        },
      }}
    >
      <SwiperSlide>
        <div className="swiper-inner">
          <div className="sw-caption">
            <div className="container">
              <div className="row gx-4 align-items-center">
                <div className="spacer-single"></div>
                <div className="col-lg-5 mb-sm-30">
                  {/* <div className="subtitle blink mb-4">Servers Are Available</div> */}
                  <h1 className="slider-title s2 text-uppercase mb-1">
                    Anveshan 2021 – National Research Convention
                  </h1>
                  <p className="slider-text">
                    We are thrilled to announce that our students, Prakhar
                    Saxena and Pranjali Jain, won the North Zone Best Project
                    Award at Anveshan 2021!
                    <br />
                  </p>
                  <p className="slider-text">
                    <b>Innovative Project:</b> Tech-Agro – A groundbreaking
                    device that empowers farmers to test soil nutrients in just
                    15 minutes at an incredibly low cost of ₹13. This innovation
                    is set to revolutionize agricultural practices with
                    affordable and rapid soil analysis.
                    <br />
                  </p>
                  <div className="spacer-10"></div>
                  <a className="btn-main mb10" href="pricing-table-one.html">
                    <span>
                      👨‍💼 Team Name: Tech-Agro
                      <br />
                      👨‍🏫 Mentors: Mr. Mandeep Singh & Mr. Ruhul Amin Choudhury
                    </span>
                  </a>
                </div>

                <div className="col-lg-7">
                  <img src={image1} className="img-fluid sw-image" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="sw-overlay"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-inner">
          <div className="sw-caption">
            <div className="container">
              <div className="row gx-4 align-items-center">
                <div className="spacer-single"></div>
                <div className="col-lg-5 mb-sm-30">
                  {/* <div className="subtitle blink mb-4">Servers Are Available</div> */}
                  <h1 className="slider-title s2 text-uppercase mb-1">
                    Smart India Hackathon (SIH) 2021 SPOC & Jury Member
                  </h1>
                  <p className="slider-text">
                    Proudly served as the Single Point of Contact (SPOC) and
                    Jury Member for Smart India Hackathon (SIH) 2021, fostering
                    innovation and guiding young minds in the largest nationwide
                    hackathon.
                  </p>
                  <div className="spacer-10"></div>
                  <a className="btn-main mb10" href="pricing-table-one.html">
                    <span>
                      Successfully mentored and coordinated 3 software teams and
                      7 hardware teams selected for the grand event
                    </span>
                  </a>
                </div>

                <div className="col-lg-7">
                  <img src={image2} className="img-fluid sw-image" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="sw-overlay"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-inner">
          <div className="sw-caption">
            <div className="container">
              <div className="row gx-4 align-items-center">
                <div className="spacer-single"></div>
                <div className="col-lg-5 mb-sm-30">
                  {/* <div className="subtitle blink mb-4">Servers Are Available</div> */}
                  <h1 className="slider-title s2 text-uppercase mb-1">
                    Smart India Hackathon (SIH) 2023 – Victory for Team
                    Innovortex!
                  </h1>
                  <p className="slider-text">
                    Proud to announce that Team Innovortex emerged as the winner
                    of Smart India Hackathon 2023 under the Student Innovation
                    category in the domain of Robotics and Drones.{" "}
                  </p>
                  <div className="spacer-10"></div>
                  <a className="btn-main mb10" href="pricing-table-one.html">
                    <span>
                      💡 Guided by:
                      <br /> 👨‍🏫 Mr. Mandeep Singh & Mr. Ruhul Amin Choudhury
                    </span>
                  </a>
                </div>

                <div className="col-lg-7">
                  <img src={image3} className="img-fluid sw-image" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="sw-overlay"></div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default Slider;
