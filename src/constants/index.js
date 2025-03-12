import project1 from '../assests/projects/project-1.png';
import project2 from '../assests/projects/project-2.png';
import project3 from '../assests/projects/project-3.png';
import project4 from '../assests/projects/project-4.png';
import project5 from '../assests/projects/project-5.png';
import project6 from '../assests/projects/project-6.png';
import project7 from '../assests/projects/project-7.png';
import project8 from '../assests/projects/project-8.png';
import project9 from '../assests/projects/project-9.png';
import project10 from '../assests/projects/project-10.png';

export const HERO_CONTENT = `I am a skilled Software Developer with expertise in building modern, responsive, and high-performance web applications. Proficient in technologies like Python ,Javascript, React.js, Tailwind CSS, Node.js, MongoDB, and Mysql , I specialize in creating seamless user experiences and scalable solutions. Passionate about solving complex problems and continuously improving my craft, I aim to contribute to impactful projects and drive innovation in the tech world.`;

export const ABOUT_TEXT = `I am a dedicated Software Developer with a strong focus on frontend technologies like Next.js, React.js, and Tailwind CSS, complemented by backend expertise in Node.js, Express, MongoDB, Django, Mysql and Prisma. I have hands-on experience in building real-time applications, optimizing performance, and delivering user-friendly solutions. Proficient in tools like Git, Docker, and AWS (EC2, S3, RDS), I also work with relational databases like MySQL. With a passion for learning and problem-solving, I thrive on tackling challenges and contributing to meaningful projects. Outside of coding, I enjoy exploring new tools, contributing to open-source, and staying updated with the latest tech trends.`;

export const INTERNSHIPS = [
  {
    year: '2023 Feb - July',
    role: 'Data Scientist Intern',
    company: 'Innomatics Research Lab',
    description: `Worked on projects involving Python, Flask, Pandas, and machine learning algorithms. Gained experience in data analysis, NLP, and building machine learning models.`,
    technologies: [
      'Python',
      'Flask',
      'Pandas',
      'Scikit-learn',
      'NLP',
      'OpenCV',
    ],
  },
];

export const CERTIFICATIONS = [
  {
    title: 'IoT-Software Analyst with Python',
    organization: 'APSSDC',
    description: `Completed a certification on IoT with Python, focusing on real-world software analysis, Python programming, and IoT integration.`,
  },
  {
    title: 'GATE 2023',
    organization: 'CS',
    description: `GATE 2023 score of 434 and All India Rank of 5226.`,
  },
];

export const PROJECTS = [
  {
    title: 'Messenger Clone',
    image: project5, // Replace with your image
    description: `Real-Time Chat Application: Built using Next.js, React, Tailwind CSS, and shadcn/ui. Integrated NextAuth for Google and GitHub login. Implemented real-time communication with Pusher.`,
    technologies: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'shadcn/ui',
      'NextAuth',
      'Pusher',
      'Prisma',
      'MongoDB',
    ],
    liveLink: 'https://swift-chat-rho.vercel.app/',
    sourceCode: 'https://github.com/venky916/messenger-clone',
  },
  {
    title: 'Next-Chat-App',
    image: project6, // Replace with your image
    description: `A real-time chat application with WebSocket-based communication. Frontend built using Next.js, shadcn/ui, and Tailwind CSS, deployed on Vercel. Backend powered by Node.js, Express, and MongoDB, deployed on Render.`,
    technologies: [
      'Next.js',
      'shadcn/ui',
      'Tailwind CSS',
      'WebSockets',
      'Node.js',
      'Express',
      'MongoDB',
    ],
    liveLink: 'https://next-chat-blue-nu.vercel.app/',
    sourceCode: {
      frontend: 'https://github.com/venky916/Next-chat',
      backend: 'https://github.com/venky916/chat-vercel-backend',
    },
  },
  {
    title: 'Discord Clone',
    image: project7, // Replace with your image
    description: `A real-time chat app built with Next.js, React, Tailwind CSS, and shadcn/ui. Features dark/light mode, PDF/image support, emoji pickers, and WebSocket-based messaging. Integrated Clerk for authentication and Tanstack Query for optimized data fetching.`,
    technologies: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'shadcn/ui',
      'Clerk',
      'WebSockets',
      'Tanstack Query',
      'Prisma',
      'MongoDB',
    ],
    liveLink: 'https://discord-clone-production-2c0d.up.railway.app/',
    sourceCode: 'https://github.com/venky916/discord-clone',
  },
  {
    title: 'Twitter Clone',
    image: project8, // Replace with your image
    description: `A fully functional Twitter clone built using Next.js, React, and Tailwind CSS. Features include user authentication via NextAuth, database management with Prisma and MongoDB, and all core functionalities similar to Twitter.`,
    technologies: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'NextAuth',
      'Prisma',
      'MongoDB',
    ],
    liveLink: 'https://plitter-app-two.vercel.app/',
    sourceCode: 'https://github.com/venky916/Plitter-app',
  },
  {
    title: 'Socially',
    image: project9, // Replace with your image
    description: `A social media application for sharing content and information. Built with Next.js, React, shadcn, Tailwind CSS, and Prisma with NeonDB/PostgreSQL. Fully implemented using server actions and TypeScript for seamless functionality.`,
    technologies: [
      'Next.js',
      'React',
      'shadcn',
      'Tailwind CSS',
      'Prisma',
      'NeonDB/PostgreSQL',
      'TypeScript',
      'Server Actions',
    ],
    liveLink: 'https://socially-app-nine.vercel.app/',
    sourceCode: 'https://github.com/venky916/Socially-app',
  },
  {
    title: 'YouTube Frontend Clone',
    image: project1,
    description: `Built a YouTube clone using React.js with features like live chat, nested comments, and a custom search. Optimized for performance and scalability with lazy loading and API polling.`,
    technologies: ['React.js', 'Redux', 'TailwindCSS'],
    liveLink: 'https://youtube-clone.com',
    sourceCode: 'https://github.com/venky916/yt-clone',
  },
  {
    title: 'Trello Clone Application',
    image: project2,
    description: `A full-stack task management system inspired by Trello. Implemented drag-and-drop functionality, JWT authentication, and deployed on Vercel.`,
    technologies: ['React', 'Redux', 'Node.js', 'MongoDB', 'JWT'],
    liveLink: 'https://trello-clone.com',
    sourceCode: 'https://github.com/venky916/trello-frontend',
  },
  {
    title: 'Netflix-GPT Frontend Clone',
    image: project3,
    description: `Developed a Netflix clone with AI-powered movie suggestions. Integrated Firebase authentication and GPT for movie recommendations and search suggestions.`,
    technologies: ['React', 'Redux Toolkit', 'Firebase', 'TMDB API'],
    liveLink: 'https://netflix-gpt.com',
    sourceCode: 'https://github.com/venky916/netflix-gpt',
  },
  {
    title: 'DevTinder',
    image: project10, // Replace with your image
    description: `A developer-focused Tinder clone for networking and knowledge sharing. Built with React.js, Tailwind CSS, Node.js, Express, MongoDB, and DaisyUI. Features real-time chat between users using WebSockets. Currently integrating payment gateway and planning deployment on AWS EC2.`,
    technologies: [
      'React.js',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MongoDB',
      'DaisyUI',
      'WebSockets',
    ],
    liveLink: 'https://dev-tinder-web-delta.vercel.app/',
    sourceCode: {
      frontend: 'https://github.com/venky916/devTinder-web',
      backend: 'https://github.com/venky916/DevTinder-Backend',
    },
  },
];

export const CONTACT = {
  address: 'Nellore, Andhra Pradesh, India',
  phoneNo: '+91 9494600916',
  email: 'venkateshsmsv1999@gmail.com',
};
