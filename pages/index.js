import Head from "next/head";
import { Element } from "react-scroll/modules";
import { useState } from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IntroductionBox from "../components/IntroductionBox";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import React from "react";
export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkMode = (currentMode = "light" | "dark-theme") => {
    setIsDarkMode(currentMode === "light" ? false : true);
  };

  React.useEffect(() => {
    console.log(
      "██╗  ██╗███████╗██╗     ██╗      ██████╗     ██╗    ██╗ ██████╗ ██████╗ ██╗     ██████╗ \n██║  ██║██╔════╝██║     ██║     ██╔═══██╗    ██║    ██║██╔═══██╗██╔══██╗██║     ██╔══██╗\n███████║█████╗  ██║     ██║     ██║   ██║    ██║ █╗ ██║██║   ██║██████╔╝██║     ██║  ██║\n██╔══██║██╔══╝  ██║     ██║     ██║   ██║    ██║███╗██║██║   ██║██╔══██╗██║     ██║  ██║\n██║  ██║███████╗███████╗███████╗╚██████╔╝    ╚███╔███╔╝╚██████╔╝██║  ██║███████╗██████╔╝\n╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝      ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═════╝ \n\nThanks for Visiting my site. Let's connect and share knowledge together..\n\n"
    );
  }, []);
  return (
    <>
      <Head>
        <title>Shradha Suman Prahraj</title>
        <meta
          name="description"
          content="Hello world! I am a web developer, a Trainer, a Learner. I love to connect with people try to solve their problems regarding the web design and programming. If you need any help regarding the web design and programming please connect with me I will be happy to share and exchange knowledge."
        />
        <meta keywords="Software Engineer, Web designer, Web developer, JavaScript, JQuery, Angular, React, Vue, Next, Freelancing, Teaching, Cuttack, Orissa, India." />
        <meta name="author" content="Shradha Suman Prahraj" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-title"
          content="Shradha Suman Prahraj"
        />
        <meta charSet="UTF-8" />
        <meta name="application-name" content="Shradha Suman Prahraj" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta property="og:title" content="Shadha suman prahraj" />
        <meta property="og:url" content="index.html" />
        <meta property="og:image" content="/SSP-full.png" />
        <meta property="og:site_name" content="shradhasuman Prahraj" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Header handleDarkMode={handleDarkMode} />

      <Element
        id="mainContainer"
        style={{
          minHeight: "100vh",
        }}
      >
        <IntroductionBox />
        <About />
        <Skills isDarkMode={isDarkMode} />
        <Projects />
        <Contact />
      </Element>

      <Footer />
    </>
  );
}
