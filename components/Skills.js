import React from "react";
import { Element } from "react-scroll/modules";
import styles from "../styles/Skill.module.css";

const Skills = ({ isDarkMode }) => {
  const [isPageDisplay, setPageDisplay] = React.useState(false);
  const diveRef = React.useRef();
  React.useEffect(() => {
    //   show page when page scroll to the position of the page id
    const handleScroll = () => {
      const pagePos = window.pageYOffset;
      const pageHeight = diveRef.current.offsetTop;
      if (pagePos > pageHeight - 500) {
        setPageDisplay(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const skills = [
    { type: "HTML", level: 90 },
    { type: "JavaScript", level: 90 },
    { type: "BootStrap", level: 90 },
    { type: "React", level: 95 },
    { type: "GraphQL", level: 80 },
    { type: "Redux Tool Kit", level: 85 },
    { type: "Remix.js", level: 85 },
    { type: "Angular", level: 85 },
    { type: "PHP", level: 85 },
    { type: "MySQL", level: 85 },
    { type: "Ionic", level: 75 },
    { type: "MongoDB", level: 80 },
    { type: "NodeJS", level: 80 },
    { type: "ExpressJS", level: 80 },
    { type: "Git", level: 85 },
    { type: "Next.js", level: 85 },
    { type: "TypeScript", level: 85 },
    { type: "jQuery", level: 92 },
    { type: "CSS", level: 70 },
    { type: "AWS", level: 45 },
    { type: "Vue", level: 45 },
  ];

  const saturation = 95;
  const hue = isDarkMode ? 320 : 290;

  return (
    <Element name="skills" id="skills">
      <div className={`container skills-card mt-5`} ref={diveRef}>
        <div className="row">
          <div className="col-md-12">
            <div
              className={`card rounded ${isDarkMode && "bg-dark"} shadow-lg`}
            >
              <div className="card-header">
                <div className="card-title text-center">
                  <h3>Skills I Earned</h3>
                </div>
              </div>
              <div className="card-body skills" style={{ minHeight: 500 }}>
                <ul
                  className={styles.skills}
                  style={{
                    display: isPageDisplay ? "" : "none",
                  }}
                >
                  {skills.map((skill, index) => (
                    <li
                      key={skill.type}
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: `hsl(${hue}, ${saturation}%, ${
                          100 / (index + 3.5)
                        }%)`,
                      }}
                    >
                      <p>
                        {skill.type}
                        <span>{skill.level}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Skills;
