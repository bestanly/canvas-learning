const $canvas = document.getElementById("myCanvas");
const ctx = $canvas.getContext("2d");

//red square
// ctx.beginPath();
// ctx.rect(40, 40, 50, 50);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();

// //circle
// ctx.beginPath();
// ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
// ctx.fillStyle = "green";
// ctx.fill();
// ctx.closePath();

// //empty rectangle
// ctx.beginPath();
// ctx.rect(160, 10, 100, 40);
// ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
// ctx.stroke();
// ctx.closePath();

let x = $canvas.width / 2;
let y = $canvas.height - 30;
let dx = 2;
let dy = -2;
let ballRadius = 10;
let color = "rgb(255, 255, 255)";

let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = ($canvas.width - paddleWidth) / 2;

const drawBall = () => {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  //   console.log(color);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
};

const draw = () => {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);
  if (x + dx < ballRadius || x + dx > $canvas.width - ballRadius) {
    dx = -dx;
    color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}
    )`;
  }
  if (y + dy < ballRadius || y + dy > $canvas.height - ballRadius) {
    dy = -dy;
    color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}
    )`;
  }

  drawBall();

  x += dx;
  y += dy;
};

setInterval(draw, 10);
