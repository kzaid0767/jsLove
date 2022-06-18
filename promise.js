// const willFinishCourse = new Promise((resolve, reject) => {
//     const rand = Math.random()
//     rand < 0.5 ? resolve() : reject()
// })

// willFinishCourse.then(()=>{
//     alert('the course almost done')
// }).catch(()=>{
//     alert('Gotta push on')
// })

//promise below will simulated delay and being returned by a function

const willFinishCourse = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random()
            rand < 0.5 ? resolve(): reject()
    
        }, 5000)
    })
}

willFinishCourse().then(() => {
    alert('the course almost done')
}).catch(() => {
    alert('Gotta push on')
})