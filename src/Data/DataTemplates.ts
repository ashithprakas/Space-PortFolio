import {
  GitHubIcon,
  HackerRankIcon,
  LinkedInIcon,
  ReactPortfolio,
  SolarSystem,
} from "../assets/images";
import { TimeLineTemplate } from "../models/ExperienceTimeline.models";
import { SocialsTemplate } from "../models/NavBar.models";
import { ProjectTemplate } from "../models/Projects.models";
import { SkillsSliderTemplate } from "../models/SkillsSlider.models";

/* This file consists of all personal info show on the site
    TODO:Remove constants and fetch data from DB for next prod 
*/
export const socialsTemplate: SocialsTemplate[] = [
  { src: LinkedInIcon, href: "https://www.linkedin.com/in/ashithprakas" },
  { src: GitHubIcon, href: "https://github.com/ashithprakas" },
  { src: HackerRankIcon, href: "https://www.hackerrank.com/dashboard" },
];

export const banerIntroduction = {
  tagLines: ["FrontEnd Developer", "Angular Developer", "React Developer"],
  name: "Ashith",
  introduction: `I am a Frontend Developer with 2 years of experience. I specialize
              in Angular, creating dynamic and responsive web applications with
              a focus on user experience and performance. I am currently
              expanding my expertise by learning React to stay at the forefront
              of frontend development trends. My goal is to continuously improve
              and innovate, contributing to impactful projects and connecting
              with like-minded professionals in the tech industry.`,
};

export const skillsTemplateArray: SkillsSliderTemplate[] = [
  { skillName: "HTML", percentage: 85 },
  { skillName: "CSS", percentage: 80 },
  { skillName: "Angular", percentage: 80 },
  { skillName: "Typescript", percentage: 75 },
  { skillName: "React", percentage: 75 },
  { skillName: "SQL", percentage: 80 },
  { skillName: "GIT", percentage: 70 },
  { skillName: "NodeJS", percentage: 70 },
  { skillName: "Jasmine", percentage: 75 },
  { skillName: "Python", percentage: 70 },
];

export const timeLineTemplate: TimeLineTemplate[] = [
  {
    Title: "Associate Software Developer at SOTI",
    Description: `Worked on the first ever release of SOTIXsight LiveView which was the first tool of its kind that consolidates business and device data,
    \n Worked on major architectural and code changes on the fronentend for Live View to keep on improving performance 
    \n Took part in code reviews and planing frontend architectural designs
    \n Worked on multiple Proof Of Concepts that later became integral part of the project`,
    Date: "Present",
  },
  {
    Title: "Associate Software Developer at SOTI(Trainee)",
    Description: `Underwent extensive 3 month training conducted by SOTI which provided insight into advanced frontend development techniques and other tools and languages such as Angular, SQL , C# , MVC Architecture , ASP.Net Webforms etc. 
      \nSuccessfully passed the project test by utilizing the gained knowledge to build a fullstack e-commerce website that was build on Angular, C# and SQL as its backend  `,
    Date: "November 2022",
  },
  {
    Title: "Graduated BTECH from Muthoot Institute of Technology and Science",
    Description: `Completed Bachelor's degree in Computer Science with a focus on software engineering. 
    Acquired in-depth knowledge of algorithms, data structures, computer networks, and software engineering principles. 
    \n Learned multiple languages including Python, C# , Java , HTML , CSS , Javascript and Utilized these knowledge to build small scale projects. 
    \n Worked on additional projects that utilized python and libraries like OpenCV and Pyttsx for image and speach recognition.`,
    Date: "August 2022",
  },
];

export const projectsArray: ProjectTemplate[] = [
  {
    title: "Space Portfolio",
    description:
      "Desingned a space themed portfolio showcasing my skills and experiences",
    imageUrl: ReactPortfolio,
    githubUrl: "https://github.com/ashithprakas/Space-PortFolio",
    websiteUrl: "https://ashithprakas.github.io/Space-PortFolio/",
  },
  {
    title: "Solar System",
    description:
      "Created a 3D visualization of Solar System using ThreeJS and GSAP",
    imageUrl: SolarSystem,
    githubUrl: "https://github.com/ashithprakas/SolarSystem",
  },
];

export const personalInfo = {
  email: "ashith.prakas@gmail.com",
  Phone: "+91 8129088867",
};
