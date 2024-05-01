let imgs=[];
let colour, pink, tree;

function preload(){
  //img= loadImage('images/colour.jpg')
  colour= loadImage('images/colour.jpg');
  pink= loadImage('images/pink.jpg');
  tree= loadImage('images/tree.jpg');
}

function setup() {
  createCanvas(800,800);
  frameRate(1);
  //img.resize(500,0);

  colour.resize(600,0);
  pink.resize(500,500);
  tree.resize(0,600);

  imgs.push(colour);
  imgs.push(pink);
  imgs.push(tree);
}

function draw() {
  background(220);

  //image(imgs[1],0,0);
  let r= random(imgs);
  image(r,0,0);


  //colour.filter(GRAY);
  tree.filter(INVERT);

let x= random(pink.width);
let y= random(pink.height);
let c= pink.get(int(x),int(y));
fill(c);
stroke(255,10,20);
rect(x,y,30,400);
}