import { Project1 } from "./assets";

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
        description: "Experience all of my art pieces."
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
        title: "Video Streaming Web App",
        tagline: "Tagline Hu Mai",
        previewImage: Project1,
        git: "https://github.com/piyush-jaiswal-projects/portfolio",
        live: "https://symphonious-praline-82b0d6.netlify.app/",
        tech: ["ReactJS", "CSS", "Javascript", "HTML", "Node", "Docker"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt massa eget turpis tincidunt hendrerit. Duis convallis hendrerit porttitor. Etiam finibus consectetur tempor. Suspendisse sed luctus tortor. Proin gravida viverra elit, quis luctus ex gravida non. Etiam id risus ante. Suspendisse eget eros ac velit pretium pharetra.",
        standard: ["oneLorem ipsum dolor sit amet, consectetur adipiscing elit.", "twoLorem ipsum dolor sit amet, consectetur adipiscing elit.", "threeLorem ipsum dolor sit amet, consectetur adipiscing elit.", "fourLorem ipsum dolor sit amet, consectetur adipiscing elit.", "fiveLorem ipsum dolor sit amet, consectetur adipiscing elit."],
        standout: ["oneLorem ipsum dolor sit amet, consectetur adipiscing elit.", "twoLorem ipsum dolor sit amet, consectetur adipiscing elit.", "threeLorem ipsum dolor sit amet, consectetur adipiscing elit."],
        achievements: ["oneLorem ipsum dolor sit amet, consectetur adipiscing elit.", "twoLorem ipsum dolor sit amet, consectetur adipiscing elit.", "threeLorem ipsum dolor sit amet, consectetur adipiscing elit.", "fourLorem ipsum dolor sit amet, consectetur adipiscing elit."]
    },
    {
        id: 2,
        tag: "Backend",
        title: "Video Streaming App 2",
        tagline: "Tagline Hu Mai",
        previewImage: Project1,
        git: "https://github.com/piyush-jaiswal-projects/portfolio",
        live: "https://symphonious-praline-82b0d6.netlify.app/",
        tech: ["HTML", "Docker", "Javascript"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt massa eget turpis tincidunt hendrerit. Duis convallis hendrerit porttitor. Etiam finibus consectetur tempor. Suspendisse sed luctus tortor. Proin gravida viverra elit, quis luctus ex gravida non. Etiam id risus ante. Suspendisse eget eros ac velit pretium pharetra.",
        standard: ["oneLorem ipsum dolor sit amet, consectetur adipiscing elit.", "twoLorem ipsum dolor sit amet, consectetur adipiscing elit.", "threeLorem ipsum dolor sit amet, consectetur adipiscing elit.", "fourLorem ipsum dolor sit amet, consectetur adipiscing elit.", "fiveLorem ipsum dolor sit amet, consectetur adipiscing elit."],
        standout: ["oneLorem ipsum dolor sit amet, consectetur adipiscing elit.", "twoLorem ipsum dolor sit amet, consectetur adipiscing elit.", "threeLorem ipsum dolor sit amet, consectetur adipiscing elit."],
        achievements: ["oneLorem ipsum dolor sit amet, consectetur adipiscing elit.", "twoLorem ipsum dolor sit amet, consectetur adipiscing elit.", "threeLorem ipsum dolor sit amet, consectetur adipiscing elit.", "fourLorem ipsum dolor sit amet, consectetur adipiscing elit."]
    },
    {
        id: 3,
        tag: "Fullstack",
        title: "Video Streaming App 3",
        tagline: "Tagline Hu Mai",
        previewImage: Project1,
        git: "https://github.com/piyush-jaiswal-projects/portfolio",
        live: "https://symphonious-praline-82b0d6.netlify.app/",
        tech: ["HTML", "CSS", "Javascript"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt massa eget turpis tincidunt hendrerit. Duis convallis hendrerit porttitor. Etiam finibus consectetur tempor. Suspendisse sed luctus tortor. Proin gravida viverra elit, quis luctus ex gravida non. Etiam id risus ante. Suspendisse eget eros ac velit pretium pharetra.",
        standard: ["oneLorem ipsum dolor sit amet, consectetur adipiscing elit.", "twoLorem ipsum dolor sit amet, consectetur adipiscing elit.", "threeLorem ipsum dolor sit amet, consectetur adipiscing elit.", "fourLorem ipsum dolor sit amet, consectetur adipiscing elit.", "fiveLorem ipsum dolor sit amet, consectetur adipiscing elit."],
        standout: ["oneLorem ipsum dolor sit amet, consectetur adipiscing elit.", "twoLorem ipsum dolor sit amet, consectetur adipiscing elit.", "threeLorem ipsum dolor sit amet, consectetur adipiscing elit."],
        achievements: ["oneLorem ipsum dolor sit amet, consectetur adipiscing elit.", "twoLorem ipsum dolor sit amet, consectetur adipiscing elit.", "threeLorem ipsum dolor sit amet, consectetur adipiscing elit.", "fourLorem ipsum dolor sit amet, consectetur adipiscing elit."]
    },
    {
        id: 4,
        tag: "Others",
        title: "Video Streaming App",
        tagline: "Tagline Hu Mai",
        previewImage: Project1,
        git: "https://github.com/piyush-jaiswal-projects/portfolio",
        live: "https://symphonious-praline-82b0d6.netlify.app/",
        tech: ["HTML", "CSS", "Javascript"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt massa eget turpis tincidunt hendrerit. Duis convallis hendrerit porttitor. Etiam finibus consectetur tempor. Suspendisse sed luctus tortor. Proin gravida viverra elit, quis luctus ex gravida non. Etiam id risus ante. Suspendisse eget eros ac velit pretium pharetra.",
        standard: ["oneLorem ipsum dolor sit amet, consectetur adipiscing elit.", "twoLorem ipsum dolor sit amet, consectetur adipiscing elit.", "threeLorem ipsum dolor sit amet, consectetur adipiscing elit.", "fourLorem ipsum dolor sit amet, consectetur adipiscing elit.", "fiveLorem ipsum dolor sit amet, consectetur adipiscing elit."],
        standout: ["oneLorem ipsum dolor sit amet, consectetur adipiscing elit.", "twoLorem ipsum dolor sit amet, consectetur adipiscing elit.", "threeLorem ipsum dolor sit amet, consectetur adipiscing elit."],
        achievements: ["oneLorem ipsum dolor sit amet, consectetur adipiscing elit.", "twoLorem ipsum dolor sit amet, consectetur adipiscing elit.", "threeLorem ipsum dolor sit amet, consectetur adipiscing elit.", "fourLorem ipsum dolor sit amet, consectetur adipiscing elit."]
    },
    {
        id: 5,
        tag: "DSA",
        title: "Video Streaming App",
        tagline: "Tagline Hu Mai",
        previewImage: Project1,
        git: "https://github.com/piyush-jaiswal-projects/portfolio",
        live: "https://symphonious-praline-82b0d6.netlify.app/",
        tech: ["HTML", "CSS", "Javascript"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt massa eget turpis tincidunt hendrerit. Duis convallis hendrerit porttitor. Etiam finibus consectetur tempor. Suspendisse sed luctus tortor. Proin gravida viverra elit, quis luctus ex gravida non. Etiam id risus ante. Suspendisse eget eros ac velit pretium pharetra.",
        standard: ["oneLorem ipsum dolor sit amet, consectetur adipiscing elit.", "twoLorem ipsum dolor sit amet, consectetur adipiscing elit.", "threeLorem ipsum dolor sit amet, consectetur adipiscing elit.", "fourLorem ipsum dolor sit amet, consectetur adipiscing elit.", "fiveLorem ipsum dolor sit amet, consectetur adipiscing elit."],
        standout: ["oneLorem ipsum dolor sit amet, consectetur adipiscing elit.", "twoLorem ipsum dolor sit amet, consectetur adipiscing elit.", "threeLorem ipsum dolor sit amet, consectetur adipiscing elit."],
        achievements: ["oneLorem ipsum dolor sit amet, consectetur adipiscing elit.", "twoLorem ipsum dolor sit amet, consectetur adipiscing elit.", "threeLorem ipsum dolor sit amet, consectetur adipiscing elit.", "fourLorem ipsum dolor sit amet, consectetur adipiscing elit."]
    },
    {
        id: 6,
        tag: "DSA",
        title: "Video Streaming App",
        tagline: "Tagline Hu Mai",
        previewImage: Project1,
        git: "https://github.com/piyush-jaiswal-projects/portfolio",
        live: "https://symphonious-praline-82b0d6.netlify.app/",
        tech: ["HTML", "CSS", "Node"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt massa eget turpis tincidunt hendrerit. Duis convallis hendrerit porttitor. Etiam finibus consectetur tempor. Suspendisse sed luctus tortor. Proin gravida viverra elit, quis luctus ex gravida non. Etiam id risus ante. Suspendisse eget eros ac velit pretium pharetra.",
        standard: ["oneLorem ipsum dolor sit amet, consectetur adipiscing elit.", "twoLorem ipsum dolor sit amet, consectetur adipiscing elit.", "threeLorem ipsum dolor sit amet, consectetur adipiscing elit.", "fourLorem ipsum dolor sit amet, consectetur adipiscing elit.", "fiveLorem ipsum dolor sit amet, consectetur adipiscing elit."],
        standout: ["oneLorem ipsum dolor sit amet, consectetur adipiscing elit.", "twoLorem ipsum dolor sit amet, consectetur adipiscing elit.", "threeLorem ipsum dolor sit amet, consectetur adipiscing elit."],
        achievements: ["oneLorem ipsum dolor sit amet, consectetur adipiscing elit.", "twoLorem ipsum dolor sit amet, consectetur adipiscing elit.", "threeLorem ipsum dolor sit amet, consectetur adipiscing elit.", "fourLorem ipsum dolor sit amet, consectetur adipiscing elit."]
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