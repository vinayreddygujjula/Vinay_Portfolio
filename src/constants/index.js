import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  bootstrap,
  java,
  python,
  postgresql,
  aws,
  azure,
  agile,
  junit,
  mockito,
  selenium,
  jest,
  easymock,
  windows,
  linux,
  gitlab,
  kanban,
  restapi,
  microservices,
  html,
  css,
  reactjs,
  jenkins,
  vuejs,
  nodejs,
  mongodb,
  git,
  springboot,
  jira,
  docker,
  postman,
  sonarqube,
  acidbase,
  classicauto,
  transactionmonitoring,
  adfm,
  ats,
  falldetectionsystem,
  innoversity,
  textbookfinder,
  mailorderpharmacy,
  scriptswitch,
  autoenroll,
  timeclock,
  panelmanagement,
  mysql,
  nwmsu,
  vak,
  women,
  men,
  srinisoft,
  optum,
  cognizant,
  typescript,
  angular,
  jquery,
  csharp,
  dotnetcore,
  aspnetmvc,
  aspnetwebapi,
  graphql,
  blazor,
  kafka,
  sqlserver,
  oracle,
  firebase,
  cicd,
  nunit,
  moq,
  jmeter,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Scalable Systems Designer",
    icon: mobile,
  },
  {
    title: "User-Focused Interface Architect",
    icon: backend,
  },
  {
    title: "Agile Practitioner",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "JIRA",
    icon: jira,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Srini Soft Inc.",
    icon: srinisoft,
    iconBg: "#383E56",
    date: "Jan 2024 – Present",
    points: [
      "Designed and developed the 'Classic Auto' insurance platform using ASP.NET Core Web API, React.js, Redux, and SQL Server, implementing features like VIN-based workflows, premium calculations, JWT-based API security, and Azure-hosted deployments with logging and diagnostics via Application Insights and Log4Net, while contributing to Agile sprints and writing unit/integration tests using NUnit and Moq."
    ]
  },
  {
    title: "Software Developer",
    company_name: "Northwest Missouri State University",
    icon: nwmsu,
    iconBg: "#383E56",
    date: "Aug 2023 – Dec 2024",
    points: [
      "Built and maintained full-stack academic systems including AutoEnroll, TimeClock, and OPTextbook using .NET Core, ASP.NET MVC, Web API, React.js, and Kafka, with MySQL for scheduling/attendance data and MongoDB for textbook search; implemented RBAC, JWT authentication, Azure DevOps CI/CD, and deployed services across Azure App Services, Azure SQL, and Blob Storage."
    ]
  },
  {
    title: "Software Developer",
    company_name: "Optum Global Solutions",
    icon: optum,
    iconBg: "#E6DEDD",
    date: "Jul 2022 – Jul 2023",
    points: [
      "Contributed to ScriptSwitch, a clinical prescribing support tool for NHS, by developing backend modules using .NET Core Web API and Entity Framework, building KnockoutJS-based UI, writing complex SQL Server/MySQL queries, integrating SSIS for ETL, and managing deployments with Jenkins, Octopus Deploy, and InstallShield across Azure-hosted environments."
    ]
  },
  {
    title: "Software Developer",
    company_name: "Cognizant Technology Solutions",
    icon: cognizant,
    iconBg: "#E6DEDD",
    date: "Jun 2021 – Jun 2022",
    points: [
      "Worked on the Mail Order Pharmacy platform using ASP.NET Core Web API, React.js, Redux, and MongoDB to manage end-to-end prescription workflows including order processing, real-time tracking via third-party logistics APIs, and reporting modules, with deployments on AWS EC2 using Docker and secure authentication following HIPAA standards."
    ]
  },
  {
    title: "Junior Software Engineer",
    company_name: "VAK IT Systems",
    icon: vak,
    iconBg: "#E6DEDD",
    date: "Jan 2020 – May 2021",
    points: [
      "Developed the Panel Management System using ASP.NET Core Web API, React.js, and Entity Framework with Azure-hosted MySQL, implementing modular scheduling, interview coordination, Kafka-based messaging, and front-end optimization using React Hooks and Context API."
    ]
  }
];


const testimonials = [
  {
    testimonial:
      "Vinay is a skilled software developer with great technical knowledge and expertise in the development of software solutions using C# .Net and VueJS. I had the pleasure of working as his supervisor on the development of web applications involving complex authentication and authorizations. I am confident in his ability to understand technical requirements and develop user friendly software applications and I am happy to recommend Vinay to a team looking for a skilled software developer.",
    name: "Bikash Adhikari",
    designation: "Software Developer | Programming Lead",
    company: "Northwest Missouri State University",
    image: men,
  },
  {
    testimonial:
      "Vinay has been employed in the Learning & Teaching Center at Northwest Missouri State University as a student employee Software Developer. The projects he has worked on are the Auto Enroll for Online students which enrolls students automatically in their first online course of their program. He also worked on the maintenance and update of the office Time Clock. The Time Clock helps to manage student employee time worked. He also worked on the Online Professional Textbook Finder which is a program that creates a place for online students to look up textbooks and materials required for online classes. Vinay has done a great job in contributing to the programming maintenance and development in the Learning & Teaching Center. He has been prompt and professional in all of his work. I would recommend Vinay for employment in his field.",
    name: "Darla Runyon",
    designation: "Director--Learning & Teaching Center and Northwest Online at Northwest Missouri State University",
    company: "Northwest Missouri State University",
    image: women,
  },
];

const projects = [
  {
    name: "OPTextbook (Online Professional Textbook Finder)",
    description: "ASP.NET + Vue.js platform to manage and view course textbooks for online students and faculty.",
    detailedDescription:
      "A digital textbook management system that allows students to search and view required materials for their courses, and enables faculty to manage adoptions and submissions. Built using ASP.NET Core Web API and Vue.js, with MySQL as the backend and hosted on Windows Servers.",
    features: [
      "Student and faculty views with intuitive textbook search",
      "Re-adoption of past course materials",
      "Excel-based batch processing and admin upload",
      "Integrated with Canvas for course/term sync",
      "MySQL used for course and material storage"
    ],
    tags: [
      { name: "ASP.NET Core", color: "blue-text-gradient" },
      { name: "Vue.js", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
    ],
    image: textbookfinder,
    source_code_link: "https://github.com/",
  },
  {
    name: "AutoEnroll System",
    description: "Course enrollment tool with Excel uploads, eligibility rules, and PDF generation.",
    detailedDescription:
      "A smart enrollment assistant for higher education, AutoEnroll allows admins and program leads to plan courses, blocks, and CRNs. Supports automated PDF output and Excel uploads for batch entry. Built using .NET Core and React.js with MySQL for data storage.",
    features: [
      "Admin upload of course lists via Excel",
      "Program-specific course selections and CRNs",
      "PDF generation and email submission",
      "Role-based access (Admin, Program Lead)",
      "MySQL backend for structured data"
    ],
    tags: [
      { name: "ASP.NET Core", color: "blue-text-gradient" },
      { name: "React JS", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
    ],
    image: autoenroll,
    source_code_link: "https://github.com/",
  },
  {
    name: "Time Clock Application",
    description: "Attendance tracking platform with clock-in/out, summaries, and admin dashboards.",
    detailedDescription:
      "Web-based employee time tracking application where users can clock in/out, view summaries, and download reports. Admins have full visibility of attendance data and reporting features. Built using ASP.NET Core Web API, React.js, and MySQL for storage.",
    features: [
      "Employee and admin views with time summaries",
      "Clock-in/out tracking with detailed reports",
      "Attendance dashboards and exportable summaries",
      "Built with React.js and .NET Core Web API",
      "MySQL backend for persistent attendance data"
    ],
    tags: [
      { name: "React JS", color: "green-text-gradient" },
      { name: "ASP.NET Core", color: "blue-text-gradient" },
      { name: "MySQL", color: "blue-text-gradient" },
    ],
    image: timeclock,
    source_code_link: "https://github.com/",
  },
  {
    name: "ScriptSwitch (NHS Prescribing Tool)",
    description: "Clinical decision support platform integrated into NHS prescribing workflows.",
    detailedDescription:
      "ScriptSwitch provides GPs with real-time clinical recommendations for safer, more cost-effective prescribing. Built using ASP.NET Core and KnockoutJS, with SQL Server and SSIS for clinical data processing and synchronization across NHS practices.",
    features: [
      "Real-time alerts for medication safety and costs",
      "SSIS for ETL from clinical databases",
      "Integration with Vision and other NHS systems",
      "Hosted on Azure with automated deployments",
      "Used in 4,400+ practices across UK"
    ],
    tags: [
      { name: ".NET Core", color: "blue-text-gradient" },
      { name: "KnockoutJS", color: "green-text-gradient" },
      { name: "SQL Server", color: "pink-text-gradient" },
      { name: "Azure", color: "blue-text-gradient" },
    ],
    image: scriptswitch,
    source_code_link: "https://github.com/",
  },
  {
    name: "Mail Order Pharmacy",
    description: "Full-stack prescription delivery platform with MongoDB and real-time logistics integration.",
    detailedDescription:
      "A HIPAA-compliant pharmacy solution built with ASP.NET Core and React.js, allowing patients to manage orders and track deliveries. Includes logistics API integrations, MongoDB for flexible data models, and Docker-based deployment to AWS.",
    features: [
      "Prescription ordering and refill workflows",
      "MongoDB for flexible, schema-less storage",
      "Third-party logistics API integration",
      "JWT & RBAC for secure access",
      "Dockerized deployment on AWS EC2"
    ],
    tags: [
      { name: "ASP.NET Core", color: "blue-text-gradient" },
      { name: "React JS", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "AWS", color: "blue-text-gradient" },
    ],
    image: mailorderpharmacy,
    source_code_link: "https://github.com/",
  },
  {
  name: "Panel Management System",
  description: "Modular interview scheduling system with Kafka, .NET backend, and multi-role access.",
  detailedDescription:
    "Enterprise-grade application developed using ASP.NET Core Web API and React.js to align panelist availability with candidate schedules. It includes five integrated modules for managing users, master data, candidate profiles, panelist allocation, and interview logistics.",
  features: [
    "Five modules for complete interview management",
    "Role-based access control with JWT authentication",
    "Built using ASP.NET Core Web API, React.js, and MySQL",
    "Deployed on Microsoft Azure for scalability"
  ],
  tags: [
    { name: "ASP.NET Core", color: "blue-text-gradient" },
    { name: "React JS", color: "green-text-gradient" },
    { name: "Kafka", color: "pink-text-gradient" },
    { name: "MySQL", color: "blue-text-gradient" },
    { name: "Azure", color: "green-text-gradient" },
  ],
  image: panelmanagement,
  source_code_link: "https://github.com/",
},
{
  name: "Innoversity",
  description: "Crowdsourced innovation portal with .NET backend and gamified challenge features.",
  detailedDescription:
    "Innoversity is a platform that connects innovators with organizations through challenge-based problem solving. Built using ASP.NET Core Web API and React.js with MongoDB, it supports role-based access, a rewards system, and real-time leaderboard updates.",
  features: [
    "Challenge listing and response submission",
    "Gamified rewards and leaderboard tracking",
    "JWT-secured multi-role authentication",
    "MongoDB for dynamic, schema-less data handling",
    "ASP.NET Core backend with React.js frontend"
  ],
  tags: [
    { name: "ASP.NET Core", color: "blue-text-gradient" },
    { name: "React JS", color: "green-text-gradient" },
    { name: "MongoDB", color: "pink-text-gradient" },
  ],
  image: innoversity,
  source_code_link: "https://github.com/vaishnavi-varaganti/innoversity",
},
{
    name: "Fall Detection System for the Elderly",
    description: "IoT-based fall alert system with wearable sensor and emergency notification.",
    detailedDescription:
      "An IoT project to detect falls using accelerometer data from Raspberry Pi. Alerts are sent to caregivers through a Firebase-connected mobile app within 15 seconds.",
    features: [
      "Wearable device with fall detection sensors",
      "Real-time alerts via mobile app",
      "Firebase backend with emergency contacts",
      "90%+ detection accuracy",
      "Reliable UI for seniors and caregivers"
    ],
    tags: [
      { name: "IoT", color: "blue-text-gradient" },
      { name: "Android", color: "green-text-gradient" },
      { name: "Raspberry Pi", color: "pink-text-gradient" },
    ],
    image: falldetectionsystem,
    source_code_link: "https://github.com/vaishnavi-varaganti/Fall-Detection-System-for-the-Elderly",
  },

];


const categorizedTechnologies = [
  {
    category: "Frontend",
    items: [
      { name: "JavaScript", icon: javascript },
      { name: "TypeScript", icon: typescript },
      { name: "React.js", icon: reactjs },
      { name: "Angular", icon: angular },
      { name: "Vue.js", icon: vuejs },
      { name: "HTML5", icon: html },
      { name: "CSS3", icon: css },
      { name: "Bootstrap", icon: bootstrap },
      { name: "jQuery", icon: jquery },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "C#", icon: csharp },
      { name: ".NET Core", icon: dotnetcore },
      { name: "ASP.NET MVC", icon: aspnetmvc },
      { name: "ASP.NET Web API", icon: aspnetwebapi },
      { name: "Java", icon: java },
      { name: "Spring Boot", icon: springboot },
      { name: "REST APIs", icon: restapi },
      { name: "Microservices", icon: microservices },
      { name: "GraphQL", icon: graphql },
      { name: "Blazor", icon: blazor },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "SQL Server", icon: sqlserver },
      { name: "MySQL", icon: mysql },
      { name: "MongoDB", icon: mongodb },
      { name: "Oracle PL/SQL", icon: oracle },
      { name: "Firebase", icon: firebase },
    ],
  },
  {
    category: "DevOps & Cloud Technologies",
    items: [
      { name: "Azure", icon: azure },
      { name: "AWS", icon: aws },
      { name: "Jenkins", icon: jenkins },
      { name: "Docker", icon: docker },
      //{ name: "Kubernetes", icon: kubernetes },
      { name: "CI/CD pipelines", icon: cicd },
    ],
  },
  {
    category: "Testing & Quality",
    items: [
      { name: "NUnit", icon: nunit },
      { name: "JUnit", icon: junit },
      { name: "Moq", icon: moq },
      { name: "Mockito", icon: mockito },
      { name: "Jest", icon: jest },
      { name: "Postman", icon: postman },
      { name: "JMeter", icon: jmeter },
      { name: "SonarQube", icon: sonarqube },
      { name: "Selenium", icon: selenium },
    ],
  },
  {
    category: "Agile Methodologies",
    items: [
      { name: "Agile Scrum", icon: agile },
      { name: "Kanban", icon: kanban },
      { name: "JIRA", icon: jira },
    ],
  },
  {
    category: "Operating Systems",
    items: [
      { name: "Windows", icon: windows },
      { name: "Linux", icon: linux },
    ],
  },
];

export { services, technologies, experiences, testimonials, projects, categorizedTechnologies };
