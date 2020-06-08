import Matter from 'matter-js';

// module aliases
const Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

// create an engine
const engine = Engine.create();

// create a renderer
const render = Render.create({
  element: document.body,
  engine: engine,
});

// create two boxes and a ground
const boxA = Bodies.rectangle(400, 200, 80, 80);
const boxB = Bodies.rectangle(450, 50, 80, 80);
const ground = Bodies.rectangle(400, 610, 810, 60, {isStatic: true});

// add all of the bodies to the world
World.add(engine.world, [boxA, boxB, ground]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
