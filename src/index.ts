import Matter from 'matter-js';

import boxImg from './box.png';

const {Engine, Bodies, World, Render} = Matter;

// engine
const engine = Engine.create();
Engine.run(engine);

// bodies and world
const boxA = Bodies.rectangle(400, 200, 80, 80, {
  render: {
    sprite: {
      texture: boxImg,
      xScale: 1.2,
      yScale: 1.2,
    },
  },
});
const boxB = Bodies.rectangle(400, 50, 80, 80, {
  render: {
    sprite: {
      texture: boxImg,
      xScale: 1.2,
      yScale: 1.2,
    },
  },
});
const ground = Bodies.rectangle(400, 610, 810, 60, {isStatic: true});
World.add(engine.world, [boxA, boxB, ground]);

//render
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: false,
  },
});
Render.run(render);
