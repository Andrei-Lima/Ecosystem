const sim = document.getElementById("sim");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const GRID = 10;

simulation = false;

// Buttons
sim.onclick = () => {
  simulation = !simulation;
  console.log(simulation);
}

// Isopod button
document.getElementById("btn1").onclick = () => {
  for(let i=0; i<1; i++) {
    new_entity(
      1, Math.floor(Math.random()*(canvas.width/GRID)), 
      Math.floor(Math.random()*(canvas.height/GRID))
    );
  }
}

// World creation
let board = [];

for(let bx=0; bx<canvas.width/GRID; bx++) {
  for(let by=0; by<canvas.height/GRID; by++) {
    board.push(
      {
        id: 2,
        x: bx,
        y: by,
        color: "#4db951",
      }
    );
  }
}


for(var i=0; i<20; i++) {
  var x = Math.floor(Math.random()*(canvas.width/GRID));
  var y = Math.floor(Math.random()*(canvas.height/GRID));
  new_entity(0, x, y);
}

for(var iso=0; iso<10; iso++) {
  new_entity(1, random(canvas.width/GRID), random(canvas.height/GRID));
}


window.onload = () => {
  setInterval(draw, 100);
}

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  
  // Draw instances
  for(var p=0; p<board.length; p++) {
    switch(board[p].id) {
      case board[p].id:
          ctx.fillStyle = board[p].color;
          ctx.fillRect(board[p].x*GRID, board[p].y*GRID, GRID, GRID);
          break;
    }
  }

  // Simulation on
  if(simulation) {
    for(let i=0; i<board.length; i++) {
      switch(board[i].id) {
        case 0:
          
          break;
        case 1:
          let moveX = Math.floor(Math.random()*3)-1;
          let moveY = Math.floor(Math.random()*3)-1;

          board[i].x += moveX;
          board[i].y += moveY;
          break;
      }
    }
  }
}

function new_entity(_id, _x, _y) {
  var _color;

  switch(_id) {
    case 0:         // Plant
      _color = "red";
      break;
    case 1:         // Isopod
      _color = "gray";
      break;
    case 2:         // Grass
      _color = "green";
      break;
  }
  
  board.push({
    id: _id,
    x: _x,
    y: _y,
    color: _color,
  });
}

function random(n) {
  return Math.floor(Math.random()*n);
}