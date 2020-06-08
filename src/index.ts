import Matter from 'matter-js';

const {Engine, Bodies, World, Render} = Matter;

// engine
const engine = Engine.create();
Engine.run(engine);

// bodies and world
const boxA = Bodies.rectangle(400, 200, 80, 80);
const boxB = Bodies.rectangle(450, 50, 80, 80);
const ground = Bodies.rectangle(400, 610, 810, 60, {isStatic: true});
World.add(engine.world, [boxA, boxB, ground]);

//render
const render = Render.create({
  element: document.body,
  engine: engine,
});
Render.run(render);
