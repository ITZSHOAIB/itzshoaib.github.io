/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
  title: string;
  startDate: string;
  endDate?: string;
  company: string;
  location: string;
  goals: string[];
  currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience: WorkExperience[] = [
  {
    title: "Software Engineer II",
    startDate: "2024-06",
    company: "Codecademy by Skillsoft",
    location: "India (Remote)",
    goals: [
      "Architected scalable and maintainable systems for AI-driven learning products at Codecademy, enabling teams to develop and scale independently.",
      "Led critical projects from conception to production, impacting millions of users in the learning space.",
      "Designed and implemented micro frontend architecture using Module Federation, BFF, and Micro-services, contributing visionary product ideas.",
      "Technologies:  Remix, React-Router V7, Nextjs, Reactjs, Gamut, styled-components, TypeScript, Ruby on Rails, Ruby, GO, Node.js, express, JavaScript, \
        TailwindCSS, GraphQL, MongoDB, PostgreSQL, Docker, Kubernates, AWS, Git, Github Actions, Jenkins, Jest, Vitest, \
        Redux, Redux Toolkit, Module Federation, Webpack, RSPack",
    ],
    currentJob: true,
  },
  {
    title: "Software Engineer",
    startDate: "2022-08",
    endDate: "2024-06",
    company: "Ernst & Young (GDS)",
    location: "Kolkata, India",
    goals: [
      "Collaborated with team members to develop and deploy full stack blockchain applications using Solidity, Hardhat, NestJS, and React for the BEC platform.",
      "Contributed to OpsChain Contract Manager and OpsChain ESG, automating contract agreements and ESG data tracking on the Ethereum blockchain with privacy features.",
      "Built and integrated RESTful and GraphQL microservices with Docker, Azure Kubernetes Service, and Azure API Management, while implementing zero knowledge proof applications and addressing infosec issues.",
      "Technologies:  Solidity, Blockchain, Smart Contracts, Hardhat, Git, Docker, Jest, Swagger API, REST APIs, GraphQL, \
      NestJS, Redux.js, Redux Toolkit, React.js, Nextjs, Material-UI, styled-components, TypeScript, Node.js, JavaScript, \
      MongoDB, Azure, Polygon Mumbai Testnet",
    ],
    currentJob: false,
  },
  {
    title: "Assistant System Engineer",
    startDate: "2020-02",
    endDate: "2022-08",
    company: "Tata Consultancy Services",
    location: "Kolkata, India",
    goals: [
      "Developed web applications from scratch using the MERN stack (React, Node, Express, MongoDB) for the Strategy and Transformation (S&T) project.",
      "Utilized React/Redux (Redux Toolkit) for the frontend and Node/Express for backend API development, handling CRUD operations and more.",
      "Contributed to Java BDD Automation Framework Development, incorporating Selenium and Appium for automated testing.",
      "Technologies: ReactJS, NodeJS, Express, MongoDB, ReduxJS, Redux Toolkit, Java, Selenium, Appium",
    ],
    currentJob: false,
  },
];
export default workExperience;
