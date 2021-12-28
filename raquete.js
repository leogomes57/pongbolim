let xRaquetes = [90, 370, 500, 220];
let yRaquetes = [150, 150, 150, 150];
let larguraRaquete = 10;
let alturaRaquete = 90;
let colidiu = false;

function mostraRaquete(){
  for(let i = 0; i < xRaquetes.length; i++){
    if(i<2){
     fill(255,0,255);
    }else{
     fill(0,0,255);
    }
    rect(xRaquetes[i], yRaquetes[i], larguraRaquete, alturaRaquete);
  }
}

function moveMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquetes[0] -= 10;
    yRaquetes[1] -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquetes[0] += 10;
    yRaquetes[1] += 10;   
  }
}  

function verificaColisaoRaquete() {
  for(let i = 0; i < xRaquetes.length; i++){
    colidiu = collideRectCircle(xRaquetes[i], yRaquetes[i], larguraRaquete, alturaRaquete, xBolinha, yBolinha, raio);
    if (colidiu){
      velocidadeXBolinha *= -1;
      raquetada.play();
     }  
  }
    
}