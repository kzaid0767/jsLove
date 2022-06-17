const player = document.querySelector('#player')
const coin = document.querySelector('#coin')
const restarting = document.querySelector('#restartButton')
const gameBody = document.querySelector('body')
const scoreBoard = document.querySelector('#score')
scoreBoard.value = 0
function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}



window.addEventListener('keyup', function (e) {
	if (e.key === 'ArrowDown' || e.key === 'Down') {
		const currTop = playerPosition(player.style.top)
		player.style.top = `${currTop + 50}px`
	}
	else if (e.key === 'ArrowUp' || e.key === 'Up') {
		const currTop = playerPosition(player.style.top)
		player.style.top = `${currTop - 50}px`
	}
	else if (e.key === 'ArrowRight' || e.key === 'Right') {
		const currLeft = playerPosition(player.style.left)
		player.style.transform = 'scale(1,1)' 				//keep facing right
		player.style.left = `${currLeft + 50}px`
	}
	else if (e.key === 'ArrowLeft' || e.key === 'Left') {
		const currLeft = playerPosition(player.style.left)
		player.style.transform = 'scale(-1,1)'  			//flip payer to face left on x-axis
		player.style.left = `${currLeft - 50}px`
	}

	if (isTouching(player, coin)) {
		moveCoin()
		addScore()
	}
})

restarting.addEventListener('click', function () {
	scoreBoard.value = 0
	player.style.left = '400px'
	player.style.top = '300px'
})

const playerPosition = (pos) => {
	if (!pos) return 100;
	return parseInt(pos.slice(0, -2))
}

const moveCoin = () => {
	const x = Math.floor(Math.random() * window.innerWidth)
	const y = Math.floor(Math.random() * window.innerHeight)
	coin.style.top = `${y}px`
	coin.style.left = `${x}px`
}

const addScore = () => {
	let score = parseInt(scoreBoard.value)
	score = score + 100
	scoreBoard.value = score
}

moveCoin();
gameBody.style.backgroundColor('red')