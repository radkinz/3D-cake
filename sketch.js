let cake_lining_texture, chocolate_texture, strawberry_texture, vanilla_texture;

function preload() {
  cake_lining_texture = loadImage('images/candycane.jpg');
  chocolate_texture = loadImage('images/chocolatecake.png');
  strawberry_texture = loadImage('images/strawberry_texture.jpg');
  vanilla_texture = loadImage('images/vanilla_texture.jpg');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
}

function draw() {
  background(0);
  
  //set cake towards bottom of screen
  translate(0, (height/2)-200);
  
  //lights on top
  directionalLight(250, 250, 250, 0.07, 0.9, -1);
  
  //cake base layer
  push();
  noStroke();
  translate(0, 30);
  ambientMaterial(160,82,45);
  cylinder(160, 35);
  pop();

  push();
  noStroke();
  translate(0, -30);
  ambientMaterial(160,82,45);
  cylinder(160, 35);
  pop();

  push();
  noStroke();
  ambientMaterial(60,19,33);
  texture(chocolate_texture)
  cylinder(160, 30);
  pop();
  
  //cake second layer
  push();
  noStroke();
  translate(0, -70);
  ambientMaterial(160,82,45);
  cylinder(100, 35);
  pop();

  push();
  noStroke();
  translate(0, -130);
  ambientMaterial(160,82,45);
  cylinder(100, 35);
  pop();

  push();
  noStroke();
  translate(0, -100);
  ambientMaterial(255, 243, 196);
  texture(vanilla_texture);
  cylinder(100, 30);
  pop();
  
  //cake top layer
  push();
  noStroke();
  translate(0, -210);
  rotateY(frameCount * 0.01);
  ambientMaterial(160,82,45);
  cylinder(50, 30);
  pop();

  push();
  noStroke();
  translate(0, -160);
  rotateY(frameCount * 0.01);
  ambientMaterial(160,82,45);
  cylinder(50, 30);
  pop();

  push();
  noStroke();
  translate(0, -185);
  ambientMaterial(255, 196, 226);
  texture(strawberry_texture);
  cylinder(50, 20);
  pop();
  
  //cake candles
  push();
  noStroke();
  translate(0, -80, 135);
  rotateY(frameCount * 0.01);
  cylinder(10, 80);
  pop();
  
  push();
  noStroke();
  translate(80, -80, 105);
  rotateY(frameCount * 0.01);
  cylinder(10, 80);
  pop();
    
  push();
  noStroke();
  translate(-80, -80, 105);
  rotateY(frameCount * 0.01);
  cylinder(10, 80);
  pop();
  
  push();
  noStroke();
  translate(120, -80, 10);
  rotateY(frameCount * 0.01);
  cylinder(10, 80);
  pop();
  
  push();
  noStroke();
  translate(-120, -80, 10);
  rotateY(frameCount * 0.01);
  cylinder(10, 80);
  pop();

  //cake flames
  push();
  noStroke();
  translate(0, -135, 135);
  rotateY(frameCount * 0.01);
  specularMaterial(255, 153, 10);
  ellipsoid(8, 12, 8);
  pop();

  push();
  noStroke();
  translate(80, -135, 105);
  rotateY(frameCount * 0.01);
  specularMaterial(255, 153, 10);
  ellipsoid(8, 12, 8);
  pop();

  push();
  noStroke();
  translate(-80, -135, 105);
  rotateY(frameCount * 0.01);
  specularMaterial(255, 153, 10);
  ellipsoid(8, 12, 8);
  pop();
  
  push();
  noStroke();
  translate(120, -135, 10);
  rotateY(frameCount * 0.01);
  specularMaterial(255, 153, 10);
  ellipsoid(8, 12, 8);
  pop();
  
  push();
  noStroke();
  translate(-120, -135, 10);
  rotateY(frameCount * 0.01);
  specularMaterial(255, 153, 10);
  ellipsoid(8, 12, 8);
  pop();

  //cake lining
  push();
  noStroke();
  translate(0, 45);
  rotateX(1.57);
  texture(cake_lining_texture);
  torus(160, 7);
  pop();

  push();
  noStroke();
  translate(0, -45);
  rotateX(1.57);
  texture(cake_lining_texture);
  torus(160, 7);
  pop();

  push();
  noStroke();
  translate(0, -145);
  rotateX(1.57);
  texture(cake_lining_texture);
  torus(99, 5);
  pop();

  push();
  noStroke();
  translate(0, -55);
  rotateX(1.57);
  texture(cake_lining_texture);
  torus(100, 7);
  pop();
  
  push();
  noStroke();
  translate(0, -155);
  rotateX(1.57);
  texture(cake_lining_texture);
  torus(50, 5);
  pop();

  push();
  noStroke();
  translate(0, -215);
  rotateX(1.57);
  texture(cake_lining_texture);
  torus(50, 5);
  pop();
}