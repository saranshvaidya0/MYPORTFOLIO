/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Open Contributor',
    position: 'Full-Stack Developer',
    url: 'https://github.com/saranshvaidya0',
    startDate: '2024-01-30',
    summary: `Building solutions designed to meet your needs, from AI chatbots and full-stack web development to custom software solutions, responsive websites, API integration, database management, and deployment. I focus on creating innovative, secure, scalable, and reliable applications that help clients achieve their business goals.`,
  },
  {
    name: 'Business Intelligence',
    position: 'Data Analytics',
    url: 'https://www.tofler.in/eliora-technologies-private-limited/company/U72900MH2020PTC344807',
    startDate: '2025-07-01',
    endDate: '2025-09-30',
    summary: `Completed Business Intelligence and Data Analytics training at Eliora Techno, gaining practical experience in Python, Power BI, SQL, Microsoft Excel, and data visualization. Developed interactive dashboards, performed data cleaning, data transformation, and Exploratory Data Analysis (EDA), and analyzed structured datasets to identify trends, patterns, and key performance metrics.`,
    highlights: [
      'Learned Python, SQL, Microsoft Excel, Power BI, and core business analytics concepts.',
      'Created 5+ interactive Power BI dashboards and analytical reports to visualize data and track key performance metrics.',
      'Performed data cleaning, transformation, and Exploratory Data Analysis (EDA) to improve data quality and understand datasets.',
      'Analyzed datasets using Python libraries including Pandas, NumPy, and Matplotlib.',
      'Identified trends, patterns, and actionable insights to support data-driven decision-making.',
    ],
  },
  {
    name: 'SIH 2026 – Dam Break Inundation Modelling',
    position: 'Project Developer',
    url: 'https://github.com/saranshvaidya0/AI_Bandits_SIH26',
    startDate: '2026-01-01',
    endDate: '2026-12-31',
    summary: `Working on a Smart India Hackathon (SIH) 2026 project focused on Dam Break Inundation Modelling using hydrodynamic modelling of rivers. The project aims to simulate flood propagation, map inundated areas, and estimate potential flood impacts to support disaster preparedness and risk assessment using geospatial data and hydrodynamic modelling techniques.`,
    highlights: [
      'Developing a flood modelling solution to study dam-break scenarios and river inundation patterns.',
      'Exploring hydrodynamic modelling techniques using tools such as Delft3D and SPH-based approaches.',
      'Working with geospatial datasets, including SHP and KML files, for flood extent visualization and mapping.',
      'Exploring Google Earth Engine and open-source geospatial data for environmental analysis.',
      'Planning a dashboard to visualize flood propagation, inundation zones, and potential risk areas for disaster management.',
    ],
  },
  {
    name: 'Google Summer of Code (GSoC) 2026',
    position: 'Open-Source Contributor',
    url: 'https://summerofcode.withgoogle.com/',
    startDate: '2026-01-01',
    endDate: '2026-12-31',
    summary: `Contributed to open-source software development through Google Summer of Code (GSoC) 2026, focusing on understanding existing codebases, collaborating with the open-source community, and developing software solutions. Gained experience in code contributions, collaborative development, and open-source best practices.`,
    highlights: [
      'Explored open-source projects and contributed to software development initiatives.',
      'Worked with existing codebases to understand project architecture and development workflows.',
      'Collaborated with community members and followed open-source contribution guidelines.',
      'Improved programming, debugging, problem-solving, and version control skills using Git and GitHub.',
    ],
  },
  {
    name: 'Technical Committee Lead',
    position: 'Technical Head',
    url: 'https://www.wcem.in/',
    startDate: '2024-07-01',
    endDate: '2025-07-31',
    summary: `Led the technical committee at Wainganga College of Engineering & Management, coordinating a team of 10–15 members to organize technical events, coding competitions, hackathons, workshops, and AI and Web Development sessions. Focused on team coordination, event planning, resource management, and delivering engaging technical learning experiences for students.`,
    highlights: [
      'Led and coordinated a technical committee of 10–15 members to plan and execute college technical activities.',
      'Organized college hackathons, coding competitions, technical workshops, AI and Web Development sessions, technical quizzes, and project exhibitions.',
      'Managed technical event operations, project planning, resource allocation, and event logistics.',
      'Coordinated team responsibilities and workflows to ensure smooth event execution.',
      'Supported technical training, process documentation, and collaborative problem-solving among team members.',
    ],
  },
  {
    name: 'Prompt War Hackathon',
    position: 'Team Lead',
    url: 'https://www.hack2skill.com/',
    startDate: '2025-02-01',
    endDate: '2025-03-24',
    summary: `Participated in Prompt War, a hackathon organized by Hack2Skill in collaboration with Google. Led a team of 4 members to develop an AI-powered application using prompt engineering and Large Language Models (LLMs), building a functional prototype within the competition timeline.`,
    highlights: [
      'Developed an AI-powered application using prompt engineering and Large Language Models (LLMs).',
      'Integrated AI APIs and optimized prompt workflows to improve response accuracy and user interaction.',
      'Led a team of 4 members, assigned development tasks, and coordinated project milestones.',
      'Implemented core application features and delivered the final project demonstration within the competition deadline.',
    ],
  },
];

export default work;
