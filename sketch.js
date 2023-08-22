var pac;
function preload() {
    pc = loadAnimation("pc1.png", "pc2.png");
}

function setup() {
    createCanvas(800, 400);
    pac = createSprite(200, 200);
    pac.addAnimation("pc", pc);
    pac.scale = 0.7;
    parede1 = createSprite(400, 50, 700, 3);
    parede1.shapeColor = "blue";
}

function draw() {
    background("black");
    drawSprites();
}
