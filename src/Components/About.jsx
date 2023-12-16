/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/about.jpg";

const imageAltText = "Light gray abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm an undergraduate student currently pursuing B.Tech. in ECE from Malaviya National Institute of Technology. I enjoy crafting innovative solutions to complex problems";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Algorithmic problem solving",
  "MERN stack",
  "Version controls (Git, Github)",
  "Operating System Concepts",
  "OOPs concepts",
  "Machine Learning models",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. I have honed my expertise in web development and machine learning domains and I am enthusiastic about acquiring additional skills to make meaningful contributions to society.";


const About = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  window.addEventListener("resize", () => {
    setIsMobile(window.innerWidth <= 768);
  });

  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: isMobile ? 1 : 2,
            fontSize: "1.25rem",
            margin: isMobile ? "2rem 1rem" : "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
