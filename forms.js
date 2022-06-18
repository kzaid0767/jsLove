const form = document.querySelector('#aForm')
const creditCard = document.querySelector('#creditCard')
const checkBox = document.querySelector('#checkBox')
const select = document.querySelector('#select')

//submit event type
form.addEventListener('submit', function (e) {
    alert(`${creditCard.value}, ${checkBox.checked}, ${select.value}`)
    e.preventDefault()                          //prevent sending request
})

// realtime capture changes with input event

const formData = {}
// creditCard.addEventListener('input', (e) =>{
//     formData['cc'] = e.target.value
    
// })
// checkBox.addEventListener('input', (e) =>{
//     formData['checkBox'] = e.target.checked
// })
// select.addEventListener('input', (e) =>{
//     formData['select'] = e.target.value
// })

for (let input of [creditCard,checkBox,select]) {
    input.addEventListener('input', ({target}) => {         //'change' can be used here in place of input
        const {name, type,value, checked} = target
        formData[name]=type==='checkbox' ? checked: value
    })
}
