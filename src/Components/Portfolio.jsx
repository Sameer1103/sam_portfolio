import React from "react";
import image from "../images/desk.png";

const imageAltText = "desktop with books and laptop";

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
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  const [animate, setAnimate] = React.useState(false);
  const imageRef = React.useRef(null);

  window.addEventListener("resize", () => {
    setIsMobile(window.innerWidth <= 768);
  });

  React.useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const imageOffsetTop = imageRef.current.getBoundingClientRect().top;
        const scrollPosition = window.innerHeight;

        if (scrollPosition > imageOffsetTop && imageOffsetTop > 0) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      }
    };

    document.body.addEventListener("scroll", handleScroll);

    return () => {
      document.body.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div
        style={{ display: "flex", flexDirection: isMobile ? "column" : "row", paddingTop: "3rem" }}
      >
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            ref={imageRef}
            className={animate ? "slideInAnimation" : ""}
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
            }}
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
