var lintu;
var tolpat = [];
var dead;
var kuva1;
var kuva2;
var kukko;
var kuollu = 0;


let start;
function preload() {
  dead = loadImage('https://raw.githubusercontent.com/DUrttu/FLAPPY/master/taustaa.png');
  kuva1 = loadImage('https://raw.githubusercontent.com/DUrttu/FLAPPY/master/kalakukko1.png');
  kuva2 = loadImage('https://raw.githubusercontent.com/DUrttu/FLAPPY/master/kalakukko2.png');
  start = loadImage('https://raw.githubusercontent.com/DUrttu/FLAPPY/master/Imported%20piskel.png?token=AuprPXfdKIS7SvfvdA_pPTi6Y1cPrFmNks5cn8REwA%3D%3D');
}


function setup() {
  var cnv = createCanvas(600, 770)
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  lintu = new Lintu();
  tolpat.push(new Tolppa());
}

function draw() {
  background(62, 194, 204);
  lintu.show();
  lintu.update();
  imageMode(CENTER);

  if (frameCount % 150 == 0) {
    tolpat.push(new Tolppa());
  }

  for (var i = tolpat.length-1; i >= 0; i--) {
    if (tolpat[i].hits(lintu)) {
      kuollu = 1;
      lintu.gravity = 0;
      lintu.velocity = 0;
      tolpat[i].xspeed = 0;
      clear();
      image(dead, width/2, height/2);
    }else

  tolpat[i].show();
  tolpat[i].update();
}


  if (lintu.y > 770 ) {
    clear();
    image(dead, width/2, height/2);
  }
}


function keyPressed() {
  if (kuollu < 1 && key == ' '){
    lintu.gravity = 0.4;
    lintu.ylös();
  }
}
