export const sketch = p => {
  let rotation = 0;

  p.setup = () => {
    p.createCanvas(600, 400, p.WEBGL);
  };

  p.redraw = props => {
    if (props.rotation) {
      rotation = props.rotation * (Math.PI / 180);
    }
  };

  p.draw = () => {
    p.background(100);
    p.noStroke();
    p.push();
    p.rotateY(rotation);
    p.box(100);
    p.pop();
  };
};
