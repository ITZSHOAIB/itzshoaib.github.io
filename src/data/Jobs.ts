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
    company: "Skillsoft",
    location: "India (Remote)",
    goals: [
      "Architected and led the development of LX Studio, a next-gen agentic AI-driven learning experience platform, from the ground up—proposing and implementing its foundational architecture now used org-wide.",
      "Designed efficient RAG pipelines using different chunking strategies, rerankers on top of large document-based knowledge sources for AI-powered learning.",
      "Designed and built a custom agent framework NPM library adopted across app teams, dramatically reducing AI agent development time and integrating key systems like multi-agent workflow, Tool integration, Chat Storing conventions, MCP, Guardrails, and RAG pipelines.",
      "Acted as de facto tech lead in a flat team structure, mentoring peers and driving team-wide ownership, autonomy, and architectural quality through initiative and collaboration.",
      "Delivered strategic enhancements to flagship platforms like Codecademy and Percipio, improving system scalability, user experience, and internal development efficiency.",
      "Modernized frontend integration across enterprise apps through Module Federation, enabling seamless collaboration between independently deployed micro frontends.",
      "Technologies: Langgraph, Langchain, MCP, A2A, LlamaIndex, VectorDB, RAG, OpenAI, Module Federation, Nextjs, Reactjs, Gamut (In-house design library), TypeScript, Ruby on Rails, Ruby, Node.js, JavaScript, GraphQL, PostgreSQL, EFS, S3, Docker, Kubernetes, RabbitMQ, AWS, Git, Github Actions, Jenkins, Jest, Vitest, Redux, Redux Toolkit, Module Federation, Webpack, RSpack, SWC",
    ],
    currentJob: true,
  },
  {
    title: "Software Engineer",
    startDate: "2022-08",
    endDate: "2024-06",
    company: "Ernst & Young Global Delivery Services",
    location: "Kolkata, India",
    goals: [
      "Collaborated with team members to develop and deploy full stack blockchain applications using Solidity, Hardhat, NestJS, React, and other technologies for BEC (blockchain.ey.com) platform.",
      "Worked on two products: OpsChain Contract Manager and OpsChain ESG, which are SaaS products that automate and track real-world contract agreements and environmental, social, and governance (ESG) data on the public Ethereum blockchain with privacy (ZKP).",
      "Built RESTful and GraphQL microservices with Docker containers and integrated them with Azure Kubernetes Service and Azure API Management.",
      "Implemented zero knowledge proof applications (zApps) using Starlight and ERC-1155 smart contracts using Solidity.",
      "Fixed infosec issues and wrote end-to-end tests, smoke tests, and unit tests using Jest and Supertest.",
      "Technologies: Solidity, Blockchain, Smart Contracts, Hardhat, Git, Docker, Jest, Swagger API, REST APIs, GraphQL, NestJS, Redux.js, Redux Toolkit, React.js, Nextjs, Material-UI, styled-components, TypeScript, Node.js, JavaScript, MongoDB, Azure Kubernetes Service, Azure API Management, Polygon Mumbai Testnet",
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
      "Built web applications using MERN Stack (React, Node, Express, MongoDB) from scratch for Strategy and Transformation (S&T) project.",
      "Used React/Redux (Redux Toolkit) for the frontend and Node/Express for the backend API for CRUD and other operations.",
      "Worked on Java BDD Automation Framework Development, which includes Selenium and Appium for automated testing.",
      "Technologies: ReactJS, NodeJS, Express, MongoDB, ReduxJS, Redux Toolkit, Java, Selenium, Appium",
    ],
    currentJob: false,
  },
];
export default workExperience;
