function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump_=loadSound("jump.wav");
	mario_coin_=loadSound("coin.wav");
	mario_kick_=loadSound("kick.wav");
	mario_game_over_=loadSound("gameover.wav");
	mario_die_=loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent("gameconsole");
	posenet=ml5.poseNet(video,modaloaded);
	posenet.on("pose",getposes);
}

function modaloaded(){
console.log("modal is loaded");
}

function getposes(results){
if(results.length>0){
	console.log(results);
	noseX=results[0].pose.nose.x;
	noseY=results[0].pose.nose.y;
}
}

function draw() {
	game()
}