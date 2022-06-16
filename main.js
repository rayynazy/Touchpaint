canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "green";
width = screen.width;
height = screen.height;
new_width = screen.width - 70;
new_height = screen.height - 300;
width_of_line = 6;
var last_pos_X = 0, last_pos_Y = 0;

if (width < 992) {
    document.getElementById("myCanvas").height = new_height;
    document.getElementById("myCanvas").width = new_width;
    document.body.style.overflow = "hidden";
}


canvas.addEventListener("touchstart", my_touchdown);
function my_touchdown(e) {
    console.log("touch has started");
    color=document.getElementById("colour").value;
    width_of_line=document.getElementById("width_of_line").value;
    last_pos_X = e.touches[0].clientX - canvas.offsetLeft;
    last_pos_Y = e.touches[0].clientY - canvas.offsetTop;
}


canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {
    current_pos_of_touch_X = e.touches[0].clientX - canvas.offsetLeft;
    current_pos_of_touch_Y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    console.log("last position of X and Y coordinates are");
    console.log("X=" + last_pos_X + "Y=" + last_pos_Y);
    ctx.moveTo(last_pos_X, last_pos_Y);

    console.log("Current position of X and Y coordinates are");
    console.log("X=" + current_pos_of_touch_X + "Y=" + current_pos_of_touch_Y);
    ctx.lineTo(current_pos_of_touch_X, current_pos_of_touch_Y);
    ctx.stroke();

    last_pos_X = current_pos_of_touch_X;
    last_pos_Y = current_pos_of_touch_Y;
}

function clear_area(){
    ctx.clearRect(00,0,ctx.canvas.width,ctx.canvas.height);
}