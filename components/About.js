import React from "react";
import { Element } from "react-scroll/modules";
import CountUp, { useCountUp } from "react-countup";
const About = () => {
  const getCurrentYearExperience = new Date().getFullYear() - 2018;
  const count = React.useRef(116032 + Math.floor(Math.random(100) * 100));
  const countUpRef = React.useRef(null);
  const { update } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: count.current,
    delay: 0,
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      count.current = count.current + 50;
      update(count.current + 50);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Element name="about">
      <div className="container min-100vh">
        <div className="row">
          <div className="col-md-12 my-4">
            <h2 className="text-center about-header">Who the am I ?</h2>
            <p className=" about-text font-secondary">
              I am someone with &nbsp;
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
              internet and always looking for an opportunity to contribute
              according to my skill sets. Always seeking an opportunity to learn
              research and develop new skills.
              <br />
              <br />
              Lastly, I can say let&apos; connect and help each other to build
              our and other careers. (Helping is a God Gifted Personality to
              Human Beings, let&apos; used it to give smile on someone&apos;
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
                href="https://www.ltimindtree.com/"
                target="_blank"
                rel="noreferrer"
              >
                LTIMindtree
              </a>
              .&nbsp;And in my free time, I love to do freelancing projects,
              Open-source contributions and also learn new things.
              <br />
              <br />I also love teaching and training people. I have been
              teaching in a local institution for the last 1 year.
            </p>
          </div>
          <div className="col-md-12 my-4">
            <h2 className="text-center about-header">
              What is my current interest?
            </h2>
            <p className=" about-text font-secondary">
              {"->"} I believe in upgrading your skills and gaining knowledge
              and hands-on.
              <br />
              <br />
              {"->"} I believe that information is wealth and knowledge is
              power.
              <br />
              <br />
              {"->"} That&apos;s why I love to learn new things. Some of my
              interests are Deep diving in Javascript (Both in frontend and
              backend), Learning AI, getting hands-on experience with AWS and
              cloud base systems, and Learning Android development skills like
              React Native, Kotlin, and Flutter, etc...
              <br />
              <br />
              {"->"} I know this would be tough but I believe your passion is
              your success, and My passion is learning new things.
            </p>
          </div>
          <div className="col-md-12 my-4">
            <div className="counter-container row gap-3 justify-content-center">
              <div className="col-md-3">
                <i className="bx bx-code-alt bx-tada bx-rotate-90"></i>
                {/* <CountUp end={count} delay={0}>
                  {({ countUpRef }) => (
                    <div className="counter">
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp> */}
                <div className="counter" ref={countUpRef} />
                <span>Code Written</span>
              </div>
              <div className="col-md-3">
                <i className="bx bxs-bug-alt bx-tada"></i>
                <CountUp end={1000} delay={0.5}>
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
                <CountUp end={50} delay={1}>
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
