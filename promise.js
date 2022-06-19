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

/*const willFinishCourse = () => {
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
})*/

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pages = {
                '/users': [
                    { id: 1, username: 'Kilo' },
                    { id: 2, username: 'Lilo' }
                ],
                '/about': 'This is the about page!'
            }
            const data = pages[url]
            if (data) {
                resolve({ status: 200, data })
            }
            else {
                reject({ status: 404 })
            }

        }, 3000)
    })
}

fakeRequest('/users').then((res) => {
    alert(`${res.status} ${res.data}`)
}).catch((res) => {
    alert(`${res.status}`)
})

fakeRequest('/dogs').then((res) => {
    alert(`${res.status} ${res.data}`)
}).catch((res) => {
    alert(`${res.status}`)
})