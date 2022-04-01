const canvas = document.getElementById('matrix-canvas');
const canvasContext = canvas.getContext('2d');

canvas.width = document.body.offsetWidth;
canvas.height = document.body.offsetHeight;

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

canvasContext.fillStyle = '#000000';
canvasContext.fillRect(0, 0, canvasWidth, canvasHeight);

const columnsNumber = Math.floor(canvasWidth / 20) + 1;
const columns = Array(columnsNumber).fill(0);

function matrix () {
    canvasContext.fillStyle = '#0001';
    canvasContext.fillRect(0, 0, canvasWidth, canvasHeight);
  
    canvasContext.fillStyle = '#0f0';
    canvasContext.font = '15pt monospace';

    columns.forEach((y, index) => {
      const char = String.fromCharCode(Math.random() * 128);
  
      const x = index * 20;

      canvasContext.fillText(char, x, y);
  
      if (y > 100 + Math.random() * 100000) {
        columns[index] = 0;
      } else {
        columns[index] = y + 20
      }
    });
}

setInterval(matrix, 25);

