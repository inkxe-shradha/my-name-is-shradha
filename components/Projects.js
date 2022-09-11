import React from "react";
import { Element } from "react-scroll/modules";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { myProjectData } from "../models/myProjectModel";
const Projects = () => {
  const myProject = myProjectData;
  return (
    <Element name="projects">
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12">
            <h3 className="text-center about-project">Major Projects</h3>
            <Carousel
              className="carousel-project"
              autoFocus={true}
              showThumbs={false}
              showStatus={false}
              showArrows={true}
              infiniteLoop={true}
              stopOnHover={true}
              autoPlay={true}
              showIndicators={false}
              useKeyboardArrows
            >
              {myProject &&
                myProject.map((ele, index) => (
                  <div key={`content-${ele.index}`}>
                    <Image
                      src={ele.image}
                      alt={ele.name}
                      layout="fixed"
                      width={330}
                      height={300}
                    />
                    <h5 className="my-3">{ele.name}</h5>
                    <hr />
                    <p className="description">
                      {ele.description}
                      <br />
                      <br />
                      The tech stack I used is for the app are
                      <em> {ele.techStack}</em>
                    </p>
                    <a
                      href={ele.demoLink}
                      target="_blank"
                      className="btn btn-primary btn-sm bg-gradient"
                      rel="noopener noreferrer"
                    >
                      A Quick Demo ?
                    </a>
                  </div>
                ))}
            </Carousel>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
