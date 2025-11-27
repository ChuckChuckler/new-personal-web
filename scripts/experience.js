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

function hover(text){
    document.getElementById("skill").innerText = text;
}

function hover2(text){
    document.getElementById("hackathonYswsDisplay").innerText = text;
}

window.onload = function(){
    new TypeIt(".experience-title",{
        speed: 80,
        loop: false
    }).go();
    let hackathonsArray =  document.getElementsByClassName("hackathon-ysws");
    for(let i = 0; i < hackathonsArray.length;i++){
        hackathonsArray[i].addEventListener("mouseleave", ()=>{
            hover2("");
        });
    }
}



//gsap animations

let animRunning = false;

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

ScrollTrigger.create({
    trigger: ".skills",
    start: "top bottom",
    end: "bottom top",
    onEnter:()=>{
        if(!animRunning){
            animRunning = true;
            let scroller = gsap.timeline();
            scroller.to(window,{
                duration: 1.5,
                scrollTo: ".skills",
                ease: "power3.out"
            })
            scroller.to(".array",{
                width:"80%",
                duration: 1.5,
                ease: "power3.out"
            },"<")
            scroller.to(".array-border",{
                width:"81%",
                duration: 1.5,
                ease: "power3.out"
            },"<")
            wait(1500).then(()=>{
                animRunning = false;
            });
        }
    }
});

ScrollTrigger.create({
    trigger: ".plaid-bg",
    start: "bottom top",
    end: "bottom bottom",
    onUpdate:(self)=>{
        if(self.direction==-1){
            if(!animRunning){
                animRunning = true;
                new TypeIt(".experience-title",{
                    speed: 80,
                    loop: false
                }).go();
                let scroller = gsap.timeline();
                scroller.to(window,{
                    duration: 1.5,
                    scrollTo: ".plaid-bg",
                    ease: "power3.out"
                })
                scroller.to(".array",{
                    width:"1%",
                    duration: 1.5,
                    ease: "power3.out"
                },"<")
                scroller.to(".array-border",{
                    width:"2%",
                    duration: 1.5,
                    ease: "power3.out"
                },"<")
                wait(1500).then(()=>{
                    animRunning = false;
                });
            }
        }
    }
});

ScrollTrigger.create({
    trigger: ".hackathon-ysws-holder",
    start: "top bottom",
    end: "bottom bottom",
    onEnter:()=>{
        if(!animRunning){
            animRunning = true;
            let scroller = gsap.timeline();
            scroller.to(window,{
                duration: 1.5,
                scrollTo: ".endScroll",
                ease: "power3.out"
            })
            scroller.to(".array",{
                width:"1%",
                duration: 1.5,
                ease: "power3.out"
            },"<")
            scroller.to(".array-border",{
                width:"2%",
                duration: 1.5,
                ease: "power3.out"
            },"<")
            scroller.to(".experience-holder",{
                width:"85%",
                duration:1.5,
                ease: "power3.out"
            },"<")
            wait(1500).then(()=>{
                animRunning = false;
            });
        }
    }
});

ScrollTrigger.create({
    trigger: ".skills",
    start: "bottom top",
    end: "bottom bottom",
    onUpdate:(self)=>{
        if(self.direction==-1){
            if(!animRunning){
                animRunning = true;
                let scroller = gsap.timeline();
                scroller.to(window,{
                    duration: 1.5,
                    scrollTo: ".skills",
                    ease: "power3.out"
                })
                scroller.to(".array",{
                    width:"80%",
                    duration: 1.5,
                    ease: "power3.out"
                },"<")
                scroller.to(".array-border",{
                    width:"81%",
                    duration: 1.5,
                    ease: "power3.out"
                },"<")
                scroller.to(".experience-holder",{
                    width:"2%",
                    duration:1.5,
                    ease: "power3.out"
                },"<")
                wait(1500).then(()=>{
                    animRunning = false;
                });
            }
        }
    }
});

