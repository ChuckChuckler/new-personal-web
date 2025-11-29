function wait(ms){
    return new Promise(resolve=>setTimeout(resolve, ms));
}

function randint(min, max){
    return Math.floor((Math.random()*max-min)+min);
}

function rdrct(link){
    window.location.href = link;
}

function newTabRdrct(link){
    window.open(link, "_blank");
}

let featuredProjects = [
    {
        name: "DailyCode",
        preview: "/imgs/previews/dailyCodePreview.png",
        desc: "A web app where a daily (although weekly is more feasible) coding prompt is displayed. Users can create accounts and upload projects that they have made adhering to that prompt (games, websites, anything); they can vote on or comment on others' projects as well.",
        status: "Incomplete/WIP-- started May 2025",
        time: "32hrs so far",
        techStack:{
            frontend: "React/Vite, React Router, Tailwind, Axios",
            backend: "Node/Express, MongoDB, Crypto, Multer, Nodemailer"
        },
        github: `https://github.com/ChuckChuckler/dailyCode/tree/main`,
        demo: `https://dailycode-priv-frontend.vercel.app/`
    },
    {
        name: "Apollo",
        preview: "/imgs/previews/apolloPreview.png",
        desc: "A web app that enables transcription of lectures into notes in real time.",
        status: "Complete, but not deployed-- Feb 2025",
        time:"16hrs (straight, with no sleep)",
        techStack:{
            frontend: "HTML, CSS, JS",
            backend: "Flask, sqlite, SpeechRecognition, GeminiAPI"
        },
        github: "https://github.com/ChuckChuckler/apollo",
        demo: "https://devpost.com/software/apollo-fa1up2"
    },
    {
        name: "Personal Website (outdated)",
        preview: "/imgs/previews/personalwebPreview.png",
        desc: "My old personal website! Cool design, but lacking in information.",
        status: "Complete-- Jan 2025",
        time: "19hrs",
        techStack:{
            frontend: "HTML, CSS, JS",
            backend: "None"
        },
        github: "https://github.com/ChuckChuckler/personalwebsite",
        demo: "https://personalwebsite-chi-ashen.vercel.app/"
    },
    {
        name: "That's Not My Element!",
        preview: "/imgs/previews/notmyelementPreview.png",
        desc: "A 2D chemistry game based on That's Not My Neighbor! featuring elements from the periodic table.",
        status: "Complete-- Jan 2025",
        time:"10hrs",
        techStack:{
            frontend: "HTML, CSS, JS",
            backend: "none"
        },
        github: "https://github.com/ChuckChuckler/notmyelement",
        demo: "https://fluffy-sfogliatella-5528a0.netlify.app/main"
    },
    {
        name: "Matter Classification",
        preview: "/imgs/previews/classifyPreview.png",
        desc: "A simple drag-and-drop chemistry game about classifying types of matter.",
        status: "Complete-- Jan 2023",
        time:"12hrs",
        techStack:{
            frontend: "HTML, CSS, JS",
            backend: "NodeJS/Express with EJS templating; MongoDB"
        },
        github: "https://github.com/ChuckChuckler/matter-classification/tree/main",
        demo: "https://matter-classification.onrender.com/ "
    }
]

/*let otherProjects = [
    {}
]*/

function updateCarousel(direction){
    if(direction=="right"){
        if(index==featuredProjects.length-1){
            index=0;
        }else{
            index+=1;
        }
    }else if(direction=="left"){
        if(index==0){
            index=featuredProjects.length-1;
        }else{
            index-=1;
        }
    }
    document.getElementById("projectName").innerText = featuredProjects[index].name;
    document.getElementById("projectPreview").src = featuredProjects[index].preview;
    document.getElementById("projectDesc").innerText = featuredProjects[index].desc;
    document.getElementById("status").innerText = featuredProjects[index].status;
    document.getElementById("timeTaken").innerText = `Time Taken: ${featuredProjects[index].time}`;
    document.getElementById("frontend").innerText = `Frontend: ${featuredProjects[index].techStack.frontend}`;
    document.getElementById("backend").innerText = `Backend: ${featuredProjects[index].techStack.backend}`;
    document.getElementById("repo").onclick = function(){newTabRdrct(featuredProjects[index].github)};
    document.getElementById("demo").onclick = function(){newTabRdrct(featuredProjects[index].demo)};
}

let index = 0;

window.onload = function(){
    updateCarousel();
}