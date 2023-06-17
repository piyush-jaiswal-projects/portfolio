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

const notes = [
    { id: 1, title: "Operating System", desc: "Desc hu mai", url: "https://drive.google.com/file/d/1CuML95JJqIh_V9NdrNYh00bqO7QvKoiw/preview", src: "https://tailwindcss.com/docs/scale" },
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
    id: 1499108,
    title: "React Hooks Simplified",
    desc: "f you have ever tried learning React, your brain might get stuck on React Hooks. But not anymore, I have explained important built-in react hooks in a very simplified manner with easy implementation. So let's dive deep into it…\n\nIn very simplified terms, Hooks are reusable logic or javascript functions similar to the reusable components we build in React.\n\nHooks are identified by their name which starts with “use”.",

    content: "If you have ever tried learning React, your brain might get stuck on React Hooks. But not anymore, I have explained important built-in react hooks in a very simplified manner with easy implementation. So lets dive deep into it…\n\nIn very simplified terms, Hooks are reusable logic or javascript functions similar to the reusable components we build in React.\n\nHooks are identified by their name which starts with “use”. For example, useState(use logic to maintain state), useEffect(use logic to perform some actions as an effect when something(s) changes), etc.\n\n## useState\nIn simple terms, useState is used to define variables whose values can be changed dynamically, and at the same time, those changes get reflected in your UI components.\n\nNormal variables do change dynamically but their state doesn’t get updated in your UI because UI is not automatically aware of the fact that the state is changed.\n\nTherefore, libraries such as react follow a unidirectional data flow, where changes to the data trigger updates to the UI. This means that you need to explicitly update the UI to reflect the changes in the variables.\n**Example: Simple Up and Down Counter**\nExplanation: \nWhenever you click on the + or - button, you are trying to update the state of the variable dynamically with the help of the update function provided by useState hook. So whenever the state changes, the hook explicitly forces the updation of the component by re-rendering.\n\n```\nfunction UseStateHook() {\n    const [data, setData] = useState({\n        count: 0,\n        id: 'X'\n    });\n```\n```\n    const updateCount = (operator) => {\n        operator === '+'\n            ?\n            setData((prev) => {\n                return {\n                    ...prev,\n                    count: prev.count + 1\n                }\n            })\n            :\n            setData((prev) => {\n                return {\n                    ...prev,\n                    count: prev.count - 1\n                }\n            });\n        \n    }\n\n    return (\n        <div className=\"App\">\n            <h2>Use State Hook</h2>\n            <br />\n            <button onClick={() => { updateCount('-') }}>-</button>\n            <span>{data.count}</span>\n            <button onClick={() => { updateCount('+') }}>+</button>\n        </div>\n    );\n}\n```\n\n## useEffect\nMany times you want to perform some action, when some state or variable changes.\nThis can be achieved by useEffect\nIt triggers a function, whenever the state of dependencies passed by you changes.\n3 cases:\n1. To run the function on every render\n        ```\n        useEffect(()=>{\n        //perform some action on every render\n        });\n        ```\n2. To run the function only once\n```\nuseEffect(()=>{\n//perform some action only once\n}, []);\n//empty dependency array\n```\n3. To run the function only when the passed dependencies gets changed.\n```\nuseEffect(()=>{\n//perform some action only when dependency variables change\n}, [dependencyVarOne, dependencyVarTwo]);\n//non-empty dependency array\n```\n<u>Cleanup function</u>: useEffect is generally used for side effect functions like subscriptions, data fetching, etc. So when the component gets unmounted it’s required to release or clean up the resources \n```\nuseEffect(()=>{\n//side effect logic\n\nreturn ()=>{\n//cleanup logic\n}\n}, [/* dependencies */ ] );\n```\n**Example:** When we change width of browser, as an effect the current width of browser gets displayed\n\n```\nimport { useState, useEffect } from 'react'\n\nfunction UseEffectHook() {\n    const [width, setWidth] = useState(window.innerWidth);\n\n    useEffect(() => {\n        window.addEventListener('resize', () => {\n            setWidth(window.innerWidth);\n        })\n\n        //cleanup\n        return () => {\n            window.removeEventListener('resize', () => {\n                setWidth(0);\n            });\n        }\n    }, [])\n```\n```\n    return (\n        <>\n            <h2>useEffect Hook</h2>\n            <br />\n            <p>\n                Window Width:\n                <span>\n                    {width}\n                </span>\n            </p>\n        </>\n    );\n}\n```\n\n## useMemo\nIt is used to improve the performance of your React app.\n\nSometimes, you have to perform functions such as sorting data, fetching a large amount of data, or some other kind of expensive functions\nIn that case, you don’t want your app to perform that function again and again until it is really required to recalculate as it makes your app slow\n\nHere, useMemo hooks come into the picture, it caches the result of that expensive function and calls the function again only when dependencies change. Otherwise, it returns the previous cached result.\n**Example**: In the following example, on initial render, both memoized and un-memoized function gets called.\nBut when we click on the update button it should only count up the value by one but it is also calling unmemoized function as seen on the console\nBut memoized function gets called only when the input location or vacancy gets updated\n\n```\nconst hotelData = useMemo(() => {\n        console.log(\"Memoized Function Call\");\n        //calling an API to get data\n        return `Hotel Data ${userInput.location}  and ${userInput.vaccancy}`;\n    }, [userInput.location, userInput.vaccancy])\n```\nComplete code for this example can be found [here](https://github.com/piyush-jaiswal-projects/react-hooks/blob/master/src/hooks/UseMemoHook.js)\n\n## useCallback\nIt is also a performance improvement hook\nIt caches the entire function between re-renders but, it doesn’t call the function it only returns it.\nIn some cases, your function call might get changed based on some variables otherwise function remains the same\nSo for that purpose, useCallback can be used\n**Example**: in this example, we have used useEffect() hook to compare whether our function gets changed. As you click on the update button, the state changes and component gets re-render but the function inside useCallback does not change\nHowever, if you change the dependency variable, the function inside the callback gets changed\n\n```\nlet func = useCallback((orderdetails) => {\n        //api call to post data or any other function for ${value}\n        console.log(`Order Placed ${value}`);\n        return value;\n    }, [value])\n\n```\nComplete code for this example can be found [here](https://github.com/piyush-jaiswal-projects/react-hooks/blob/master/src/hooks/UseCallbackHook.js)\n\n## useRef\nSuppose you want to keep a value or function for future reference and that value or function doesn’t affect the rendering of your component, then useRef() can be used to reference that value or function between re-renders.\n\nAnd later or you can use that, maybe for comparing, etc\nFor example, we can make use of useRef() to compare functions as we have done in the example of callback\n\n**Example**:, as you update the state using the update button nothing happens, but when you change the input value\nTwo values get logged\nOne is the previous value of a function and its result\nAnd then you get a new function and its result\n\n```\nconst initialFunc = useRef(func);\n\n    useEffect(() => {\n        if (initialFunc.current !== func) {\n            console.log(\"Function gets changed\");\n            initialFunc.current();\n            func();\n        }\n    },[func])\n```\nComplete code for this example can be found [here](https://github.com/piyush-jaiswal-projects/react-hooks/blob/master/src/hooks/UseRefHook.js)\n\n## forwardRef\nSometimes you may want that your parent component can modify DOM or perform some action in the child component to which the parent doesn’t have direct access.\nIn that case, you can make use of the useRef() hook to hold that state and forwardRef() to expose that part to your parent\nExample manipulating a child component from the parent component\nIn this example, we are changing the type of input of an input tag from the parent element\nInitially, when you type in the input tag it takes normal text input but when you click on the button it converts to password type\n\n```\nimport { useRef, forwardRef } from 'react';\n\n// This example is referred from Official React Docs\n// Create child component here or import it\nconst Child = forwardRef((props, ref) => {\n    return <input placeholder={props.placeholder} ref={ref} />;\n});\n\nfunction ForwardRef() {\n    const mainRef = useRef(null);\n\n    function handleManipulation() {\n        mainRef.current.setAttribute('type', 'password');\n    }\n\n    return (\n        <div>\n            <h2>Forward Ref: Manipulating Child Component From Parent</h2>\n            <br />\n            <Child placeholder=\"Enter Any Value...\" ref={mainRef} />\n            <br />\n            {/* BUTTON OF PARENT TO MANIPULATE CHILD */}\n            <button onClick={handleManipulation}>Convert Input type to Password</button>\n        </div>\n    );\n}\n\nexport default ForwardRef;\n```\n\n## useReducer\nThis hook is used for state management. It allows you to define the initial state, define a function that will take the current state, and action performed as an argument, and contains the logic to update the state. It also has a dispatch function to help you update your state.\n\nDISPATCH FUNCTION It is used to update the state to a different value and triggers the re-render and specify the action that occurred. Dispatch function updates the state only for the next render, and you’ll get the old value before the re-render completes.\n\nREDUCER FUNCTION This function takes state and action as an argument. And the logic to update the state based upon action is present inside it. Action argument contains the action performed as defined by the dispatch function and state contains the current state.\n\n**Example**: Let’s say a user logged in to our web app. He is not a subscriber hence the initial state is user type general but when he successfully subscribes, the state gets updated to the subscribed user, and accordingly UI changes.\n\n```\nimport { useReducer } from \"react\";\n\nfunction reducer(state, action) {\n    if (action.type === \"Subscribed\") {\n        return {usertype: \"subscribed\"}\n    }\n    else if (action.type === \"Unsubscribed\") {\n        return {usertype: \"unsubscribed\"}\n    }\n    else if (action.type === \"New\") {\n        return {usertype: \"general\"}\n    }\n    throw Error('Unknown Action');\n}\n```\n\n```\nfunction UseReducerHook() {\n    const [state, dispatch] = useReducer(reducer, { usertype: \"general\" });\n\n    function handleClick(e) {\n        switch (e.target.id) {\n            case \"Subscribe\":\n                dispatch({type: \"Subscribed\"})\n                break;\n            case \"Unsubscribe\":\n                dispatch({type: \"Unsubscribed\"})\n                break;\n            default:\n                dispatch({type: \"New\"})\n                break;\n        }\n    }\nreturn(\n<div>\n//code\n</div>\n);\n```\nComplete code can be found [here](https://github.com/piyush-jaiswal-projects/react-hooks/blob/master/src/hooks/UseReducerHook.js)\n\n## Context API\nIt is another way of state management. It can be better understood by following explanation.\n\n**Example**: It’s implementation can be understood by creating a dark and light mode functionality\n\n```\nimport { createContext, useState} from \"react\";\nimport Heading from \"../component/heading\";\n\nconst Theme = createContext(null);\n\nfunction ContextAPI() {\n    const [state, setState] = useState({\n        theme: \"light\",\n        text: \"Welcome to light\"\n    })\n\n    function handleTheme(e) {\n        e.target.id === \"Light\"\n            ?\n            setState({\n                \"theme\": \"light\",\n                \"text\": \"Welcome to light\"\n            })\n            :\n            setState({\n                \"theme\": \"dark\",\n                \"text\": \"Welcome to darkness\"\n            })\n    \n    }\n\n    return (\n        <Theme.Provider value={{\n            theme: state.theme,\n            text: state.text\n        }} >\n            <div className={state.theme === 'dark' ? \"dark\" : \"light\"}>\n            <Heading />\n            <button id=\"Light\" onClick={handleTheme}>Light Mode</button>\n            <button id=\"Dark\" onClick={handleTheme}>Dark Mode</button>\n            </div>\n        </Theme.Provider>\n    );\n}\n\nexport {ContextAPI, Theme};\n```\nCode of child component Heading is :\n\n```\nimport { useContext } from \"react\";\nimport { Theme } from \"../hooks/ContextAPI\";\n\nfunction Heading() {\n    const contentTheme = useContext(Theme);\n    return <h1 className={contentTheme.theme === \"dark\" ? \"dark\" : \"light\"}>{contentTheme.text}</h1>\n}\n\nexport default Heading;\n```\n\nSo that's all from my side. I hope this article helped you to clear your understanding a bit. You can found the entire code over [here](https://github.com/piyush-jaiswal-projects/react-hooks)\nI'll try to come up with more articles with improved explanation and examples.",
    image: "https://res.cloudinary.com/practicaldev/image/fetch/s--JvwDNv6g--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/swviv41n06gibbvsyzbf.jpg"
},
{
    id: 1378960,
    title: "Various Environments in Software Development",
    desc: "The journey of a software, starts from the core idea and goes on to the deployment of the final product. \n\nAs our app, website, web app, or any tech product starts receiving huge traffic, it becomes important to provide the reliable services. \nAny error or bug in the code will lead to servers crashing down, which may eventually lead to huge losses in terms of both finances and number of users.",
    content: "The journey of a software, starts from the core idea and goes on to the deployment of the final product. \n\nAs our app, website, web app, or any tech product starts receiving huge traffic, it becomes important to provide the reliable services. \nAny error or bug in the code will lead to servers crashing down, which may eventually lead to huge losses in terms of both finances and number of users. \nThus, the deployment of a new code, or changes in existing code base must go through a set of procedures to ensure smooth and bug free experience. Therefore, we need different environments, and each has its own role to play.\n\n## There are basically 4 environments or stages:\n\n1. Development Environment\n2. Testing Environment\n3. Staging Environment\n4. Production Environment\n\n## Development Environment\nIf you have ever written code, then there is a high chance that you were working in Development environment. \nIn this environment, it's basically about writing code to build your websites, apps, web-apps, extensions, and everything else.\n\n## Testing Environment\nNow once you are done building your product, as a developer, you start writing testing scripts. \nIn Test Scripts you write test cases, to test and to find bug in your own code so that you can correct them.\nDevelopers usually do minimal testing in this stage.\n\n## Staging Environment\nOnce developers are done with developing and testing at their level, codebase is sent for testing in Staging Environment. \nAt this stage, rigorous testing is done. \nThere are basically two types of tetsing:\n1. Automatic Testing\n2. Manual Testing\n\nFor example your code is staged for first time, then you'll be having Stage 1 -> Version 1.0\nNow tester will come up with some improvements. Developer will implement those improvements and thus now you are in Stage 2 and product is in Version 2.0\n\nThis stage continues in loop until a satisfactory Version is developed.\n\n## Production Environment\n**Anything Which goes into production, has to be defect free.**\nThis is the simple rule that must be followed.\n\nOnce previous stages are complete, code is deployed and is available for customers to use.\n\n\nSo this is a small and crisp information on different environments. Hope you found it useful and interesting. If you do, please follow for more upcoming articles.\n",
    image: "https://res.cloudinary.com/practicaldev/image/fetch/s--pc7asHVG--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/f40p0hzdthxis25yqsr0.jpg",
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