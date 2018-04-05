function setup() {
  createCanvas(1000,1000);
  mic = new p5.AudioIn();
  mic.start();

}

function draw() {
 background(255);
	micLevel = mic.getLevel();
	adjustedMicLevel = micLevel * 4000;
	adjustedMicLevel2 = micLevel * 3400;
	adjustedMicLevel3 = micLevel * 3000;
	adjustedMicLevel4 = micLevel * 2600;
	adjustedMicLevel5 = micLevel * 2200;
	adjustedMicLevel6 = micLevel * 1800;
	adjustedMicLevel7 = micLevel * 1400;
	fill(37,76,168);
	ellipse(500,500, adjustedMicLevel,adjustedMicLevel);
	fill(72,121,201);
	ellipse(500,500,adjustedMicLevel2,adjustedMicLevel2);
	fill(12,164,232);
	ellipse(500,500,adjustedMicLevel3,adjustedMicLevel3);
	fill(154,182,226);
	ellipse(500,500,adjustedMicLevel4,adjustedMicLevel4);
	fill(154,206,226);
	ellipse(500,500,	adjustedMicLevel5,	adjustedMicLevel5);
	fill(105,201,239);
	ellipse(500,500,	adjustedMicLevel6,	adjustedMicLevel6);
	fill(179,231,252);
	ellipse(500,500,adjustedMicLevel7,adjustedMicLevel7);
	noStroke();
	
	
}