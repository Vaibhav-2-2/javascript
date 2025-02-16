const randomcolor = function(){
    const ra = '0123456789ABCDEF'
    let color = "#";

    for(let i = 0; i < 6; i++){
        color += ra[Math.floor(Math.random() * 16)];
    }
    return color;
}

let intervalId;
const startchange = function(){
    if(!intervalId){
        intervalId = setInterval(changecolor , 1000)
}
   function changecolor(){
    document.body.style.backgroundColor = randomcolor();
 }
}

const stopcolor = function(){
    clearInterval(intervalId)
    intervalId = null;
}

const stopbutton = document.getElementById("stop").addEventListener("click",stopcolor)

const startButton = document.getElementById("start").addEventListener("click",startchange);