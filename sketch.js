
function setup() {
  createCanvas(400,400); //draw a canvas 800 pixels wide by 800 pixels high
  image(me,0,0,400,400)
  //background(30)
  
}

let me;
function preload() {
  me = loadImage ('F9AF6734-1291-42FB-8169-1AFF231B58C3.jpeg')
}

function draw() {
  noFill()
  background(30); //set background to grey
for (let o = 15; o < width; o += 15){
    if (o % 15 === 0){
      stroke(value);
      line(o, 150, o ,height);
      line(150,o,height,o)
    } else {
      stroke(value);
      line(o,29,o,180)
    }
  }
  fill("#CE8964")
beginShape();
  vertex(25,315);
  vertex(298,378);
  vertex(297,400);
  vertex(10,400);
endShape(CLOSE)

fill('#00ff00')
noStroke()
textSize(10)
let names = ['Tan', 'Du', 'Phi']
let name = random(names)
  for (var i = 0; i < width; i += 50) 
  for (var r = 0; r < height; r += 30)
    text(name,i,r)

    
    
  fill("#CE8964")
beginShape();
  vertex(25,315);
  vertex(298,378);
  vertex(297,400);
  vertex(10,400);
endShape(CLOSE)
  
fill("#832232")
beginShape();
  vertex(400,70);
  vertex(100,0);
  vertex(400,0);
  vertex(400,40)
endShape(CLOSE);
  
fill("#370031")

beginShape();
  vertex(400,40);
  vertex(290, 400);
  vertex(400,400)
endShape(CLOSE);
  
fill("#0B0033")
beginShape();
  vertex(100,0);
  vertex(10,400);
  vertex(0,400);
  vertex(0,0)
endShape(CLOSE);
  
fill(10)
  stroke(250)
  strokeWeight(2)
beginShape();
  vertex(215,164);
  vertex(213,180);
  vertex(260,210);
  vertex(260,265);
  vertex(243,284);
  vertex(230,273);
  vertex(220,310);
  vertex(180,300);
  vertex(130,290);
  vertex(104,266);
  vertex(105,245);
  vertex(135,185);
  vertex(180,175);
  vertex(180,170);
endShape(CLOSE)


fill(255);
beginShape();
  vertex(220,305);
  vertex(220,310);
  vertex(240,355);
  vertex(255,400);
  vertex(220,400);
  vertex(180,335);
  vertex(170,335);
  vertex(150,345);
  vertex(122,338);
  vertex(130,290)
endShape(CLOSE);  
  
fill("#eaf27c")
noStroke()
beginShape();
  vertex(175,143);
  vertex(176,160);
  vertex(180,168);
  vertex(190,180);
  vertex(200,180);
  vertex(216,172);
  vertex(230,141);
  vertex(180,125);
endShape(CLOSE)

fill(250)
line(180,122,230,141)
 
beginShape();
noFill()
fill(20)
  vertex(180,127);
  vertex(187,110);
  vertex(200,104);
  vertex(220,111);
  vertex(230,120)
  vertex(231,130);
  vertex(230,141);
  vertex(180,127);
endShape(CLOSE);


fill(250)
   
beginShape();
noFill()
fill(250)
  vertex(180,125);
  vertex(230,140)
  vertex(227,150);
  vertex(177,135);
endShape(CLOSE);

  
beginShape();
  vertex(220,305);
  vertex(220,310);
  vertex(240,355);
  vertex(220,305);
  vertex(240,385);
  vertex(220,385);
endShape(CLOSE);

fill(10)
  circle(187,150,8)
  circle(210,155,8)
fill(255)
  circle(188,150,3)
  circle(211,155,3)

fill(20)
beginShape()
  vertex(188,168)
  vertex(205,170)
  vertex(202,173)
  vertex(190,173)
endShape(CLOSE)
  
beginShape()
  vertex(190,170)
  vertex(195,168)
  vertex(195,168)
  vertex(190,170)
endShape(CLOSE)

fill(255)
beginShape()
  vertex(245,220)
  vertex(240,225)
  vertex(235,240)
endShape(CLOSE)

beginShape()
  vertex(245,245)
  vertex(250,255)
  vertex(215,230)
endShape(CLOSE)

beginShape()
  vertex(260,265)
  vertex(240,275)
  vertex(205,250)
  vertex(215,245)
  vertex(215,230)
  vertex(213,230)
  vertex(213,245)
  vertex(203,250)
  vertex(203,252)
  vertex(240,280)
endShape(CLOSE)

circle(200,235,23)
ellipse(205,225,7,14)

beginShape()
  vertex(150,210)
  vertex(140,250)
  vertex(135,243)
endShape(CLOSE)
  
circle(150,290,30)  

fill(255); 
  
  text(mouseX,200,20);
  text(mouseY,20,400);

noFill()
stroke(250)
strokeWeight(1)
rect(13, 5,38,180)
  
fill(value);
noStroke()
textFont('Helvetica')

//global variables to adjust colors
var n = 20;
var m =0;
  textSize(15)
while (n <= 180){
  text('Hello',15,n)
  n = n + 20
}
fill(value)
textSize(30)
text('MY WORLD', 30,380);//Title 


}
let value = 250
function mousePressed() {
  if (value === 250) {
    value = '#832232' ;
  } else {
    value = '#CE8964';
  }
}
