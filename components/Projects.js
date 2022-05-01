import React from "react";
import { Element } from "react-scroll/modules";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
const Projects = () => {
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
              <div key="content-0">
                <Image
                  src="/assets/projects/deltavo-india.png"
                  alt="deltavo private limited"
                  layout="fixed"
                  width={330}
                  height={300}
                />
                <h5 className="my-3">Deltavo Private Limited.</h5>
                <hr />
                <p className="description">
                  Deltavo is a MLM based project. It is a Multi level marketing
                  app that able to manage the business of adding more people
                  selling more products get profit limitless.
                  <br />
                  <br />
                  The tech stack I used is for the app are
                  <em>
                    {" "}
                    PHP, JavaScript, Vue, CodeIgniter, MySQL, CSS, etc...
                  </em>
                </p>
                <a
                  href="https://deltavo.co.in/"
                  target="_blank"
                  className="btn btn-primary btn-sm bg-gradient"
                  rel="noopener noreferrer"
                >
                  A Quick Demo ?
                </a>
              </div>
              <div key="content-1">
                <Image
                  src="/assets/projects/dada-biriyani.png"
                  alt="Dada Biriyani"
                  layout="fixed"
                  width={330}
                  height={300}
                />

                <h5 className="my-3">Dada Biriyani</h5>
                <hr />
                <p className="description">
                  Love Briyani ? Dada Biriyani is a restaurant in the city of
                  cuttack,Odisha. Fully customized waiter less service, from
                  printing to ordering to delivery to executing the food, all
                  will be automatic.
                  <br />
                  <br />
                  The tech stack I used is for the app are{" "}
                  <em>
                    PHP, JavaScript, Slim, OAuth, React, Redux, Material UI,
                    MySQL, CSS, etc...
                  </em>
                </p>
                <a
                  href="http://dadabiryani.in/"
                  target="_blank"
                  className="btn btn-primary btn-sm bg-gradient"
                  rel="noopener noreferrer"
                >
                  A Quick Demo ?
                </a>
              </div>
              <div key="content-2">
                <Image
                  src="/assets/projects/siit-odisha.png"
                  alt="Site Odisha"
                  layout="fixed"
                  width={330}
                  height={300}
                />
                <h5 className="my-3">Site Orissa</h5>
                <hr />
                <p className="description">
                  Featuring the app with online testing facilities, payment
                  integration, Student Management, Faculty Management,etc...
                  <br />
                  <br />
                  The tech stack I used is for the app are{" "}
                  <em>
                    PHP,JavaScript, Code Igniter, Angular, BootStrap UI, MySQL,
                    CSS, etc...
                  </em>
                </p>
                <a
                  href="http://siitodisha.com/"
                  target="_blank"
                  className="btn btn-primary btn-sm bg-gradient"
                  rel="noopener noreferrer"
                >
                  A Quick Demo ?
                </a>
              </div>
              <div key="content-2">
                <Image
                  src="/assets/projects/vbconn.jpeg"
                  alt="Vbconn"
                  layout="fixed"
                  width={250}
                  height={250}
                />

                <h5 className="my-3">Vbconn</h5>
                <hr />
                <p className="description">
                  A online health care application for the patients, having
                  feature like video call, appointment, doctor, percussion and
                  many more.
                  <br />
                  <br />
                  The tech stack I used is for the app are{" "}
                  <em>
                    PHP, slim, OAuth, Illuminate, MySQL, Ionic, Angular,
                    JavaScript.
                  </em>
                </p>
                <a
                  href="http://vabcon.com/"
                  target="_blank"
                  className="btn btn-primary btn-sm bg-gradient"
                  rel="noopener noreferrer"
                >
                  A Quick Demo ?
                </a>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
