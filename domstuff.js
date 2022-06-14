const btnSubmit = document.querySelector('#submit')

btnSubmit.addEventListener('mouseover', function () {
    btnSubmit.style.color = 'red'
    btnSubmit.style.background = 'yellow'

})

const anotheImg = document.createElement('img')
anotheImg.src = 'https://picsum.photos/200/300.webp'
document.body.append(anotheImg)

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