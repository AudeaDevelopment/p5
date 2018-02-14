// declare variables
let ballX = 750;
let ballY = 300;
let ballXV = -4;
let ballYV = 1;
const rectX = 10;
let rectY = 500;
let lives = 3;

// define pong function
const pong = p => {
  // set up environment
  p.setup = () => {
    p.createCanvas(600, 600);
    p.background(0);
    p.noStroke();
    p.fill(186, 221, 173);
  };

  // draw environment, set checks and functionality for for collision, score checking, etc
  p.draw = () => {
    p.image(300, 300, 100, 100);
    p.background(255, 0, 0);
    p.setText();
    p.setShapes();
    p.bounceCheck();
    p.increment();
    p.scoreCheck();
  };

  // ball pathing
  p.increment = () => {
    ballX += ballXV;
    ballY += ballYV;
    // when ball should move in millseconds converted to seconds
    if (p.millis() % 1000 === 0) {
      ballXV *= 2;
    }
  };
  // define paddle movement based on mouse y-axis
  p.mouseMoved = () => {
    rectY = p.mouseY;
  };

  // define ball interaction
  p.ball = (x, y) => {
    p.ellipse(x - 2, y, 30, 30);
    p.ellipse(x, y, 30, 30);
  };

  // define shapes of paddle and ball
  p.setShapes = () => {
    p.rect(rectX, rectY, 20, 100);
    p.ball(ballX, ballY);
  };

  // define functionality when ball hits slider or wall
  p.sliderBounce = () => {
    if (rectY < ballY && rectY + 100 > ballY) {
      ballXV *= -1;
      lives += 1;
    }
  };
  // when ball hits a wall
  p.wallBounce = () => {
    ballXV *= -1;
  };
  // check location of ball against y axis from max to min height
  p.bounceCheck = () => {
    if (ballY < 0 || ballY > 600) {
      ballYV *= -1;
    }

    // invoke bounce off slider based on x values
    if (ballX < 40 && ballXV < 0) {
      p.sliderBounce();
    }

    // invoke bounce off slider based on x values
    if (ballX > 580 && ballXV > 0) {
      p.wallBounce();
    }
    // lose a life if the ball does not hit
    if (ballX < 0) {
      ballX = 750;
      lives -= 1;
    }
  };

  // check score
  p.scoreCheck = () => {
    // if lives = 0, stop looping application, and lose
    if (lives === 0) {
      p.noLoop();
      lives = 'YOU LOSE';
    }

    // if lives = 10, stop looping application and win
    if (lives === 10) {
      p.noLoop();
      lives = 'YOU WIN';
    }
  };

  // set text alignment
  p.setText = () => {
    p.textAlign(p.CENTER);
    p.textSize(80);
    p.text(lives, 300, 100);
  };

  // empty image invocation for image loading
  p.prepImage = () => {};
};

export default pong;
