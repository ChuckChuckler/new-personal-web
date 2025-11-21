let nameType;
let first = true;

function wait(ms){
    return new Promise(resolve=>setTimeout(resolve, ms));
}

function randint(min, max){
    return Math.floor((Math.random()*max-min)+min);
}

let names = ["Avishi Sharma", "Aaaaaaaaaaavishi", "Avishi Sharma", "LKJAFSDFjaslkdjfk", "Avishi Sharma", ":P", "meow", "Vishi"];

window.onload = function(){
    typeName();
    nameType = setInterval(typeName, 5000);
}

function typeName(){
    document.getElementById("title").innerText = "";
    let toType;
    if(first){
        toType="Avishi Sharma";
        first=false;
    }else{
        toType = names[randint(0,names.length)];
    }
    new TypeIt("#title",{
        speed: 80,
        loop: false
    })
    .type(toType)
    .pause(2000)
    .delete(toType.length)
    .go();
}


let timeout = false;
let deg = 0;

document.addEventListener("mousemove", function(e){
    if(!timeout){
        let xPercent = e.clientX/window.innerWidth*100;
        let yPercent = e.clientY/window.innerHeight*100;
        if(xPercent<(100/3)){
            if(yPercent<50){
                deg = 315;
            }else{
                deg = 225;
            }
        }else if(xPercent<(200/3)){
            if(yPercent<50){
                if(deg<180){
                    deg=0;
                }else{
                    deg=360;
                }
            }else{
                deg = 180;
            }
        }else{
            if(yPercent<50){
                if(deg<180){
                    deg=45;
                }else{
                    deg=405;
                }
            }else{
                deg = 135;
            }
        }
        gsap.to(".title-bg", {
            "--bg-angle": `${deg}deg`,
            duration: 0.5
        });
        timeout=true;
        wait(500).then(()=>{
            timeout=false;
        });
    }
});
