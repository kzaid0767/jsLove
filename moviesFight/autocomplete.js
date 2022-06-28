const createAutoComplete = ({ root, renderOption, onOptionSelect, inputValue, fetchData }) => {
    root.innerHTML = `
        <label><b>Search </b></label>
        <input class="input" />
        <div class="dropdown">
            <div class="dropdown-menu">
                <div class="dropdown-content results">

                </div>
            </div>
        </div>
    `

    const input = root.querySelector('input')
    const dropdown = root.querySelector('.dropdown')
    const resultsWrapper = root.querySelector('.results')

    /*  addting setTimeOut so as to search only when user is done typing - debounce an input*/

    const onInput = async event => {
        const items = await fetchData(event.target.value)

        /* if nothing close dropdown and return early */
        if (!items.length) {
            dropdown.classList.remove('is-active')
            return
        }

        resultsWrapper.innerHTML = '' /* to clear anything before displaying new search results */
        dropdown.classList.add('is-active')
        for (let item of items) {
            const option = document.createElement('a')
            option.classList.add('dropdown-item')
            option.innerHTML = renderOption(item)
            option.addEventListener('click', () => {

                dropdown.classList.remove('is-active')
                input.value = inputValue(item)
                onOptionSelect(item)
            })
            resultsWrapper.appendChild(option)
        }
    }

    input.addEventListener('input', debounce(onInput))

    /* the logic to close drop if user clicks outside the dropdown */
    document.addEventListener('click', event => {
        if (!root.contains(event.target)) {
            dropdown.classList.remove('is-active')
        }
    })
}