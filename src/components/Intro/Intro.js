import React from "react";
import "./Intro.css";
import { Link } from "react-scroll"; 
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id="intro">
      <div className="introcontent">
        <spam className="hello">Hello,</spam>
        <spam className="introtext">
          i'm <span className="introname">Aly Abbas</span> <br /> Frontrnd
          Developer
          <p className="intropara">i'm Skilled web developer with experienxe in cresting  <br /> visually appealing and user friendly websites</p>
        </spam>
        <Link> <button className="btn"><img src={btnImg} alt="hire me" className="btnImg" />Hire Me </button> </Link>
      </div>
      <img src={bg} alt="profile"className="bg" />
    </section>
);
};

export default Intro;
