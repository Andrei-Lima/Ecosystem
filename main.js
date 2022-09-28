const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const GRID = 10;

// World creation
let board = [];

for(var i=0; i<50; i++) {
    var x = Math.floor(Math.random()*(canvas.width/GRID));
    var y = Math.floor(Math.random()*(canvas.height/GRID));
    new_entity(0, x, y);
}

new_entity(1, Math.floor(Math.random()*(canvas.width/GRID), Math.floor(Math.random()*(canvas.height/GRID))));
new_entity(1, Math.floor(Math.random()*(canvas.width/GRID), Math.floor(Math.random()*(canvas.height/GRID))));

window.onload = () => {
    setInterval(draw, 100);
}

function draw() {
    for(var i=0; i<board.length; i++) {
        switch(board[i].id) {
            case 0:
                ctx.fillStyle = board[i].color;
                ctx.fillRect(board[i].x*GRID, board[i].y*GRID, GRID, GRID);
                break;
            case 1:
                ctx.fillStyle = board[i].color;
                ctx.fillRect(board[i].x*GRID, board[i].y*GRID, GRID, GRID);
                break;
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
