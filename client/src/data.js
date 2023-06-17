import { P1, P2, P3, P4, P5 } from "./assets";

const developerMailId = "developerpiyush1610@gmail.com";
const Linkedin = "https://www.linkedin.com/in/piyushjaiswal1610/";
const Twitter = "https://twitter.com/PiyushJ17317768";
const Github = "https://github.com/piyush-jaiswal-projects";
const Leetcode = "https://leetcode.com/piyushjaiswal1610/";
const resumeURL = "https://drive.google.com/file/d/1B28Y8dIPNmC43k6lf8JuqLIAIweJ6CLH/preview";
const blogAPIKey = "qgAaSN1FJw1RNtct8UF97t5t";

const navLink = ["HOME", "PROJECTS", "ABOUT", "BLOG", "EXPERIENCE", "RESUME"];

const heroText = [
    {
        page: "projects",
        title: "Projects",
        description: "Experience all of my code pieces."
    },
    {
        page: "blog",
        title: "Blog",
        description: "Articles on software development, productivity, and much more."
    },
    {
        page: "about",
        title: "About Me",
        description: "Let’s connect at deeper level"
    },
    {
        page: "experience",
        title: "Experience",
        description: "Collection of my past work experiences"
    },
    {
        page: "resume",
        title: "Resume",
        description: "A single piece of paper :)"
    }
];

const projects = [
    {
        id: 1,
        tag: "Frontend",
        title: "Portfolio Website",
        tagline: "A personal portfolio website",
        previewImage: P1,
        git: "https://github.com/piyush-jaiswal-projects/portfolio",
        live: "https://portfolio1610.vercel.app/",
        tech: ["ReactJS", "CSS", "Javascript", "HTML", "Docker"],
        description: "This website is my personal portfolio web site to showcase my skills, my projects, blogs, and other useful resources.",
        standard: ["Projects Page with github and live website link", "Skills, certificates, and notes section", "Experience and Resume Page"],
        standout: ["Category based filter in project page","Blog Page with markup rendering"],
        achievements: ["Implemented Tailwind CSS", "Learnt basics of Docker", "Reusable Components"]
    },
    {
        id: 2,
        tag: "Backend",
        title: "Arduino IOT Device Monitoring",
        tagline: "Live data monitoring",
        previewImage: P2,
        git: "https://github.com/piyush-jaiswal-projects/arduino-nodejs-react-realtime-dashboard",
        live: "https://dreamy-dodol-f0c20f.netlify.app/",
        tech: ["Node", "ExpressJS", "Javascript"],
        description: "This webapp takes data from arduino via serial port and then updates the state of various indicators in real time",
        standard: ["Real time data updation", "Implementation of Streams"],
        standout: [],
        achievements: []
    },
    {
        id: 3,
        tag: "Fullstack",
        title: "Arcware Streaming Project",
        tagline: "A website to run games using arcware server",
        previewImage: P3,
        git: "https://github.com/piyush-jaiswal-projects/pixel-streaming--project",
        live: "none",
        tech: ["HTML", "CSS", "Javascript", "ReactJS", "Node", "ExpressJS", "MongoDB"],
        description: "Thie web app registers users baed upon email otp and sends a unique link to access the gaming services. For every user, there is a limit on the duration for which user can access the service and logs out the user after that limit is reached",
        standard: ["Login and Signup Authentication", "Email Based OTP Verification"],
        standout: ["Integrated Arcware Game Streaming", "Server based timer to logout user while using game", "Dual Language Support"],
        achievements: ["Learnt to use complex thirdy part APIs"]
    },
    {
        id: 4,
        tag: "Frontend",
        title: "Tech Startup Website",
        tagline: "A simple website to showcase and sell products",
        previewImage: P4,
        git: "https://github.com/piyush-jaiswal-projects/tech-startup-website",
        live: "https://tech-startup-website-1n82xak5t-piyush-jaiswal-projects.vercel.app/",
        tech: ["HTML", "CSS", "Javascript", "ReactJS"],
        description: "This website implements the frontend for a tech startup to showcase their sproducts and services. It also has a small ecommerce functionality for their customers. On top of that, it also has blog section",
        standard: ["Authentication - Login and Signup", "Smooth user experience", "Multi route single page web app"],
        standout: ["Frontend logic of basic Ecommerce", "UI for chatbot"],
        achievements: []
    },
    {
        id: 5,
        tag: "Fullstack",
        title: "Notes Keeper Webapp",
        tagline: "A safe place to keep all your notes",
        previewImage: P5,
        git: "https://github.com/piyush-jaiswal-projects/Keeper-Notes-Web-App",
        live: "none",
        tech: ["HTML", "CSS", "Javascript", "ReactJS", "Node", "ExpressJS", "MongoDB"],
        description: "A simple web app to perform CRUD operations in order to maintain a collection of all your notes.",
        standard: ["User signup and login", "Addition, deletion, updation of notes"],
        standout: ["Live data syncing using stream", "CRUD operations on MongoDB Cloud Database"],
        achievements: []
    }
]

const techStacks = ["HTML", "CSS", "Javascript", "ReactJS", "TailwindCSS", "jQuery", "Node", "ExpressJS", "MongoDB", "Docker", "HTML", "CSS", "Javascript", "ReactJS", "TailwindCSS", "jQuery", "Node", "ExpressJS", "MongoDB", "Docker", "HTML", "CSS", "Javascript", "ReactJS", "TailwindCSS", "jQuery", "Node", "ExpressJS", "MongoDB", "Docker"];

const certificates = [{
    id: 1,
    title: "Cert1",
    desc: "Desc Hu Mai",
    url: "https://drive.google.com/file/d/1GiZ9hj0cz6Cg9kgnOwBMUYmz9m9GNjB7/preview",
    outcomes: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
},
{
    id: 2,
    title: "Cert2",
    desc: "Desc Hu Mai",
    outcomes: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
    },
    {
        id: 3,
        title: "Cert3",
        desc: "Desc Hu Mai",
        outcomes: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
    
    },
    {
        id: 4,
        title: "Cert4",
        desc: "Desc Hu Mai",
        outcomes: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
    
    },
    {
        id: 5,
        title: "Cert5",
        desc: "Desc Hu Mai",
        outcomes: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
    
    },
    {
        id: 6,
        title: "Cert6",
        desc: "Desc Hu Mai",
        outcomes: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
    
    },
    
    {
        id: 7,
        title: "Cert7",
        desc: "Desc Hu Mai",
        outcomes: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
    
    },
    {
        id: 8,
        title: "Cert8",
        desc: "Desc Hu Mai",
        outcomes: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
    
    },
    {
        id: 9,
        title: "Cert9",
        desc: "Desc Hu Mai",
        outcomes: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
    
    },
    {
        id: 10,
        title: "Cert10",
        desc: "Desc Hu Mai",
        outcomes: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
    
    },
    {
        id: 11,
        title: "Cert11",
        desc: "Desc Hu Mai",
        outcomes: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
    
    },
    {
        id: 12,
        title: "Cert12",
        desc: "Desc Hu Mai",
        outcomes: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
    
        }
 
]

const notes = [{id: 1, title: "Operating System", desc: "Desc hu mai", url:"https://drive.google.com/file/d/1CuML95JJqIh_V9NdrNYh00bqO7QvKoiw/preview", src: "https://tailwindcss.com/docs/scale"}, {id: 2, title: "Operating System", desc: "Desc 2 hu mai", url:"", src: "https://tailwindcss.com/docs/scale"}, {id: 1, title: "Operating System", url:"https://github.com/piyush-jaiswal-projects/react-hooks/blob/master/src/hooks/ContextAPI.js", src: "https://tailwindcss.com/docs/scale"}, {id: 1, title: "Operating System", url:"https://github.com/piyush-jaiswal-projects/react-hooks/blob/master/src/hooks/ContextAPI.js", src: "https://tailwindcss.com/docs/scale"}, {id: 1, title: "Operating System", url:"https://github.com/piyush-jaiswal-projects/react-hooks/blob/master/src/hooks/ContextAPI.js", src: "https://tailwindcss.com/docs/scale"},{id: 1, title: "Operating System", url:"https://github.com/piyush-jaiswal-projects/react-hooks/blob/master/src/hooks/ContextAPI.js", src: "https://tailwindcss.com/docs/scale"}, {id: 1, title: "Operating System", url:"https://github.com/piyush-jaiswal-projects/react-hooks/blob/master/src/hooks/ContextAPI.js", src: "https://tailwindcss.com/docs/scale"}, {id: 1, title: "Operating System", url:"https://github.com/piyush-jaiswal-projects/react-hooks/blob/master/src/hooks/ContextAPI.js", src: "https://tailwindcss.com/docs/scale"}, {id: 1, title: "Operating System", url:"https://github.com/piyush-jaiswal-projects/react-hooks/blob/master/src/hooks/ContextAPI.js", src: "https://tailwindcss.com/docs/scale"}, {id: 1, title: "Operating System", url:"https://github.com/piyush-jaiswal-projects/react-hooks/blob/master/src/hooks/ContextAPI.js", src: "https://tailwindcss.com/docs/scale"}]

const experiences = [
    {
        id: 1,
        duration: "Jan, 2023 - April, 2023",
        org: "PACE Mental Health Org",
        position: "Frontend Developer",
        url: "https://www.paceful.org/",
        desc: "Built website to showcase and market their SaaS product. Developed admin portal. Implemented user verification and device notification functionality.",
        tech: ["React", "HTML", "CSS", "Javascript", "Figma"]
    },
    {
        id: 2,
        duration: "Aug, 2022 - October, 2022",
        org: "Freelancing",
        position: "Full Stack Web Developer",
        url: "https://lambent-sunshine-6314a7.netlify.app/",
        desc: "Completed 2 international client projects. Developed a game streaming app using Arcware and built a website for a NGO",
        tech: ["HTML", "CSS", "React", "Javascript", "jQuery", "Node", "Express", "MongoDB" ]
    },
    {
        id: 3,
        duration: "Nov, 2021 - October, 2022",
        org: "Alumni Affairs Cell, UIET, PU",
        position: "Web Developer",
        desc: "Responsible for up-gradation, responsiveness and maintenance of official website. Worked on frontend and built modal boxes for different occasions and seminars.",
        tech: ["React", "HTML", "CSS", "Javascript"]
    },
    {
        id: 4,
        duration: "Nov, 2021 - May, 2022",
        org: "Design Innovation Centre, UIET, PU",
        position: "Backend Developer Intern",
        desc: "Built the backend for SMART Forest Management App, a project by Forest Department. Built multiple APIs to fetch data and for live animal tracking",
        tech: ["Node", "Express", "MongoDB", "Socket"]
    }
] 

const blogs = [{
    id: 1,
    title: "Software Development 101",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula, tortor sit amet fringilla tincidunt, nisi libero varius nunc, vel consequat nunc mauris ac nibh. Praesent sit amet sollicitudin turpis. Aenean tempus tellus id turpis dapibus mattis. Nullam vitae hendrerit nunc. Nam in est a ipsum varius convallis sed quis ex. Quisque placerat vestibulum metus sit amet dapibus. Donec vulputate faucibus eros nec rutrum. Vestibulum non velit erat. In sodales accumsan mi quis ultricies. Pellentesque auctor sem tincidunt turpis fermentum, in posuere diam dictum. Nullam efficitur purus eu leo ornare dapibus. Integer augue nunc, blandit vulputate volutpat sit amet, lobortis ac tortor. Cras in sem interdum odio consequat tristique a ac nisl. Sed nec lectus magna.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula, tortor sit amet fringilla tincidunt, nisi libero varius nunc, vel consequat nunc mauris ac nibh. Praesent sit amet sollicitudin turpis. Aenean tempus tellus id turpis dapibus mattis. Nullam vitae hendrerit nunc. Nam in est a ipsum varius convallis sed quis ex. Quisque placerat vestibulum metus sit amet dapibus. Donec vulputate faucibus eros nec rutrum. Vestibulum non velit erat. In sodales accumsan mi quis ultricies. Pellentesque auctor sem tincidunt turpis fermentum, in posuere diam dictum. Nullam efficitur purus eu leo ornare dapibus. Integer augue nunc, blandit vulputate volutpat sit amet, lobortis ac tortor. Cras in sem interdum odio consequat tristique a ac nisl. Sed nec lectus magna.",
    imageName: "Project1"
},
{
    id: 2,
    title: "Software Development 101",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula, tortor sit amet fringilla tincidunt, nisi libero varius nunc, vel consequat nunc mauris ac nibh. Praesent sit amet sollicitudin turpis. Aenean tempus tellus id turpis dapibus mattis. Nullam vitae hendrerit nunc. Nam in est a ipsum varius convallis sed quis ex. Quisque placerat vestibulum metus sit amet dapibus. Donec vulputate faucibus eros nec rutrum. Vestibulum non velit erat. In sodales accumsan mi quis ultricies. Pellentesque auctor sem tincidunt turpis fermentum, in posuere diam dictum. Nullam efficitur purus eu leo ornare dapibus. Integer augue nunc, blandit vulputate volutpat sit amet, lobortis ac tortor. Cras in sem interdum odio consequat tristique a ac nisl. Sed nec lectus magna.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula, tortor sit amet fringilla tincidunt, nisi libero varius nunc, vel consequat nunc mauris ac nibh. Praesent sit amet sollicitudin turpis. Aenean tempus tellus id turpis dapibus mattis. Nullam vitae hendrerit nunc. Nam in est a ipsum varius convallis sed quis ex. Quisque placerat vestibulum metus sit amet dapibus. Donec vulputate faucibus eros nec rutrum. Vestibulum non velit erat. In sodales accumsan mi quis ultricies. Pellentesque auctor sem tincidunt turpis fermentum, in posuere diam dictum. Nullam efficitur purus eu leo ornare dapibus. Integer augue nunc, blandit vulputate volutpat sit amet, lobortis ac tortor. Cras in sem interdum odio consequat tristique a ac nisl. Sed nec lectus magna.",
    imageName: "Project1"
},
{
    id: 3,
    title: "Software Development 101",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula, tortor sit amet fringilla tincidunt, nisi libero varius nunc, vel consequat nunc mauris ac nibh. Praesent sit amet sollicitudin turpis. Aenean tempus tellus id turpis dapibus mattis. Nullam vitae hendrerit nunc. Nam in est a ipsum varius convallis sed quis ex. Quisque placerat vestibulum metus sit amet dapibus. Donec vulputate faucibus eros nec rutrum. Vestibulum non velit erat. In sodales accumsan mi quis ultricies. Pellentesque auctor sem tincidunt turpis fermentum, in posuere diam dictum. Nullam efficitur purus eu leo ornare dapibus. Integer augue nunc, blandit vulputate volutpat sit amet, lobortis ac tortor. Cras in sem interdum odio consequat tristique a ac nisl. Sed nec lectus magna.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula, tortor sit amet fringilla tincidunt, nisi libero varius nunc, vel consequat nunc mauris ac nibh. Praesent sit amet sollicitudin turpis. Aenean tempus tellus id turpis dapibus mattis. Nullam vitae hendrerit nunc. Nam in est a ipsum varius convallis sed quis ex. Quisque placerat vestibulum metus sit amet dapibus. Donec vulputate faucibus eros nec rutrum. Vestibulum non velit erat. In sodales accumsan mi quis ultricies. Pellentesque auctor sem tincidunt turpis fermentum, in posuere diam dictum. Nullam efficitur purus eu leo ornare dapibus. Integer augue nunc, blandit vulputate volutpat sit amet, lobortis ac tortor. Cras in sem interdum odio consequat tristique a ac nisl. Sed nec lectus magna.",
    imageName: "Project1"
}];

export {
    navLink,
    heroText,
    developerMailId,
    projects,
    resumeURL,
    Linkedin,
    Twitter,
    Github,
    Leetcode,
    techStacks,
    certificates,
    notes,
    experiences,
    blogAPIKey, 
    blogs
};