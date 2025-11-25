function wait(ms){
    return new Promise(resolve=>setTimeout(resolve, ms));
}

function randint(min, max){
    return Math.floor((Math.random()*max-min)+min);
}

function rdrct(link){
    window.location.href = link;
}

function hover(text){
    document.getElementById("skill").innerText = text;
}



//gsap animations

//gsap.registerPlugin()

