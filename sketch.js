let shahrukh_img;
let capture;
let posenet;
let singlepose,skeleton;
let noseX,noseY;
let reyeX,reyeY;
let leyeX,leyeY;
let specs,cigar;

function setup() {
    createCanvas(800,600);
    shahrukh_img=loadImage(('images/shahrukh.jpg'))
    capture=createCapture(VIDEO);
    capture.hide();
    posenet=ml5.poseNet(capture,modelLoaded);
    posenet.on('pose',receivedPoses);
    specs=loadImage('images/specs.png');
    cigar=loadImage('images/cigar.jpg')
}

function receivedPoses(poses){

if (poses.length>0){
    console.log(poses);
    singlepose=poses[0].pose;
    skeleton=poses[0].skeleton;
    
}


}

function modelLoaded(){

    console.log('Model has loaded');
}

function draw(){
   image(capture,0,0)
    fill (255,0,0)
   if (singlepose){
   
    for (let i=0 ;i<singlepose.keypoints.length;i++) {
    ellipse(singlepose.keypoints[i].position.x, singlepose.keypoints[i].position.y, 20, 20);
    }
stroke(255,255,255);
strokeWeight(5);
    for(j=0;j<skeleton.length;j++){

        line(skeleton[j][0].position.x,skeleton[j][0].position.y,skeleton[j][1].position.x,skeleton[j][1].position.y)
    }
    
}


}