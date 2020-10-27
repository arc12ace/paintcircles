var canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

var color="red"

var mouseEvent=""
var last_x, last_y, current_x, current_y

var radius=40

canvas.addEventListener("mouseup", mu);
function mu(e){
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave", ml);
function ml(e){
    mouseEvent="mouseLeave";
}
canvas.addEventListener("mousedown", md);
function md(e){
    mouseEvent="mouseDown";
    color=document.getElementById("colorinput").value
    radius=document.getElementById("widthinput").value
}
canvas.addEventListener("mousemove", mm);
function mm(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;

    if (mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.lineWidth=3;
        ctx.strokeStyle=color;
        ctx.arc(current_x,current_y, radius, 0, 2*Math.PI )
        ctx.stroke();
    }
    last_x=current_x;
    last_y=current_y;
}
function clearArea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
}