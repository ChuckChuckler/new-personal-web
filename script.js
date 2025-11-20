function wait(ms){
    return new Promise(resolve=>setTimeout(resolve, ms));
}

window.onload = function(){
    console.log("hello");
}

console.log(window.innerWidth, window.innerHeight);

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
        console.log(deg);
        gsap.to(".title-bg", {
            "--bg-angle": `${deg}deg`,
            duration: 0.3
        });
        timeout=true;
        wait(300).then(()=>{
            timeout=false;
        });
    }
});
