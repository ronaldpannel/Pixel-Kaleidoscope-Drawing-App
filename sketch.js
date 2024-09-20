let cols;
let rows;
let size = 10;
let grid = [];
let c = 0;

const saveBtn = document.getElementById("saveBtn");
const refreshBtn = document.getElementById("refreshBtn");

function setup() {
  let canvas = createCanvas(400, 400);

  canvas.parent("container");

  colorMode(HSB);
  angleMode(DEGREES);

  saveBtn.addEventListener("click", () => {
    saveImg();
  });
  refreshBtn.addEventListener("click", (e) => {
    window.location.reload();
  });

  cols = width / size;
  rows = height / size;

  for (let i = 0; i < cols; i++) {
    grid[i] = [];
    for (let j = 0; j < rows; j++) {
      grid[i][j] = color(250, 100, 50);
    }
  }
}

function saveImg() {
  save("art.png");
}

function draw() {
  background(0);
  
  stroke(0);
  if (mouseX < width && mouseX > 0 && mouseY < height && mouseY > 0) {
    if (mouseIsPressed) {
      let x = floor(mouseX / size);
      let y = floor(mouseY / size);

      let cell1 = createVector(x, y);
      let cell2 = createVector(cols - 1 - x, y);
      let cell3 = createVector(x, rows - 1 - y);
      let cell4 = createVector(cols - 1 - x, rows - 1 - y);

      grid[cell1.x][cell1.y] = c;
      grid[cell2.x][cell2.y] = c;
      grid[cell3.x][cell3.y] = c;
      grid[cell4.x][cell4.y] = c;
    }
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      fill(grid[i][j], 100, 100);
      rect(i * size, j * size, size, size);
    }
  }
  if (c < 360) {
    c += 1;
  } else {
    c = 0;
  }
}

function windowResized() {
  resizeCanvas(400, 400);
}
