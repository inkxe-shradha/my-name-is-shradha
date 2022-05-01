import React from "react";
import Image from "next/image";
import { Element } from "react-scroll/modules";
const IntroductionBox = () => {
  const scrollContactUsForm = () => {
    document.getElementById("contact-us-form").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <Element name="home">
      <div className="page__intro intro">
        <div className="intro__container container">
          <div className="intro__body">
            <div className="intro__content">
              <h1 className="intro__title">
                Hi, I&apos;m <span>Shradha</span>
              </h1>
              <span className="intro__position">
                I&apos;m a Full Stack Web Developer.
              </span>
              <div className="intro__text">
                Hey! I am Shradha Suman Praharaj, a 26 year old web developer,
                teacher, Freelancer and Gamer(Life is need to be enjoy! Right?)
                living in Sliver City Cuttack, Odisha. I am currently working as
                Senior Software Engineer at{" "}
                <a
                  href="https://www.mindtree.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mindtree
                </a>
                <br />
              </div>
              <div
                className="intro__btn"
                to="test2"
                onClick={scrollContactUsForm}
              >
                Contact Me <i className="bx bx-right-arrow-alt"></i>
              </div>
              <div className="intro_social intro-soc">
                <div className="intro-soc__item">
                  <a href="#" title="" className="intro-soc__link twitter">
                    <i className="bx bxl-twitter"></i>
                  </a>
                </div>
                <div className="intro-soc__item">
                  <a href="#" title="" className="intro-soc__link linkdin">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
                <div className="intro-soc__item">
                  <a href="#" title="" className="intro-soc__link github">
                    <i className="bx bxl-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="intro__image">
              <Image
                src="/assets/images/profile.jpg"
                layout="responsive"
                width={300}
                height={300}
                className="intro__img"
                alt="Shradha suman praharja"
              />
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default IntroductionBox;
