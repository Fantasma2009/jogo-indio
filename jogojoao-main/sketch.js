var cacador1,cacador2,cacador3;
var navio;
var indio;
var imgdefundo;
var balacacador;
var dardo;
var cacador1img,cacador2img,cacador3img;
var navioimg;
var indioimg;
var imgdefundoimg;
var balacacadorimg;
var dardoimg;
var grupodecacadores;

function preload(){
    cacador1img=loadImage("cacador1.png");
    cacador2img=loadImage("cacador2.png");
    cacador3img=loadImage("cacador3.png");
    navioimg=loadImage("barco.png");
    dardoimg=loadImage("zarabatana.png");
    balacacadorimg=loadImage("bala.png");
    indioimg=loadImage("indio.png");
    imgdefundoimg=loadImage("background.gif");
    dardoimg=loadImage("zarabatana.png");

}

function setup(){
  createCanvas(1350,750);
  //cacador1=createSprite(1440,80,50,60);
  //cacador1.addImage(cacador1img);
  //cacador2=createSprite(1240,80,50,60);
  //cacador2.addImage(cacador2img);
  //cacador3=createSprite(1140,80,50,60);
  //cacador3.addImage(cacador3img);
    navio=createSprite(1200,500,140,100);
    navio.addImage(navioimg);
    navio.scale=2.2;
    indio=createSprite(75,400,60,40);
    indio.addImage(indioimg);
    indio.scale=0.6;
    
    grupo_de_cacadores=new Group();

}

function draw(){
background(imgdefundoimg);

if(keyDown(UP_ARROW)){

  indio.y=indio.y-4.9;

}

if(keyDown(DOWN_ARROW)){

  indio.y=indio.y+4.9;

}


if(keyDown(32)){

setTimeout(atirardardos(),1000);



}

//if(dardo.isTouching(cacador)){
  //cacador=null;



//}


spawncacadores();


drawSprites();
}

function atirardardos(){
  dardo=createSprite(indio.x+135,indio.y,20,20);
  dardo.addImage(dardoimg);
  dardo.scale=0.6;

  dardo.velocityX=dardo.velocityX+4.7;

}

function spawncacadores(){
  if(frameCount%105===0){
    var cacador=createSprite(1350,500,50,60);
    cacador.y=Math.round(random(100,500));
    cacador.velocityX=cacador.velocityX-3.9;
    var rand=Math.round(random(1,3));

    switch(rand){
      case 1:cacador.addImage(cacador1img);
      break;
      case 2:cacador.addImage(cacador2img);
      break;
      case 3:cacador.addImage(cacador3img);
      break;
    }
  }





}