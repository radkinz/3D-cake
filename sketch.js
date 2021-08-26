let cake_lining_texture, chocolate_texture, strawberry_texture, vanilla_texture, strawberryseed_texture;
let duck, heart, star;

function preload() {
  cake_lining_texture = loadImage('images/candycane.jpg');
  chocolate_texture = loadImage('images/chocolatecake.png');
  strawberry_texture = loadImage('images/strawberry_texture.jpg');
  vanilla_texture = loadImage('images/vanilla_texture.jpg');
  duck = loadModel('/models/duck.obj');
  heart = loadModel('/models/heart.obj');
  star = loadModel('/models/star.obj');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);

  //create strawberry topping texture
  strawberryseed_texture = createGraphics(100,100);
  strawberryseed_texture.background(255, 0, 0);
  strawberryseed_texture.stroke(200,200,0);
	for (let t = 1; t < 200; t++){
    let x = random(100);
		let y = random(100);
    strawberryseed_texture.strokeWeight(random(1, 3));
		strawberryseed_texture.point(x,y);
	}
}

function draw() {
  background(0);
  
  //set cake towards bottom of screen
  translate(0, (height/2)-200);
  
  //lights on top
  directionalLight(250, 250, 250, 0.07, 0.9, -1);
  rotateX(mouseX * 0.01)
  
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
  translate(0, -80, 0);
  noStroke();
  for (let t = 0; t < 10; t++) {
    //stem
    push();
		let angle = t * 36;
		let x1 = sin(radians(angle)) * 140; // Get the inner coords of the point on the circle using trig
		let z1 = cos(radians(angle)) * 140;
    translate(x1, 0, z1);
    colorMode(HSL);
    ambientMaterial((t/10)*360, 100, 80);
    cylinder(10, 80);
    pop();

    //wick
    colorMode(RGB);
    push();
    translate(x1, -40, z1);
    ambientMaterial(0);
    cylinder(1, 25);
    pop();

    //flame
    push();
    translate(x1, -60, z1);
		specularMaterial(random(240, 255), random(255), random(50));
		ellipsoid(random(1.5, 4), random(9, 12));
    pop();
	}
  pop();

  //add little cream babies
  push();
  translate(0, -50, 0);
  rotateY(radians(90)); //rotate to not disturb candles
  noStroke();
  for (let t = 0; t < 10; t++) {
    //cream base
    push();
		let angle = t * 36;
		let x1 = sin(radians(angle)) * 130; 
		let z1 = cos(radians(angle)) * 130;
    translate(x1, 0, z1);
    rotateX(1.57);
    torus(10, 10);
    pop();

    //cream middle
    push();
    translate(x1, -10, z1);
    rotateX(1.57);
    torus(6, 8);
    pop();

    //cream top
    push();
    translate(x1, -18, z1);
    rotateX(1.57);
    torus(3, 5);
    pop();
	}
  pop();

  //add strawberries
  push();
  translate(0, -150, 0);
  noStroke();
  for (let t = 0; t < 4; t++) {
    //berry
    push();
		let angle = t * 90;
		let x1 = sin(radians(angle)) * 75; 
		let z1 = cos(radians(angle)) * 75;
    translate(x1, 0, z1);
    texture(strawberryseed_texture);
    ellipsoid(17,20);
    pop();
	}
  pop();

  //add oreos
  push();
  translate(0, -150, 0);
  rotateY(radians(45)); //rotate to not disturb strawberries
  noStroke();
  for (let t = 0; t < 4; t++) {
    //oreo cookie
    push();
		let angle = t * 90;
		let x1 = sin(radians(angle)) * 75; 
		let z1 = cos(radians(angle)) * 75;
    translate(x1, 0, z1);
    ambientMaterial(80,60,30);
    cylinder(20,5);
    pop();

    push();
    translate(x1, -10, z1);
    ambientMaterial(80,60,30);
    cylinder(20,5);
    pop();

    //icing
    push();
    translate(x1, -5, z1);
    rotateX(1.57);
    torus(15, 4);
    pop();
	}
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

  //obj toppings
  push();
  translate(0, -220);
  rotateX(radians(180));
  noStroke();
  specularMaterial(255, 246, 161);
  model(duck);
  pop();

  //arms for heart and star sticks
  push();
  translate(130, -125);
  rotateZ(radians(45));
  noStroke();
  cylinder(6, 200);
  pop();

  push();
  translate(-130, -125);
  rotateZ(radians(-45));
  noStroke();
  cylinder(6, 200);
  pop();

  //heart model
  push();
  translate(-170, -165);
  rotateX(radians(90));
  rotateY(radians(-45));
  noStroke();
  specularMaterial(255, 0, 0);
  model(heart);
  pop();

  push();
  translate(170, -165);
  rotateX(radians(90));
  rotateY(radians(45));
  noStroke();
  specularMaterial(255, 0, 0);
  model(heart);
  pop();

  //add star topping arms + star
  push();
  translate(80, -225);
  rotateZ(radians(45));
  noStroke();
  cylinder(3, 120);
  pop();

  push();
  translate(-80, -225);
  rotateZ(radians(-45));
  noStroke();
  cylinder(3, 120);
  pop();

  push();
  translate(-120, -290);
  rotateX(radians(-90));
  noStroke();
  specularMaterial(0, 0, 255);
  model(star);
  pop();

  push();
  translate(120, -290);
  rotateX(radians(-90));
  noStroke();
  specularMaterial(0, 0, 255);
  model(star);
  pop();
}