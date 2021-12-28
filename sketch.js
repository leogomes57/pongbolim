function setup() {
  createCanvas(600, 400);
  trilha.loop();
}


function draw() {
  background(0,128,0); 
  mostraBolinha();
  moveBolinha();
  verificaColisao();
  mostraGol(xGol1, yGol);
  mostraGol(xGol2, yGol);
  mostraRaquete();
  moveMinhaRaquete();
  moveRaqueteOponente();
  verificaColisaoRaquete();
  incluiPlacar();
  marcaPonto();
  criarFormasCheias();
  criarFormasOcas();
}