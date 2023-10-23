import React from "react";
import "./Works.css";
import portfolio1 from "../../assets/portfolio-1.png";
import portfolio2 from "../../assets/portfolio-2.png";
import portfolio3 from "../../assets/portfolio-3.png";
import portfolio4 from "../../assets/portfolio-4.png";
import portfolio5 from "../../assets/portfolio-5.png";
import portfolio6 from "../../assets/portfolio-6.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worktittle">My Portfolio</h2>
      <span className="workdesc">
        I'm a dedicated frontend web developer with over 2 years of hands-on
        experience in crafting engaging and responsive websites My expertise
        includes designing intuitive user interfaces and creating seamless user
        experiences. As a full-time freelancer, I have honed my skills in
        developing visually appealing websites, mobile apps, and various
        software solutions.
      </span>
      <div className="worksimgs">
        <img src={portfolio1} alt="" className="worksimg" />
        <img src={portfolio2} alt="" className="worksimg" />
        <img src={portfolio3} alt="" className="worksimg" />
        <img src={portfolio4} alt="" className="worksimg" />
        <img src={portfolio5} alt="" className="worksimg" />
        <img src={portfolio6} alt="" className="worksimg" />
      </div>
      <div className="worksbtn">See more...</div>
    </section>
  );
};

export default Works;
