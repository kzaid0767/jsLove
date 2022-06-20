// putting async infront of a function declaration makes a promise being returned
async function greet() {
    return 'Hello'
}

greet().then((val) => {
    console.log('Promised resolved with ' + val)
})

// throwing and exception when promise might not be resolved

//No async add function made to return promise
/* function add(a, b) {
   return new Promise ((resolve, reject)=>{
       if (typeof (a) !== 'number' || typeof (b) !=='number') {
       reject('a and b must be numbers') 
   }
   resolve(a+b)
   })
} */
async function add(a, b) {
    if (typeof (a) !== 'number' || typeof (b) !== 'number') {
        throw 'a and b must be numbers'
    }
    return (a + b)
}
/* add(5, 11)
    .then((val) => {
        alert(`Promised resolved with ${val}`)
    }).catch((err) => {
        alert(`${err}`)
    }) */

// Make JS wait for promise in async function using await
async function getPlanet() {
    const res = await axios.get('https://swapi.dev/api/planets/')
    console.log(res.data.results)
}

//getPlanet()

//Error Handling in async functions
// can chain .catch()

async function getThem() {
    try {
        const res = await axios.get('https://swapi.devvv/api/planets/')
    console.log(res.data.results)
    } catch (error) {
        console.log(error)
    }
    
}

//getThem()

// Multiple awaits in async functions MoveX modified

const btn = document.querySelector('#btn')

 const moveX = (element, amount, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bodyBoundary = document.body.clientWidth
            const elRight = element.getBoundingClientRect().right
            const currLeft = element.getBoundingClientRect().left
            
            if (elRight + amount > bodyBoundary) {
                reject({bodyBoundary, elRight, amount})
            } else {
                element.style.transform = `translateX(${currLeft + amount}px)`
                resolve()
            }
        }, delay);
    })

}

async function animateRight(el, amnt) {
    await moveX(el, amnt, 1000)
    await moveX(el, amnt, 1000)
    await moveX(el, amnt, 1000)
    await moveX(el, amnt, 1000)
    await moveX(el, amnt, 1000)
    await moveX(el, amnt, 1000)
    await moveX(el, amnt, 1000)
    await moveX(el, amnt, 1000)
    await moveX(el, amnt, 1000)
    await moveX(el, amnt, 1000)
    
}
animateRight(btn,100).catch((err)=>{
    alert('done moving')
    animateRight(btn,-100)
})
/*moveX(btn, 300, 1000)
.then(() => {
    return moveX(btn,300,1000)
})
.then(() => {
    return moveX(btn,300,1000)
})
.then(() => {
    return moveX(btn,300,1000)
})
.then(()=>{
    console.log('Done with both')
})
.catch(({bodyBoundary,elRight, amount})=>{
   alert(`Window is ${bodyBoundary}px wide \n
Button is at ${elRight}px, ${amount}px is too large`)
}) */