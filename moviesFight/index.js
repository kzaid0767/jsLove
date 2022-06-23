const fetchData = async (searchParam) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '6910ebc2',
            s: searchParam
        }
    })

    console.log(response.data)
}

const input = document.querySelector('input')

const debounce = (func, delay = 1000) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args)
        }, delay);
    }
}
//addting setTimeOut so as to search only when user is done typing - debounce an input

const onInput = event => {
    fetchData(event.target.value)
}

input.addEventListener('input', debounce(onInput))