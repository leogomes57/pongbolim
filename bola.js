//Bola
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raio = diametro/2;

function mostraBolinha(){
  fill(255,255,255);
  circle(xBolinha, yBolinha, diametro);
}

function moveBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}


function verificaColisao(){
  if(xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  
  if(yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}
