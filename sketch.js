function preload() {
  // 
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(240);
  angleMode(DEGREES);
  rectMode(CENTER);
  // disegno glifi
  let numeroGlifi = 156;
  let numeroColonne = ceil(sqrt(numeroGlifi));
  let numeroRighe = ceil(numeroGlifi / numeroColonne);
  let dimColonna = windowWidth / numeroColonne;
  let dimRiga = windowHeight / numeroRighe;
  let xCorrente = 0;
  let yCorrente = 0;
  for (let g = 0; g < numeroGlifi; g++) {
    mioGlifo(xCorrente + dimColonna / 2, yCorrente + dimRiga / 2, min(dimColonna, dimRiga) * 0.5);
    xCorrente = xCorrente + dimColonna;
    if (xCorrente >= windowWidth) {
      xCorrente = 0;
      yCorrente = yCorrente + dimRiga;
    }
  }
}
function draw() {
  //
}
function mioGlifo(_x, _y, _size) {
  push();
  // Stile della famiglia
  stroke(20);
  strokeWeight(_size / 20);
  strokeCap(SQUARE);
  // posizione e rotazione, floor arrotonda per difetto
  translate(_x, _y);
  rotate(floor(random(4)) * 90);
  // asse centrale 
  line(0, -_size / 2, 0, _size / 2);
  // Bracci del glifo, il passo è la distanza tra un braccio e l'altro
  let numeroBracci = floor(random(2, 6)); // da 2 a 5
  let passo = _size / (numeroBracci + 1);
  for (let i = 0; i < numeroBracci; i++) {
    let y = -_size / 2 + passo * (i + 1);
    let lunghezza = random(_size * 0.15, _size * 0.45);
    let lato;
    if (random() < 0.5) {
      lato = 1;
    } else {
      lato = -1;
    }// destra o sinistra
    push();
    translate(0, y);
    scale(lato, 1); // specchia il braccio se lato = -1
    line(0, 0, lunghezza, 0);
    pop();
  }
  // Forme della punta: quadrato o triangolo, pieno o vuoto
  translate(0, -_size / 2);
  if (random() < 0.5) {
    fill(20);
  } else {
    noFill();
  }
  let a = _size * 0.08;
  if (random() < 0.5) {
    square(0, 0, a * 2);
  } else {
    triangle(-a, 0, a, 0, 0, -a * 1.5);
  }
  pop();
}
