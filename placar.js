let meusPontos = 0;
let pontosOponente = 0;


function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(18);
  fill(color(255, 170, 0))
  rect(180, 10, 40, 20);
  fill(255); 
  text(meusPontos, 200, 26);
  fill(color(255, 170, 0))
  rect(380, 10, 40, 20);
  fill(255);
  text(pontosOponente, 400, 26);
}

function marcaPonto(){
  if(xBolinha>590 && yBolinha>139 && yBolinha<261){
    meusPontos += 1;
    ponto.play();
    xBolinha = 300;
    yBolinha = 200;
  }
   if(xBolinha<10  && yBolinha>139 && yBolinha<261){
    pontosOponente += 1;
    ponto.play();
    xBolinha = 300;
    yBolinha = 200;
  }
}