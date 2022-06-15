const btnSubmit = document.querySelector('#submit')

btnSubmit.addEventListener('mouseover', function () {
    btnSubmit.style.color = 'red'
    btnSubmit.style.background = 'yellow'

})

const anotheImg = document.createElement('img')
anotheImg.src = 'https://picsum.photos/200/300.webp'
document.querySelector('div.twoPics').appendChild(anotheImg)

setInterval(() => {
    const x = Math.floor(document.body.clientWidth * Math.random())
    const y = Math.floor(document.body.clientHeight * Math.random())

    anotheImg.style.transform = `translate( ${x}px,${y}px)`
}, 3000)
anotheImg.style.transition = 'all 3s'

// Selecting
//By id
const para1 = document.getElementById('para1')
para1.addEventListener('mouseover', function () {

    this.innerText = 'Why did you hover over me ghhhrrrhh'
    this.style.color = 'pink'
})
para1.addEventListener('mouseout', function () {
    this.style.color = 'green'
})

//by tag =>can brin more than 1
document.getElementsByName
document.getElementsByTagName //return an array like object
document.getElementsByClassName
//ul.getElementsByClassName

//no functionality in getElementById

//querySelector
//Use CSS selector
document.querySelector // returns first match
document.querySelectorAll // returns NodeList of all matches
//NodeList another array like object

//Manipulate some Common Methods
/* classList, getAttribute() setAttribute() appendChild() append() prepend()
removeChild() remove() createElement innerText textContent innerHTML value parentElement
chidlren nextSibling previousSibling style*/

const h1 = document.querySelector('h1')
alert(h1.innerText)

// .textContent shows all text even what may not be visible on the html
// .innerHTML returns string of everything between opening and closing tags

// Just attributes here
//.value, .placeholder. .href

// getAttribute
const maxRAnge = document.querySelector('input[type="range"]')
maxRAnge.getAttribute('max')
maxRAnge.setAttribute('max', 200)

// if wanna affect multiple things, select them and loop over them to make changes
// style properties in JS are camel case

// Here changing styles of all li's : these work as inline styles
/*const allLis =  document.querySelectorAll('li')
const liColors = ['pink', 'orange', 'teal', 'maroon']
for (let i=0; i<allLis.length; i++) {
    allLis[i].style.color = liColors[i]
    allLis[i].innerText = liColors[i]

} */

//getComputedStyle returns object with current style values


//addin and removing class using classList
const todo = document.querySelector('.todo')
todo.classList.toggle('done')

//Create and append element
const h3 = document.createElement('h3')
h3.innerText = 'This was added later'
document.querySelector('div').insertAdjacentElement('beforeend',h3) 
//appendChild makes appended last child

//append() and preprend() insert multiple items at the end and beginning

// insertBefore
const anothLI = document.createElement('li')
anothLI.innerText = 'Do not Mow'
const prntUl = document.querySelector('ul')
prntUl.insertBefore(anothLI, prntUl.firstChild)

//remove() and removeChild()
//ex h3.removeChild(removedOne)  need to select parent node

//h1.remove()