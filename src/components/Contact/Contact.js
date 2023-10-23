import React from "react";
import "./Contact.css";
import facebook from "../../assets/facebook.png";
import microsoft from "../../assets/microsoft.png";
import adobe from "../../assets/adobe.png";
import walmart from "../../assets/walmart.png";
import facebookIcon from "../../assets/facebook-icon.png";
import instagramIcon from "../../assets/instagram.png";
import twitterIcon from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zyf6y6m",
        "template_f5vr1sq",
        form.current,
        "O7sL06Qxv4IbFT9VXKAFM"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email send succesfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactpage">
      <div id="clients">
        <h1 className="contactpagetittle">My Clients</h1>
        <p className="contactpagedesc">
          I have had the opportunity to work with diverse group of companies
          some of notable companies i have worked with Dot Austure,
          Design Arina , Saven tech.
        </p>
        <div className="clientsImgs">
          <img src={facebook} alt="clients" className="clientsImg" />
          <img src={microsoft} alt="clients" className="clientsImg" />
          <img src={adobe} alt="clients" className="clientsImg" />
          <img src={walmart} alt="clients" className="clientsImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactpagetitle">Contact me</h1>
        <span className="contactdesc">
          Please fill out the form below to discuss any work opportunity
        </span>
        <form className="contactform" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your name"
            name="from_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your message"
          ></textarea>
          <button type="submit" value="send" className="submitbtn">
            Submit
          </button>
          <div className="links">
            <img src={facebookIcon} alt="facebook" className="link" />
            <img src={instagramIcon} alt="instagram" className="link" />
            <img src={twitterIcon} alt="twitter" className="link" />
            <img src={youtube} alt="youtube" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
