import React from "react";
import { Element } from "react-scroll/modules";
import CountUp, { useCountUp } from "react-countup";
import { myInterestSkills } from "../models/myProjectModel";
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

  const counter = new Date().getDate() + new Date().getMinutes();

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
              As a highly skilled and motivated JavaScript developer, I bring a
              strong technical background and a passion for delivering
              high-quality web applications to the table. With extensive
              experience using{" "}
              <strong>JavaScript, HTML, CSS, and related technologies,</strong>
              I am confident in my ability to build dynamic and engaging user
              experiences that meet the needs of diverse business stakeholders.
              <br />
              <br />
              Throughout my career, I have honed my skills in developing complex
              web applications, working with cross-functional teams, and
              leveraging the latest technologies to bring innovative ideas to
              life. My expertise in JavaScript frameworks and libraries such as{" "}
              <strong>React, Angular, and Vue.js,</strong> as well as my
              familiarity with popular frontend libraries and tools, enables me
              to create high-performance and responsive applications that meet
              the needs of end-users.
              <br />
              <br />
              In addition to my technical skills, I am also a creative
              problem-solver and a strategic thinker. I have a proven track
              record of delivering projects on time and within budget, and I am
              always looking for new and better ways to improve the user
              experience and optimize web application performance.
              <br />
              <br />
              Overall, I am a highly driven and results-oriented JavaScript
              developer who is committed to delivering high-quality,
              user-centered solutions that meet the needs of both clients and
              end-users. I am confident in my ability to bring value to any team
              and look forward to the opportunity to contribute my skills and
              experience to your organization.
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
              My current interest and skills that I am interested in
            </h2>
            <ul className="list-groups list-group-flush  about-text font-secondary p-0">
              {myInterestSkills.map((ele) => (
                <li key={ele.id} className="list-group-item">
                  👉 {ele.description}
                </li>
              ))}
            </ul>
            <p className=" about-text font-secondary">
              Lastly I believe in upgrading your skills and gaining knowledge
              and hands-on the projects gives you more experience and expertise
              to deal with real world problems. I know this would be tough but I
              believe your passion is your success, and My passion is learning
              new things.
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
                <CountUp end={1000 + counter} delay={0}>
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
                <CountUp end={50} delay={0}>
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
