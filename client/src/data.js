
const developerMailId = "developerpiyush1610@gmail.com";
const Linkedin = "https://www.linkedin.com/in/piyushjaiswal1610/";
const Twitter = "https://twitter.com/PiyushJ17317768";
const Github = "https://github.com/piyush-jaiswal-projects";
const Leetcode = "https://leetcode.com/piyushjaiswal1610/";
const resumeURL = "https://drive.google.com/file/d/1B28Y8dIPNmC43k6lf8JuqLIAIweJ6CLH/preview";
const blogAPIKey = "qgAaSN1FJw1RNtct8UF97t5t";

const navLink = ["HOME", "ABOUT", "PROJECTS",  "BLOG", "EXPERIENCE", "CONTACT", "RESUME"];

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
        id: 7,
        tag: "FULLSTACK",
        title: "Ecommerce Website",
        tagline: "1610 Collections - A website to sell your products online",
        previewImage: "http://res.cloudinary.com/deo80u7qs/image/upload/v1688942384/t19ymcgx0kebjsx60w3d.png",
        git: "https://github.com/piyush-jaiswal-projects/ecommerce",
        live: "https://1610-ecommerce.vercel.app/",
        tech: ["ReactJS", "CSS", "Javascript", "HTML", "TailwindCSS", "Redux", "Node", "ExpressJS", "MongoDB"],
        description: "1610 Collections, is an ecommerce website to sell your products online. It has a product listing page, product details page, user cart, wishlist, and payment gateway.",
        standard: ["Product Listing Page", "Product details page", "User authentication", "User cart and wishlist"],
        standout: ["Razorpay Payment Gateway", "Product filters", "Pagination"],
        achievements: ["Integrated third party payment gateway", "Learn and Implemented Redux for global state management"]
    },
    {
        id: 6,
        tag: "FRONTEND",
        title: "PicUpCloud",
        tagline: "Cloudinary Image Uploader",
        previewImage: "https://res.cloudinary.com/deo80u7qs/image/upload/v1687527164/fcmvikxkngoy3gbgyww1.png",
        git: "https://github.com/piyush-jaiswal-projects/cloudinary-image-uploader",
        live: "https://picupcloud.vercel.app/",
        tech: ["ReactJS", "CSS", "Javascript", "HTML", "TailwindCSS"],
        description: "This is a cloudinary API based image uploader. You can easily generate URL for your images by simply putting your cloudinary account data and uploading images.",
        standard: ["Image URL Generator", "Flexible, can be used by anyone having cloudinary account."],
        standout: [],
        achievements: []
    },
    {
        id: 1,
        tag: "FRONTEND",
        title: "Portfolio Website",
        tagline: "A personal portfolio website",
        previewImage: "https://res.cloudinary.com/deo80u7qs/image/upload/v1687972520/pmns4bucott9ffwf6z20.png",
        git: "https://github.com/piyush-jaiswal-projects/portfolio",
        live: "https://portfolio1610.vercel.app/",
        tech: ["ReactJS", "TailwindCSS", "CSS", "Javascript", "HTML"],
        description: "This website is my personal portfolio web site to showcase my skills, my projects, blogs, and other useful resources.",
        standard: ["Projects Page with github and live website link", "Skills, certificates, and notes section", "Experience and Resume Page"],
        standout: ["Category based filter in project page","Blog Page with markup rendering"],
        achievements: ["Implemented Tailwind CSS", "Learnt basics of Docker", "Reusable Components"]
    },
    {
        id: 2,
        tag: "BACKEND",
        title: "Arduino IOT Device Monitoring",
        tagline: "Live data monitoring",
        previewImage: "https://res.cloudinary.com/deo80u7qs/image/upload/v1687527408/u6u1dkwdxpyoebwfqdyv.png",
        git: "https://github.com/piyush-jaiswal-projects/arduino-nodejs-react-realtime-dashboard",
        live: "https://dreamy-dodol-f0c20f.netlify.app/",
        tech: ["Node", "ExpressJS", "Javascript"],
        description: "This webapp takes data from arduino via serial port and then updates the state of various indicators in real time",
        standard: ["Real time data updation", "Implementation of Streams"],
        standout: [],
        achievements: []
    },
    {
        id:3,
        tag: "FULLSTACK",
        title: "Arcware Streaming Project",
        tagline: "A website to run games using arcware server",
        previewImage: "http://res.cloudinary.com/deo80u7qs/image/upload/v1687973291/hdtubuxrkkmbyuitxp3a.png",
        git: "https://github.com/piyush-jaiswal-projects/pixel-streaming--project",
        live: "...",
        tech: ["HTML", "CSS", "Javascript", "ReactJS", "Node", "ExpressJS", "MongoDB"],
        description: "This web app registers users baed upon email otp and sends a unique link to access the gaming services. For every user, there is a limit on the duration for which user can access the service and logs out the user after that limit is reached",
        standard: ["Login and Signup Authentication", "Email Based OTP Verification"],
        standout: ["Integrated Arcware Game Streaming", "Server based timer to logout user while using game", "Dual Language Support"],
        achievements: ["Learnt to use complex thirdy part APIs"]
    },
    {
        id:8,
        tag: "FRONTEND",
        title: "NGO Website",
        tagline: "Website of an organization",
        previewImage: "http://res.cloudinary.com/deo80u7qs/image/upload/v1689118478/ntvtlhrcmacymcqfufbw.png",
        git: "https://github.com/piyush-jaiswal-projects/client-project-1",
        live: "https://symphonious-praline-82b0d6.netlify.app/",
        tech: ["HTML", "CSS", "Javascript", "ReactJS"],
        description: "This website is for an NGO. Converted the given Figma design into a full fledged and responsible website",
        standard: [],
        standout: [],
        achievements: []
    },
    {
        id:9,
        tag: "BACKEND",
        title: "SMART Forest App -  Backend",
        tagline: "A project by State's Forest Department",
        previewImage: "http://res.cloudinary.com/deo80u7qs/image/upload/v1689118900/bhubtfam9ddapx8w6tfi.png",
        git: "https://github.com/piyush-jaiswal-projects/forest-app-backend",
        live: "https://docs.google.com/presentation/d/1mptCxyfYQ29YkD81ZuP5WVBMh6PJHgvlCTldNUtYInY/edit?usp=sharing",
        tech: ["Node", "ExpressJS", "MongoDB"],
        description: "Developed the backend of an app using Node.JS, Express.JS, and MongoDB database in collaboration with a project partner. Responsible to build multiple APIs to perform real-time CRUD operations as per data received from sensors installed on forest animals.",
        standard: [],
        standout: [],
        achievements: []
    },
    {
        id:4,
        tag: "FRONTEND",
        title: "Tech Startup Website",
        tagline: "A simple website to showcase and sell products",
        previewImage: "https://res.cloudinary.com/deo80u7qs/image/upload/v1687527266/hhfqxjn3esc3avi3qfdp.png",
        git: "https://github.com/piyush-jaiswal-projects/tech-startup-website",
        live: "https://tech-startup-website.vercel.app/",
        tech: ["HTML", "CSS", "Javascript", "ReactJS"],
        description: "This website implements the frontend for a tech startup to showcase their sproducts and services. It also has a small ecommerce functionality for their customers. On top of that, it also has blog section",
        standard: ["Authentication - Login and Signup", "Smooth user experience", "Multi route single page web app"],
        standout: ["Frontend logic of basic Ecommerce", "UI for chatbot"],
        achievements: []
    },
    {
        id:5,
        tag: "FULLSTACK",
        title: "Notes Keeper Webapp",
        tagline: "A safe place to keep all your notes",
        previewImage: "http://res.cloudinary.com/deo80u7qs/image/upload/v1687972970/mtsfele7ddq1pfik9zuu.png",
        git: "https://github.com/piyush-jaiswal-projects/Keeper-Notes-Web-App",
        live: "...",
        tech: ["HTML", "CSS", "Javascript", "ReactJS", "Node", "ExpressJS", "MongoDB"],
        description: "A simple web app to perform CRUD operations in order to maintain a collection of all your notes.",
        standard: ["User signup and login", "Addition, deletion, updation of notes"],
        standout: ["Live data syncing using stream", "CRUD operations on MongoDB Cloud Database"],
        achievements: []
    }
]

const skills = [
    { name: "HTML", rating: 4 },
    { name: "CSS", rating: 4 },
    { name: "Javascript", rating: 4.5 },
    { name: "Typescript", rating: 3 },
    { name: "ReactJS", rating: 4.5 },
    { name: "TailwindCSS", rating: 4 },
    { name: "Redux", rating: 4 },
    { name: "jQuery", rating: 3 },
    { name: "NodeJS", rating: 4 },
    { name: "ExpressJS", rating: 4 },
    { name: "MongoDB", rating: 4 },
    { name: "Docker", rating: 3 },
]


const certificates = [
    {
        id: 2,
        title: "Web Developer",
        desc: "Certificate of Completion",
        url: "https://res.cloudinary.com/deo80u7qs/image/upload/v1687525809/ja21wzf5ls6xmk2e9tma.jpg"
    },
    {
        id:3,
        title: "Website Development",
        desc: "Summer Training",
        url: "https://res.cloudinary.com/deo80u7qs/image/upload/v1687525410/ueydg7pws8ga3lcta4k5.png"
    },
    {
        id:4,
        title: "Web Development Bootcamp",
        desc: "Certificate of Completion",
        url: "https://res.cloudinary.com/deo80u7qs/image/upload/v1687525263/ogabjgomlyy7rsp0zxii.png"
    },
    {
        id:5,
        title: "Flipkart GRID 4.0",
        desc: "Certificate of Participation",
        url: "https://res.cloudinary.com/deo80u7qs/image/upload/v1687525142/y4ki53t0nmn8i8bvpje6.png"
    }
]

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
        desc: "Responsible for up-gradation, responsiveness and maintenance of official website.",
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
    skills,
    certificates,
    experiences,
    blogAPIKey
};