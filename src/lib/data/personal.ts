export interface PersonalInfo {
  name: string;
  fullName: string;
  birthYear: number;
  experienceStartYear: number;
  role: string;
  company: {
    name: string;
    url: string;
  };
  location: string;
  githubUsername: string;
  socialLinks: {
    twitter: string;
    linkedin: string;
    github: string;
  };
  sourceCodeUrl: string;
  baseStats: {
    codeWritten: number;
    bugsFixed: number;
    projectsCompleted: number;
  };
}

export const personalInfo: PersonalInfo = {
  name: "Shradha",
  fullName: "Shradha Suman Praharaj",
  birthYear: 1996,
  experienceStartYear: 2018,
  role: "Full Stack AI Engineer",
  company: {
    name: "LTM",
    url: "https://www.ltm.com/",
  },
  location: "Silver City Cuttack, Odisha",
  githubUsername: "inkxe-shradha",
  socialLinks: {
    twitter: "https://twitter.com/shradhasuman21",
    linkedin: "https://www.linkedin.com/in/shradha-suman-praharaj20",
    github: "https://github.com/inkxe-shradha",
  },
  sourceCodeUrl: "https://github.com/inkxe-shradha/my-name-is-shradha",
  baseStats: {
    codeWritten: 30000,
    bugsFixed: 500,
    projectsCompleted: 50,
  },
};
