import React from "react";
import "./Skills.css";
import uidesign from "../../assets/ui-design.png";
import webdesign from "../../assets/website-design.png";
import appdesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="Skills">
      <span className="Skilltittle">What I do</span>
      <span className="SkillDesc">
        I'm skilled and passionate web developer with experience in creating
        visually appealing and user-friendly websites. i have to strong
        understanding of development and a keen eye for details.iam a
        professient in html,css,javascript,bootstrap and react js as well as
        design software such as figma,Adobe Xd, photoshop and illustrator.
      </span>
      <div className="Skillbars">
        <div className="Skillbar">
          <img src={webdesign} alt="web development" className="SkillbarImg" />
          <div className="skillbartext">
            <h2>web development</h2>
            <p>you can create your own design</p>
          </div>
        </div>
        <div className="Skillbar">
          <img src={uidesign} alt="uidesign" className="SkillbarImg" />
          <div className="skillbartext">
            <h2>UI UX Design</h2>
            <p>you can create your own design</p>
          </div>
        </div>
        <div className="Skillbar">
          <img src={appdesign} alt="" className="SkillbarImg" />
          <div className="skillbartext">
            <h2>App Development</h2>
            <p>you can create your own design</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
