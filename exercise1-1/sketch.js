let rawText
let parts
let font1 
function preload() {
  rawText = loadStrings('assets/imdb_labelled.txt')
  font1 = loadFont('assets/BungeeSpice-Regular.ttf')
}
function setup() {
    createCanvas(500, 400);
    parts = rawText[0].split('\t');
}
function draw() {
    background(255);
    textSize(13);
   fill(100,15,120);
    textFont(font1);
    textAlign(LEFT, TOP);
    for (let i = 0; i < parts.length; i++) {
        text(parts[i], 10, 20 + i * 15);
    }
}
function keyPressed() {
    let randomIndex = floor(random(rawText.length));
    parts = rawText[randomIndex].split('\t');
}   