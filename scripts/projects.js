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
        desc: "A web app that enables transcription of lectures into notes in real time. 1st place winner of DVHacks2025",
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

let otherProjects = [
    {
        name: "Complexes",
        preview: "/imgs/otherProjects/complexes.png",
        desc: "A 2D platformer where users answer personality quiz-style questions, then fight a boss that changes according to their answers. Made for Parthenon.\n\nVery Unfinished-- started Nov 2025\n\nTech Stack: Godot/GDScript\n\nAll art made by @iisalut on Github",
        repo: "https://github.com/iisalut/Actual_athena",
        demo: "https://avishi33sharma.itch.io/complexes"
    },
    {
        name: "Fort Grumio",
        preview: "/imgs/otherProjects/fortgrumio.png",
        desc: "Made for my Latin project about Roman forts. Learn Grumio's story, explore Fort Grumio, and talk to GrumioBot! Yes, Grumio from the CLC.\n\nCompleted Mar 2025\n\nTech Stack: HTML, CSS, JS; Node/Express, EJS, GeminiAPI",
        repo: "https://github.com/ChuckChuckler/fortgrumio",
        demo: "https://fortgrumio.onrender.com/"
    },
    {
        name: "Pirate Hangman",
        preview: "/imgs/otherProjects/piratehangman.png",
        desc: "Pirate-themed hangman, but you have to catch the falling letters to guess them! A tiny website for SayCheese, made to fit entirely in a QR code.\n\nCompleted Jan 2025\n\nTech Stack: HTML, CSS, JS",
        repo: "https://github.com/ChuckChuckler/piratehangman",
        demo: "https://vercel.com/avishi-sharmas-projects/piratehangman"
    },
    {
        name: "Astronaut Rescue",
        preview: "/imgs/otherProjects/astronautrescue.png",
        desc: "A 2D website game where you play as an astronaut escaping a crashing ship, all while practicing your Algebra II solving over C skills.\n\nCompleted Jan 2025\n\nTech Stack: HTML, CSS, JS",
        repo: "https://github.com/ChuckChuckler/astronaut-rescue",
        demo: "https://astronaut-rescue.vercel.app/main.html"
    },
    {
        name: "SillySimpli",
        preview: "/imgs/otherProjects/sillysimpli.png",
        desc: "Practice simplifying with radicals with the help of dad jokes-- with every right answer, unlock more letters for the punchline!\n\nCompleted Jan 2025\n\nTech Stack: HTML, CSS, JS; Node/Express, EJS, GeminiAPI",
        repo: "https://github.com/ChuckChuckler/sillysimpli",
        demo: "https://sillysimpli-priv.onrender.com/"
    },
    {
        name: "GPACalc",
        preview: "/imgs/otherProjects/gpacalc.png",
        desc: "A weighted GPA calculator that saves users' classes through account creation.\n\nCompleted Dec 2024\n\nTech Stack: HTML, CSS, JS; Flask, Sqlite3",
        repo: "https://github.com/ChuckChuckler/gpacalc-rehaul",
        demo: "https://avishis3939.pythonanywhere.com/"
    },
    {
        name: "Lewis Structures",
        preview: "/imgs/otherProjects/lewis.png",
        desc: "A website for practicing Lewis Structures. Featuring more terrible CSS!\n\nCompleted Nov 2024\n\nTech Stack: HTML, CSS, JS",
        repo: "https://github.com/ChuckChuckler/lewis",
        demo: "https://jazzy-pavlova-6f7aba.netlify.app/"
    },
    {
        name: "Ermify2",
        preview: "/imgs/otherProjects/ermify2.png",
        desc: "The sequel. A web app where users can ask questions, and be answered in the most 'erm, actually' way possible. You don't even know what 2+2 is???\n\nCompleted Nov 2024\n\nTech Stack: HTML, CSS, JS; Flask, GeminiAPI\n\n**Note, this project no longer works due to outdated APIs",
        repo: "https://github.com/ChuckChuckler/ermify2",
        demo: "https://youtu.be/0SGpE4m_GpM"
    },
    {
        name: "PTSpeller",
        preview: "/imgs/otherProjects/ptspeller.png",
        desc: "A website that spells out user input using elements from the periodic table. Warning: terrible CSS choices.\n\nCompleted Nov 2024\n\nTech Stack: HTML, CSS, JS",
        repo: "https://github.com/ChuckChuckler/ptspeller",
        demo: "https://ptspeller.vercel.app/main.html"
    },
    {
        name: "Vigenere Cipher",
        preview: "/imgs/otherProjects/vigenerecipher.png",
        desc: "A Vigenere Cipher encoder/decoder. Works both ways!\n\nCompleted Nov 2024\n\nTech Stack: HTML, CSS, JS",
        repo: "https://github.com/ChuckChuckler/vigenerecipher",
        demo: "https://vigenerecipher.vercel.app/encoder.html"
    },
    {
        name: "SillyText",
        preview: "/imgs/otherProjects/sillytext.png",
        desc: "A website where users can get 'silly' versions of the text they input. It inserts emojis after every word.\n\nCompleted Nov 2024\n\nTech Stack: HTML, CSS, JS",
        repo: "https://github.com/ChuckChuckler/sillytext",
        demo: "https://silly-text.tiiny.site/"
    },
    {
        name: "Ermify",
        preview: "/imgs/otherProjects/ermify.png",
        desc: "A web app that turns user input into comically eloquent verbage.\n\nCompleted Nov 2024\n\nTech Stack: HTML, CSS, JS; Flask, GeminiAPI\n\n**Note, this project no longer works due to outdated APIs",
        repo: "https://github.com/ChuckChuckler/ermify",
        demo: "https://youtu.be/UMbyFLsqkRw"
    },
    {
        name: "Verb Conjugator",
        preview: "/imgs/otherProjects/verbconjugator.png",
        desc: "A website to practice conjugating verbs in Latin. Kind of buggy. Might remake!.\n\nCompleted Nov 2024\n\nTech Stack: HTML, CSS, JS",
        repo: "https://github.com/ChuckChuckler/verbconjugator",
        demo: "https://verb-conjugates.tiiny.site/"
    },
    {
        name: "Quadratics",
        preview: "/imgs/otherProjects/quadratics.png",
        desc: "Quadratic equations practice website. yay to algebra\n\nCompleted Nov 2024\n\nTech Stack: HTML, CSS, JS",
        repo: "https://github.com/ChuckChuckler/quadratics",
        demo: "https://silver-vivian-71.tiiny.site/"
    },
    {
        name: "TLDW (Too Long Didn't Watch)",
        preview: "/imgs/otherProjects/tldw.png",
        desc: "A web app that takes a youtube link and summarizes the video.\n\nCompleted Nov 2024\n\nTech Stack: HTML, CSS, JS; Flask, YoutubeTranscriptAPI, GeminiAPI\n\n*Note, this project no longer works due to outdated APIs",
        repo: "https://github.com/ChuckChuckler/tldw",
        demo: "https://youtu.be/-9xCfvGnWGw"
    },
    {
        name: "Athena",
        preview: "/imgs/otherProjects/athena.png",
        desc: "A web app where users can upload notes and take AI-generated practice tests.\n\nCompleted Nov 2024\n\nTech Stack: HTML, CSS, JS; Flask, Sqlite3, GeminiAPI\n\n*Note, this project no longer works due to outdated APIs",
        repo: "https://github.com/ChuckChuckler/athena",
        demo: "https://sharma39avishi.pythonanywhere.com/"
    },
    {
        name: "Punnett Practice",
        preview: "/imgs/otherProjects/punnett.png",
        desc: "A very simple website for practicing punnett squares.\n\nCompleted Apr 2024\n\nTech Stack: HTML, JS",
        repo: "https://github.com/ChuckChuckler/punnettpractice",
        demo: "https://punnettpractice.vercel.app/"
    },
    {
        name: "TreeAssistant",
        preview: "/imgs/otherProjects/treeassistant.png",
        desc: "A web app that game-ifies the process of planting trees; it returns nearby places for users to plant trees, and grants XP for each tree planted. 3rd place winner of KuriusHacks March 2024.\n\nCompleted Mar 2024\n\nTech Stack: HTML, CSS, JS; Flask, sqlite3, HEREAPI\n\n*Note, this project no longer works due to the utilized version of HERE's reverse geocoding API being deprecated.",
        repo: "https://github.com/ChuckChuckler/TreeAssistant",
        demo: "https://avishisharma39.pythonanywhere.com/"
    }
]

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
    for(let i = 0; i < otherProjects.length; i++){
        let toClone = document.getElementById("card");
        let clone = toClone.cloneNode(true);
        console.log(clone);
        clone.id = "card"+i;
        clone.childNodes[1].innerText = otherProjects[i].name;
        clone.childNodes[3].childNodes[1].src = otherProjects[i].preview;
        clone.childNodes[3].childNodes[5].innerText = otherProjects[i].desc;
        clone.childNodes[5].childNodes[1].onclick = function(){newTabRdrct(otherProjects[i].repo)};
        clone.childNodes[5].childNodes[3].onclick = function(){newTabRdrct(otherProjects[i].demo)};
        document.getElementById("projectGrid").append(clone);
    }
    document.getElementById("projectGrid").removeChild(document.getElementById("card"));
}