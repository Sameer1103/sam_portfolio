/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/desk.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Movie Genre Classification Model 🎥",
    description:
      "ML model to classify the movies based on their genres using various classifiers including Logistic Regression, Naive Bayes, and Support Vector Machines (SVMs).",
    url: "https://github.com/Sameer1103/NeuroNexus/tree/main/Movie%20Genre%20Classification",
  },
  {
    title: "Credit Card Fraud Detection Model 💳",
    description:
      "ML model to detect fraudulent credit card transactions using various classifiers including Logistic Regression, Decision Tree, and Random Forest.",
    url: "https://github.com/Sameer1103/NeuroNexus/tree/main/Credit%20Card%20Fraud%20Detection",
  },
  {
    title: "Online Judge Website 🖥️",
    description:
      "Remotely runs code securely and judges if the given code is correct, wrong or inefficient. Implemented using MERN stack. Containerized the compiler by exploring Docker.",
    url: "https://github.com/Sameer1103/Online-Judge/tree/master",
  },
  {
    title: "Crypto Tracker Website 📈",
    description:
      "A responsive Crypto currency rate tracker website which shows current as well as previous data including dynamic graphs. Implemented frontend using MaterialUI and Reactjs.",
    url: "https://track-your-crypto.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideIn" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
