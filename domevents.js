/* clicks, drags, drops, hovers, scrolls, form submission,
    key presses, focus/blur, mouse wheel, double, click
    copying, pasting, audio, start, screen resize, printing 
    Event Refence MDN
*/
const btn = document.querySelector('#btn1')
const btn0 = document.querySelector('#btn0')


// btn0.addEventListener('mouseover', function () {
//     const lft = Math.floor(Math.random() * window.innerWidth)
//     const rgt = Math.floor(Math.random() * window.innerHeight)
//     btn0.style.left = `${lft}px`
//     btn0.style.top = `${rgt}px`
//     btn0.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]

// })

// btn0.addEventListener('click', function () {
//     alert('You Got ME!!!')
//     window.location.reload
// })

btn.addEventListener('mouseover', function () {
    btn.innerText = 'Hey';
})

btn.addEventListener('mouseout', function () {
    btn.innerText = 'Click Me';
    document.body.style.backgroundColor = 'white';
})

btn.addEventListener('dblclick', function () {
    document.body.style.backgroundColor = 'black';
})

//Multiple events on multiple elements

const colors = ['red', 'orange', 'blue', 'green', ' yellow', 'purple', 'indigo', 'violet', 'pink', 'black']
const container = document.querySelector("#sect")
for (const color of colors) {
    const box = document.createElement('div')
    box.classList.add('box')
    box.style.backgroundColor = color
    container.append(box)
    box.addEventListener('click', () => {
        alert(`This color is ${color}`)
    })

    box.addEventListener('mouseout', () => {
        box.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    })
}

//event object

//Key Events

const input = document.querySelector('input[type="username"]')
input.addEventListener('keydown', function (e) {
    alert(`key is down`)
})

// input.addEventListener('keyup', function (e) {
//     alert(`key is up`)
// })

input.addEventListener('keypress', function (e) {       //key is for character to appear or some input change
    alert(`key is press`)
})

const addItemInput = document.querySelector('#addItem')
const itemsUl = document.querySelector("#items")

addItemInput.addEventListener('keypress', function(e){
    if (!this.value) {              // we ignoring empty values
        return
    }
    if (e.key==='Enter') {
        const newItemText = this.value
        const newItem = document.createElement('li')
        newItem.innerHTML = newItemText
        itemsUl.append(newItem)
        this.value = ''
    }
}) //adding an