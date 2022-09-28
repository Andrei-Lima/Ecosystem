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

document.getElementById("btn1").onclick = () => {
    for(let i=0; i<20; i++) {
        new_entity(1, Math.floor(Math.random()*(canvas.width/GRID)), Math.floor(Math.random()*(canvas.height/GRID)));
    }
}

// World creation
let board = [];

for(var i=0; i<20; i++) {
    var x = Math.floor(Math.random()*(canvas.width/GRID));
    var y = Math.floor(Math.random()*(canvas.height/GRID));
    new_entity(0, x, y);
}

for(var iso=0; iso<10; iso++) {
    new_entity(1, Math.floor(Math.random()*(canvas.width/GRID)), Math.floor(Math.random()*(canvas.height/GRID)));
}


window.onload = () => {
    setInterval(draw, 100);
}

function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(let i=0; i<canvas.width/GRID; i++) {
        for(let j=0; j<canvas.height/GRID; j++) {
            ctx.beginPath();
            ctx.moveTo(i*GRID, 0);
            ctx.lineTo(i*GRID, canvas.height);
            ctx.moveTo(0, j*GRID);
            ctx.lineTo(canvas.width, j*GRID);
            ctx.stroke();
        }
    }
    
    for(var p=0; p<board.length; p++) {
        switch(board[p].id) {
            case 0:
                ctx.fillStyle = board[p].color;
                ctx.fillRect(board[p].x*GRID, board[p].y*GRID, GRID, GRID);
                break;
            case 1:
                ctx.fillStyle = board[p].color;
                ctx.fillRect(board[p].x*GRID, board[p].y*GRID, GRID, GRID);
                break;
        }
    }

    if(simulation) {
        for(let i=0; i<board.length; i++) {
            switch(board[i].id) {
                case 0:
                    for(let j=0; j<board.length; j++) {
                        if(board[i].x == board[j].x && board[i].y == board[j].y) {
                            board.push([i]);
                        }
                    }
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
            _color = "green";
            break;
        case 1:         // Isopod
            _color = "gray";
            break;
    }
    
    board.push({
        id: _id,
        x: _x,
        y: _y,
        color: _color,
    });
}
