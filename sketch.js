
var capture;
var tracker;
var w = 800,
    h = 600;


function setup() {
    createCanvas(w, h);
    colorMode(HSB);

    //createCapture(type)
    capture = createCapture(VIDEO);
    //elt함수는 html요소 가져옴. setAttribute함수를 사용해서 요소 이름과 내용 결정.
    capture.elt.setAttribute('video', '');
    capture.size(w, h);
    capture.hide();

    tracker = new clm.tracker();
    tracker.init();
    tracker.start(capture.elt);

    var randomX = random(0, w);
    var randomY = random(0, h)
    textSize(30);
    textAlign(CENTER);
    text("Nose", randomX, randomY);
}


function draw(){
  clear();
  //얼굴이 얼마나 잘 감지되는지 0부터 1까지 점수가
  var detectionScore = tracker.getScore();
  if (detectionScore > 0) {
    // 값 가져오기
    var positions = tracker.getCurrentPosition();
    var noseX = positions[62][0];
    var noseY = positions[62][1];
    
    
    // 얼굴 display
    var d = dist(noseX, noseY, randomX, randomY)
    if(d <= 20){
      textSize(70);
      textAlign(CENTER);
      text("success", w/2, h/2);
    }
  }
}


