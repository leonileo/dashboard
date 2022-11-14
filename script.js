let closeBtn = document.getElementById("close");
let leftb = document.getElementById("left");
let rightb = document.getElementById("right");
let container = document.getElementById("contain");
let link = document.getElementById("link");


closeBtn.addEventListener("click", close)
closeBtn.addEventListener("dblclick", closeT)

function close(){
        leftb.setAttribute("class","sleft"); 
        rightb.setAttribute("class","small");
        container.setAttribute("class","one");
}
function closeT(){
    leftb.setAttribute("class","left"); 
    rightb.setAttribute("class","right");
    container.setAttribute("class","container");
}