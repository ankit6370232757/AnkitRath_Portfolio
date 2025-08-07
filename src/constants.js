// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import qlithLogo from './assets/company_logo/qlith_logo.jpeg';
import litLogo from './assets/company_logo/lit_logo.jpeg';


// Education Section Logo's
import jsLogo from './assets/education_logo/js_logo.jpeg';
import gietLogo from './assets/education_logo/giet_logo.png';
import vpsLogo from './assets/education_logo/GNUB_logo.jpeg';

// Project Section Logo's
import meeshoLogo from './assets/work_logo/meesho.png';
import weatherLogo from './assets/work_logo/weather_logo.png';
import calLogo from './assets/work_logo/cal_lo.png';
import todoLogo from './assets/work_logo/todo_logo.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [{
        title: 'Frontend',
        skills: [
            { name: 'HTML', logo: htmlLogo },
            { name: 'CSS', logo: cssLogo },
            { name: 'SASS', logo: sassLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'React JS', logo: reactjsLogo },

            { name: 'Tailwind CSS', logo: tailwindcssLogo },


        ],
    },
    {
        title: 'Backend',
        skills: [

            { name: 'Node JS', logo: nodejsLogo },
            { name: 'Express JS', logo: expressjsLogo },
            { name: 'MySQL', logo: mysqlLogo },
            { name: 'MongoDB', logo: mongodbLogo },

        ],
    },
    {
        title: 'Languages',
        skills: [
            { name: 'C', logo: cLogo },

            { name: 'Java', logo: javaLogo },
            { name: 'Python', logo: pythonLogo },

            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'TypeScript', logo: typescriptLogo },
        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', logo: gitLogo },
            { name: 'GitHub', logo: githubLogo },
            { name: 'VS Code', logo: vscodeLogo },
            { name: 'Postman', logo: postmanLogo },

            { name: 'Vercel', logo: vercelLogo },
            { name: 'Netlify', logo: netlifyLogo },
            { name: 'Figma', logo: figmaLogo },
        ],
    },
];

export const experiences = [{
        id: 0,
        img: qlithLogo,
        role: "Fullstack Developer",
        company: "Qlith Innovation Private Limited",
        date: "June 2025 - Present",
        desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React JS",
            "TypeScript",
            "Node JS",
            "Tailwind CSS",
            "MongoDb",
            "Redux",
            " Next Js",
        ],
    },
    {
        id: 1,
        img: litLogo,
        role: "CoreJava Training",
        company: "Lakshya Institute of Technology",
        date: "August 2024 - October 2024",
        desc: "I completed a core Java training program, which covered fundamental concepts such as variables, data types, operators, control structures, functions, and object-oriented programming (OOP) principles. Through hands-on coding exercises, projects, and real-world examples, I gained practical experience in Java programming and developed skills.",
        skills: [

            "Java",

            "HTML",
            "CSS",
            "SQL",
        ],
    },

];

export const education = [{
        id: 0,
        img: gietLogo,
        school: "GIET College,Khordha",
        date: "Sept 2022 - May 2026",
        grade: "85%",
        desc: "I completed my Bachelor's degree in Computer Science (B-Tech) from GIET College,Khordhaa. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at B-Tech College allowed me to work on projects that applied theoretical concepts to real-world problems.",
        degree: "Bachelor of Technology - B-Tech (Computer Science)",
    },
    {
        id: 1,
        img: jsLogo,
        school: "Jhadeswar Residential College, Balasore",
        date: "Apr 2020 - May 2022",
        grade: "89%",
        desc: "I completed my class 12 education from Jhadeswar Residential College, Balasore, under the HSE board, where I studied Physics, Chemistry, and Mathematics (PCM) which has provided me with a strong foundation in scientific principles and mathematical concepts. Through hands-on experiments, projects, and problem-solving, I'm gaining practical experience in subjects like physics lab experiments and mathematical modeling This experience is not only deepening my understanding of complex concepts but also developing my analytical and critical thinking skills.",
        degree: "HSE(XII) - PCM with Computer Science",
    },
    {
        id: 2,
        img: vpsLogo,
        school: "GNUB School,Tuta,Sampei",
        date: "Apr 2018 - March 2020",
        grade: "81.92%",
        desc: "I completed my class 10 education from GNUB School, Tuta, under the BSE board,where I'm building a strong foundation in various subjects, including mathematics, science, and languages. Through regular assessments, projects, and extracurricular activities, I'm developing my problem-solving skills, critical thinking, and time management abilities. This academic year is crucial in shaping my future academic pursuits and helping me discover my interests and strengths.",
        degree: "BSE(X), Science with Computer Application",
    },
];

export const projects = [{
        id: 0,
        title: "Meesho Product Listing UI",
        description: "The Meesho product listing UI offers a seamless shopping experience, featuring a visually appealing product grid with filtering and sorting options. Product details pages showcase high-quality images, descriptions, and customer reviews. The prominent .",
        image: meeshoLogo,
        tags: ["HTML", "CSS", "JavaScript", "API"],
        github: "https://github.com/ankit6370232757/Qlith-Meesho-product-Listing-UI",
        webapp: "https://meeshoproductlistinguiproject.netlify.app/",
    },
    {
        id: 1,
        title: "Image Background Remover",
        description: "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
        image: removebgLogo,
        tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
        github: "https://github.com/ankit6370232757/Image-Background-Remover",
        webapp: "https://backgroundremovera.netlify.app/",
    },

    {
        id: 2,
        title: "Weather App",
        description: "A weather app provides users with real-time updates on current weather conditions, forecasts, and alerts. It typically features temperature, humidity, wind speed, and precipitation details, along with forecasts for the next few days. Many weather apps also offer additional features like radar imagery and air quality indexes. With intuitive interfaces and customizable settings, weather apps help users plan their daily activities and stay informed about changing weather conditions.",
        image: weatherLogo,
        tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/ankit6370232757/Weather_App",
        webapp: "https://weatherapplicationby.netlify.app/",
    },
    {
        id: 3,
        title: "Simple Calculator",
        description: "A simple calculator built using HTML, CSS, and JavaScript performs basic arithmetic operations like addition, subtraction, multiplication, and division. The HTML structure defines the calculator's layout, while CSS styles it for a user-friendly interface. JavaScript handles the calculations, processing user input and displaying results.",
        image: calLogo,
        tags: ["React JS", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/ankit6370232757/calculator",
        webapp: "https://calculatorsimpleones.netlify.app/",
    },
    {
        id: 4,
        title: "To-Do List ",
        description: "A to-do list application built with HTML, CSS, and JavaScript allows users to manage tasks efficiently. Users can add new tasks, mark them as completed, and remove them as needed. The HTML structure organizes the list, CSS styles it for a clean interface, and JavaScript adds interactivity, enabling dynamic updates and task management. This project showcases the power of front-end technologies in creating practical and user-friendly applications.",
        image: todoLogo,
        tags: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/ankit6370232757/To-Do-List",
        webapp: "https://todolistworksss.netlify.app/",
    },




];