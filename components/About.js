import React from "react";
import { Element } from "react-scroll/modules";
import CountUp from "react-countup";
const About = () => {
  const getCurrentYearExperience = new Date().getFullYear() - 2018;

  return (
    <Element name="about">
      <div className="container min-100vh">
        <div className="row">
          <div className="col-md-12 my-4">
            <h2 className="text-center about-header">Who the am I ?</h2>
            <p className=" about-text font-secondary">
              <strong style={{ fontWeight: "bolder" }}>
                {getCurrentYearExperience} years
              </strong>{" "}
              of experience facilitating cutting-edge engineering solutions with
              a wide range of product-based applications and skills. I am
              seeking a challenging position in your esteemed organization where
              my technical liaison and coordination skills can be effectively
              utilized to improve operations and contribute to the
              organization&apos;s growth.
              <br />
              <br />
              I am a big fan of open-source projects and communities over the
              internet and always looking for an opportunity for contribution
              according to my skill sets.
              <br />
              <br />
              Lastly, I can say let&apos;ss connect and help each other to build
              our and other careers. (Helping is a God Gifted Personality to
              Human Beings, let&apos;s used it to give smile in someone&apos;s
              face) &#128516;
            </p>
          </div>
          <div className="col-md-12 my-4">
            <h2 className="text-center about-header">
              What I can do for you ?
            </h2>
            <p className=" about-text font-secondary">
              I worked as a Senior software developer for{" "}
              <a
                href="http://www.mindtree.com"
                target="_blank"
                rel="noreferrer"
              >
                Mintree
              </a>
              . In my free time I love to do freelancing projects, Open-source
              contributions and also learning new things.
              <br />
              <br />I also love to teaching and training people. I have been
              teaching in a local institution for the last 1 years.
            </p>
          </div>
          <div className="col-md-12 my-4">
            <div className="counter-container row gap-3 justify-content-center">
              <div className="col-md-3">
                <i className="bx bx-code-alt bx-tada bx-rotate-90"></i>
                <CountUp start={0} end={116032} delay={1}>
                  {({ countUpRef }) => (
                    <div className="counter">
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
                <span>Code Written</span>
              </div>
              <div className="col-md-3">
                <i className="bx bxs-bug-alt bx-tada"></i>
                <CountUp start={0} end={10000} delay={1}>
                  {({ countUpRef }) => (
                    <div className="counter">
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
                <span>Bugs Fixed</span>
              </div>
              <div className="col-md-3">
                <i className="bx bx-line-chart"></i>
                <CountUp start={0} end={150} delay={1}>
                  {({ countUpRef }) => (
                    <div className="counter">
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
                <span>Projects Completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
