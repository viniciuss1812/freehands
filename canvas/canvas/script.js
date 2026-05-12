const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const drawingArea = document.querySelector(".drawing-area");

// Ajustar tamanho do canvas
function resizeCanvas(){
  canvas.width = drawingArea.clientWidth;
  canvas.height = drawingArea.clientHeight;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

// Variáveis
let painting = false;
let currentColor = "black";
let brushSize = 5;
let erasing = false;

// Começar desenho
function startPosition(e){
  painting = true;
  draw(e);
}

// Parar desenho
function endPosition(){
  painting = false;
  ctx.beginPath();
}

// Desenhar
function draw(e){

  if(!painting) return;

  ctx.lineWidth = brushSize;
  ctx.lineCap = "round";

  ctx.strokeStyle = erasing ? "white" : currentColor;

  const rect = canvas.getBoundingClientRect();

  ctx.lineTo(
    e.clientX - rect.left,
    e.clientY - rect.top
  );

  ctx.stroke();

  ctx.beginPath();

  ctx.moveTo(
    e.clientX - rect.left,
    e.clientY - rect.top
  );
}

// Eventos do mouse
canvas.addEventListener("mousedown", startPosition);

canvas.addEventListener("mouseup", endPosition);

canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mouseleave", endPosition);

// Selecionar cor
const colors = document.querySelectorAll(".color");

colors.forEach(color => {

  color.addEventListener("click", () => {

    currentColor = color.dataset.color;

    erasing = false;
  });

});

// Botão pincel
document.getElementById("brushBtn")
.addEventListener("click", () => {

  erasing = false;

});

// Botão borracha
document.getElementById("eraserBtn")
.addEventListener("click", () => {

  erasing = true;

});

// Tamanho do pincel
document.getElementById("brushSize")
.addEventListener("input", (e) => {

  brushSize = e.target.value;

});

// Limpar tela
document.getElementById("clearCanvas")
.addEventListener("click", () => {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

});