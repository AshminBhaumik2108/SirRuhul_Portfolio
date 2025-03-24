import React from 'react';
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";

const image2 ='../img/background/7.webp';

const Download = () => {
    return(
        <div className="container">
            <div className="row position-relative">
                <div className="col-lg-12">
                    <Parallax className="padding60 sm-padding40" bgImage={image2} strength={400}> 
                        <div className="col-lg-6">
                            <div className="subtitle wow fadeInUp mb-3">About Section</div>
                            <h2 className="wow fadeInUp" data-wow-delay=".2s"><span className="text-gradient">Mr. Ruhul Amin Choudhury</span></h2>
                            <p>Dynamic academic leader and Robotics expert with a blend of teaching, research, and industry engagement. Currently serving as Officer in Research & Innovation, specializing in Robotics and Automation. Proven track record of successful Innovations, consultancy Projects collaborating with industries to solve complex problems and enhance operational efficiency. Skilled in curriculum development, research supervision, and fostering industry-academic partnerships.</p>                            
                            <Link to="https://www.sih.gov.in/"><img width="180" height="100" src="https://i.ytimg.com/vi/znMbKz6ZPno/maxresdefault.jpg" className="img-fluid mb-sm-20" alt="download"/></Link>&nbsp;
                            <Link to="/"><img width="180" height="100" src="https://www.automate.org/images/ogImages/Blog_Humanoid-Robot.png" className="img-fluid mb-sm-20" alt="download"/></Link>
                        </div>
                    </Parallax>
                    <img width="700" height="550" src="https://i.imghippo.com/files/vkj1234STA.png" className="max-content sm-hide position-absolute bottom-0 end-0"  alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Download;