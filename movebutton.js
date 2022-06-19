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

moveX(btn, 300, 1000)
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
})