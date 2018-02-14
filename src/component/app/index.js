const sketch = p => {
  p.setup = () => {
    p.createCanvas(710, 400, p.WEBGL);
    p.noStroke();
  };

  p.draw = () => {
    p.background(0);

    p.pointLight(150, 100, 0, 500, 0, 200);

    p.directionalLight(0, 102, 255, -1, 0, 0);

    p.pointLight(255, 255, 255, 0, 0, 300);

    p.rotateY(p.map(p.mouseX, 0, p.width, 0, Math.PI));
    p.rotateX(p.map(p.mouseY, 0, p.height, 0, Math.PI));
    p.triangle(30, 100, 58, 20, 196, 105);
  };
};

export default sketch;
