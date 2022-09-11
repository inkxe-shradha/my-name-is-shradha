import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-4 copy-right">
            <h5>No &copy; copyright issue</h5>
            <span>
              Here is the{" "}
              <a
                href="https://github.com/inkxe-shradha/my-name-is-shradha"
                target="_blank"
                className="font-weight-bold"
                rel="noreferrer"
              >
                source code
              </a>
              . Helping each other will be the way of solving most of the
              problems.
            </span>
          </div>
          <div className="col-md-4 signature m-auto">
            <h5>Shradha Suman Praharaj</h5>
            <div className="made-with-love">
              Made with <i className="bx bx-heart text-sm"></i> in India
            </div>
          </div>
          <div className="col-md-4 social-icons text-center">
            <p>Where you can find me?</p>
            <div className="intro_social intro-soc justify-content-center">
              <div className="intro-soc__item">
                <a
                  href="https://twitter.com/shradhasuman21"
                  title="Connect with me in twitter"
                  target="_blank"
                  rel="noreferrer"
                  className="intro-soc__link twitter"
                >
                  <i className="bx bxl-twitter"></i>
                </a>
              </div>
              <div className="intro-soc__item">
                <a
                  href="https://www.linkedin.com/in/shradha-suman-praharaj20"
                  title="Connect with me in twitter"
                  target="_blank"
                  rel="noreferrer"
                  className="intro-soc__link linkdin"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
              <div className="intro-soc__item">
                <a
                  href="https://github.com/inkxe-shradha"
                  title="my-git-hub"
                  target="_blank"
                  rel="noreferrer"
                  className="intro-soc__link github"
                >
                  <i className="bx bxl-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-12 m-2 text-center">
            <img
              src="/assets/images/jagannath-temple.png"
              alt="Janagana Temple"
              className="img-fluid footer-image"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
