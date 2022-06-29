const { Engine, Render, Runner, World, Bodies, Body, Events } = Matter

/* width and height of working canvas */
const cellsHorizontal = 10
const cellsVertical = 5
const width = window.innerWidth
const height = window.innerHeight

const unitLengthX = width / cellsHorizontal
const unitLengthY = height / cellsVertical

const engine = Engine.create()
engine.world.gravity.y = 0 /* disabling downward gravity */
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

/* Walls being created */
const walls = [
    Bodies.rectangle(width / 2, 0, width, 4, {
        isStatic: true, render: {
            fillStyle: 'red'
        }
    }),
    Bodies.rectangle(width / 2, height, width, 4, {
        isStatic: true, render: {
            fillStyle: 'red'
        }
    }),
    Bodies.rectangle(0, height / 2, 4, height, {
        isStatic: true, render: {
            fillStyle: 'red'
        }
    }),
    Bodies.rectangle(width, height / 2, 4, height, {
        isStatic: true, render: {
            fillStyle: 'red'
        }
    }),
]
World.add(world, walls)

/* Maze generation */

const shuffle = (arr) => {
    let counter = arr.length
    /* to randomize neighbor possilities */
    while (counter > 0) {
        const index = Math.floor(Math.random() * counter)
        counter--
        const temp = arr[counter]
        arr[counter] = arr[index]
        arr[index] = temp

    }

    return arr

}

const grid = Array(cellsVertical).fill(null).map(() => Array(cellsHorizontal).fill(false))

const verticals = Array(cellsVertical).fill(null).map(() => Array(cellsHorizontal - 1).fill(false))

const horizontals = Array(cellsVertical - 1).fill(null).map(() => Array(cellsHorizontal).fill(false))

const startRow = Math.floor(Math.random() * cellsVertical)
const startColumn = Math.floor(Math.random() * cellsHorizontal)

const moveThroughCells = (row, column) => {
    /* if cell at [row,col] in grid is visited then return */
    if (grid[row][column]) {
        return
    }

    /* mark cell as visited ie True*/
    grid[row][column] = true
    /* Assemble random order list of neighbors , up, right, down , left*/
    const neighbors = shuffle([
        [row - 1, column, 'up'],
        [row, column + 1, 'right'],
        [row + 1, column, 'down'],
        [row, column - 1, 'left']

    ])


    /* For each neighbor */
    for (let neighbor of neighbors) {
        const [nextRow, nextColumn, direction] = neighbor
        /* see if  that neighbor is out of bounds */
        if (nextRow < 0 || nextRow >= cellsVertical || nextColumn < 0 || nextColumn >= cellsHorizontal) {
            continue
        }
        /* see if that is visited then go next neighbor */
        if (grid[nextRow][nextColumn]) {
            continue
        }
        /* remove wall from horizontal/vertical wall */
        if (direction === 'left') {
            verticals[row][column - 1] = true
        } else if (direction === 'right') {
            verticals[row][column] = true
        } else if (direction === 'up') {
            horizontals[row - 1][column] = true
        } else if (direction === 'down') {
            horizontals[row][column] = true
        }

        moveThroughCells(nextRow, nextColumn)

    }
    /* visit that next cell */

}

moveThroughCells(startRow, startColumn)

horizontals.forEach((row, rowIndex) => { /* each element of horizontals is an array */
    row.forEach((open, columnIndex) => {
        if (open) {
            return
        }
        const wall = Bodies.rectangle(
            columnIndex * unitLengthX + unitLengthX / 2,
            rowIndex * unitLengthY + unitLengthY / 2,
            unitLengthX,
            4, {
            label: 'wall',
            isStatic: true,
            render: {
                fillStyle: 'purple'
            }
        }
        )
        World.add(world, wall)
    })
})

verticals.forEach((row, rowIndex) => { /* each element of verticals is an array */
    row.forEach((open, columnIndex) => {
        if (open) {
            return
        }
        const wall = Bodies.rectangle(
            columnIndex * unitLengthX + unitLengthX,
            rowIndex * unitLengthY + unitLengthY / 2,
            4,
            unitLengthY, {
            label: 'wall',
            isStatic: true,
            render: {
                fillStyle: 'cyan'
            }
        }
        )
        World.add(world, wall)
    })
})

/* Creating end goal */
const goal = Bodies.rectangle(
    width - unitLengthX / 2,
    height - unitLengthY / 2,
    unitLengthX * 0.5,
    unitLengthY * 0.5,
    {
        label: 'goal',
        isStatic: true,
        render: {
            fillStyle: 'limegreen'
        }
    }
)

World.add(world, goal)

/* Creating ball */
const ballRadius = Math.min(unitLengthX, unitLengthY) * 0.2
const ball = Bodies.circle(
    unitLengthX / 2,
    unitLengthY / 2,
    ballRadius,
    {
        label: 'ball',
        render: {
            fillStyle: 'white'
        }
    }
)

World.add(world, ball)

document.addEventListener('keydown', event => {
    const { x, y } = ball.velocity

    if (event.key === 'ArrowUp') {
        Body.setVelocity(ball, { x, y: y - 5 })
    }
    if (event.key === 'ArrowDown') {
        Body.setVelocity(ball, { x, y: y + 5 })
    }
    if (event.key === 'ArrowRight') {
        Body.setVelocity(ball, { x: x + 5, y })
    }
    if (event.key === 'ArrowLeft') {
        Body.setVelocity(ball, { x: x - 5, y })
    }
})

/* win condition */
Events.on(engine, 'collisionStart', event => {
    event.pairs.forEach((collision) => {
        const labels = ['ball', 'goal']
        if (labels.includes(collision.bodyA.label) && labels.includes(collision.bodyB.label)) {
            document.querySelector('.winner').classList.remove('hidden')
            world.gravity.y = 1
            world.bodies.forEach(body => {
                if (body.label === 'wall') {
                    Body.setStatic(body, false)
                }
            })
        }
    })
})

const button = document.querySelector('#reload')
button.addEventListener('click', () => {
    location.reload()
})
