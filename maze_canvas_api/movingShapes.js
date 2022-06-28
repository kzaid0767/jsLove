const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse } = Matter

/* width and height of working canvas */
const width = 800
const height = 600

const engine = Engine.create()
const { world } = engine
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        wireframes: false,
        width,
        height
    }
})
Render.run(render)
Runner.run(Runner.create(), engine)

/* To make mouse movable */
World.add(world, MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas)
}))

/* Walls being created */
const walls = [
    Bodies.rectangle(400, 0, 800, 40, { isStatic: true }),
    Bodies.rectangle(400, 600, 800, 40, { isStatic: true }),
    Bodies.rectangle(0, 300, 40, 600, { isStatic: true }),
    Bodies.rectangle(800, 300, 40, 600, { isStatic: true }),
    Bodies.circle(400, 300, 40, { isStatic: false }),

]
World.add(world, walls)

/* create randomly placed multiple shapes adding them to the world */
for (let i = 0; i < 20; i++) {
    if (Math.random() > 0.5) {
        World.add(world, Bodies.rectangle(Math.random() * width, Math.random() * height, 50, 60))
    } else {
        World.add(world, Bodies.circle(Math.random() * width, Math.random() * height, 55, {
            render: {
                fillStyle: 'gold'
            }
        }))
    }
}
