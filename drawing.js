const BACKGROUND_COLOR = '#000000';
const LINE_COLOR = "#BCFF00";    
// "#FFFFFF"
const LINE_WIDTH = 15;

var currentX = 0;
var currentY = 0;
var previousX = 0;
var previousY = 0;
var isDrawing = false;
var canvas;
var context;

function drawLine(context, x1, y1, x2, y2) {

}

function prepareCanvas() {
    // console.log("Preparing Canvas checking")
    

    canvas = document.getElementById('my-canvas');
    context = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    context.fillStyle = BACKGROUND_COLOR;
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    context.strokeStyle = LINE_COLOR;
    context.lineWidth = LINE_WIDTH
    context.lineJoin = 'round';





    canvas.addEventListener("mousedown", function (event) {
        currentX = event.clientX - canvas.offsetLeft;
        currentY = event.clientY - canvas.offsetTop;
        isDrawing = true;

        // console.log("X,Y Coordinate ("+event.clientX+","+event.clientY+")")
        // console.log("Mouse Pressed");
    });

    canvas.addEventListener("mousemove", event => {
        if (isDrawing == true) {
            previousX = currentX;
            currentX = event.clientX - canvas.offsetLeft;

            previousY = currentY;
            currentY = event.clientY - canvas.offsetTop;

            draw();
        }
    });

    canvas.addEventListener("mouseup", function (event) {
        // drawLine(context, x, y, event.clientX - rect.left, event.clientY - rect.top);
        currentX = 0;
        currentY = 0;
        isDrawing = false;

        // console.log("Mouse Released");
    })

    canvas.addEventListener("mouseout",function(event){
        isDrawing = false;
    })

    canvas.addEventListener("touchstart",function(event){
        // console.log("touch downs");
        currentX = event.touches[0].clientX - canvas.offsetLeft;
        currentY = event.touches[0].clientY - canvas.offsetTop;

        isDrawing = true;
    })

    canvas.addEventListener("touchmove",function(event){
        if(isDrawing)
        {
            previousX = currentX;
            currentX = event.touches[0].clientX - canvas.offsetLeft;

            previousY = currentY;
            currentY = event.touches[0].clientY - canvas.offsetTop;

            draw();
        }
    })
}

function draw() {
    context.beginPath();
    context.moveTo(previousX, previousY);
    context.lineTo(currentX, currentY);
    context.closePath();
    context.stroke();
}

function clearCanvas()
{
  currentX = 0;
  currentY = 0;
  previousX = 0;
  previousY = 0;
  isDrawing = false;

  context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)
}