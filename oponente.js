function moveRaqueteOponente(){
  if(keyIsDown(87)){
    yRaquetes[2] -= 10;
    yRaquetes[3] -= 10;
  }
  if(keyIsDown(83)){
    yRaquetes[2] += 10;
    yRaquetes[3] += 10;   
  }
}  