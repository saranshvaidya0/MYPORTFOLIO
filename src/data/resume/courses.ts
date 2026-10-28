export interface Course {
  title: string;
  number: string;
  link: string;
  university: string;
}

const courses: Course[] = [
  {
    title: 'Machine Learning',
    number: 'AI & DS',
    link: 'https://scikit-learn.org/stable/user_guide.html',
    university: 'Self-Learning & Projects',
  },
  {
    title: 'Deep Learning and CNNs',
    number: 'DL',
    link: 'https://www.tensorflow.org/tutorials',
    university: 'Self-Learning & Projects',
  },
  {
    title: 'Natural Language Processing',
    number: 'NLP',
    link: 'https://huggingface.co/learn',
    university: 'Self-Learning & Projects',
  },
  {
    title: 'Generative AI and Large Language Models',
    number: 'GenAI',
    link: 'https://cloud.google.com/learn/training',
    university: 'Google Cloud Gen AI Academy 2.0',
  },
  {
    title: 'Data Analytics and Business Intelligence',
    number: 'BI',
    link: 'https://www.microsoft.com/en-us/power-platform/products/power-bi',
    university: 'Eliora Techno',
  },
  {
    title: 'Python for Data Science',
    number: 'Python',
    link: 'https://onlinecourses.nptel.ac.in/',
    university: 'NPTEL',
  },
  {
    title: 'Programming Using Python',
    number: 'Python',
    link: 'https://clickstart.leeds.ac.uk/',
    university: 'University of Leeds & ClickStart',
  },
  {
    title: 'Cloud Computing',
    number: 'CC',
    link: 'https://onlinecourses.nptel.ac.in/',
    university: 'NPTEL',
  },
  {
    title: 'Full-Stack Web Development',
    number: 'Web Dev',
    link: 'https://developer.mozilla.org/',
    university: 'Projects & Certifications',
  },
  {
    title: 'Database Management and SQL',
    number: 'SQL',
    link: 'https://www.postgresql.org/docs/',
    university: 'Technical Skills & Projects',
  },
  {
    title: 'Data Visualization with Power BI',
    number: 'Power BI',
    link: 'https://learn.microsoft.com/en-us/power-bi/',
    university: 'Eliora Techno',
  },
  {
    title: 'HTML, CSS, Bootstrap and JavaScript',
    number: 'Web',
    link: 'https://www.w3schools.com/',
    university: 'NxtWave Academy',
  },
];

export default courses;
