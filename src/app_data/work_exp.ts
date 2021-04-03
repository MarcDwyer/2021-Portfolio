interface WorkExperience {
  companyName: string;
  duration?: string;
  title: string;
  descriptionRole: string[];
  currentJob?: boolean;
}
const WorkExp: WorkExperience[] = [
  {
    companyName: "M&D Technologies",
    title: "Full-Stack Developer",
    descriptionRole: [
      "Design and architecture of SPAs and PWAs using React, TypeScript and Redux/Mobx",
      "Development of React Native mobile application",
      "Built backend REST endpoints using TypeScript, NodeJS, Postgres and Go",
      "Integration of TypeScript, applying OOP principles",
      "Refactoring of applications to improve performance",
      "Developing and documenting of third party modules for Deno",
    ],
    currentJob: true,
  },
  {
    companyName: "Institute of Human and Machine Cognition",
    title: "Full-Stack Developer",
    currentJob: false,
    duration: "3 months",
    descriptionRole: [
      "Worked on Full-Stack administrative tool that was used to manage IHMC's projects",
      "Introduced new deployment methods such as Docker",
      "Communicated with Project Manager and Lead Developer on UI designs, tech stack and best possible solutions to create tool",
      "Created front-end and back-end using modern technologies such as TypeScript, NodeJS and ReactJS",
    ],
  },
];

export default WorkExp;
