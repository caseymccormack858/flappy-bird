
//board will acess canvas tag
let board;
let boardWidth = 360;
let boardHeight = 640;
let context;

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d"); //used for drawing on the board
}