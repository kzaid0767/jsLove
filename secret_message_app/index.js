/* selecting form and adding submit event listener and preventing default submission */
const { hash } = window.location
const message = atob(hash.replace('#', ''))

if (message) {
    document.querySelector('#message-form').classList.add('hide')
    document.querySelector('#message-show').classList.remove('hide')
    document.querySelector('h1').innerHTML = message

}

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault()

    document.querySelector('#message-form').classList.add('hide')
    document.querySelector('#message-link').classList.remove('hide')

    const input = document.querySelector('#message-input')
    const encrypted = btoa(input.value)

    const encryptedInput = document.querySelector('#link-input')
    encryptedInput.value = `${window.location}#${encrypted}`
    encryptedInput.select()
})

/*  btoa() a js function that converts a strin to base 64  and atob() does the reverse*/