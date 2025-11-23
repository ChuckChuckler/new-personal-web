function wait(ms){
    return new Promise(resolve=>setTimeout(resolve, ms));
}

function randint(min, max){
    return Math.floor((Math.random()*max-min)+min);
}

function rdrct(link){
    window.location.href = link;
}

window.onload = function(){
    new TypeIt(".about-me-title",{
        speed: 80,
        loop: false
    }).go();
}



//gsap animations

let animRunning = false;

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

ScrollTrigger.create({
    trigger: ".about-me-text",
    start: "top bottom",
    end: "bottom top",
    onEnter:()=>{
        if(!animRunning){
            animRunning = true;
            let scroller = gsap.timeline();
            scroller.to(window,{
                duration: 1.5,
                scrollTo: ".about-me-text",
                ease: "power3.out"
            });
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
                let scroller = gsap.timeline();
                scroller.to(window,{
                    duration: 1.5,
                    scrollTo: ".plaid-bg",
                    ease: "power3.out"
                });
                wait(1500).then(()=>{
                    animRunning = false;
                });
            }
        }
    }
});