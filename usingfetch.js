/* fetch("https://swapi.dev/api/planets/")
.then((response)=>{
    if (!response.ok) {
        throw new Error(`Status Code Error: ${response.status}`)
    }
    return response.json()
})
.then((data)=>{             //data of first 10 planets
    const filmlUrl = data.results[0].films[0]  //then begin fetch of first film on first planet
    return fetch(filmlUrl)
})
.then((response)=>{
    if (!response.ok) {
        throw new Error(`Status Code Error: ${response.status}`)
    }
    return response.json()

})
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log('There was an error')
    console.log(err)
}) */

//Refactored Fetch Request
const checkStatusAndParse = (response) => {
    if (!response.ok) {
        throw new Error(`Status Code Error: ${response.status}`)
    }
    return response.json()
}
const printPlanets = (data) => {
    for (const planet of data.results) {
        console.log(planet.name)
    }
    return Promise.resolve(data.next)
}
const fetchPlanets = (url) => {
    return fetch(url)
}
fetch("https://swapi.dev/api/planets/")
.then(checkStatusAndParse)
.then(printPlanets) //data of first 10 planets and printing them 
.then(fetchPlanets)  
.then(checkStatusAndParse)
.then(printPlanets)
.then(fetchPlanets)  
.then(checkStatusAndParse)
.then(printPlanets)
.catch((err)=>{
    console.log('There was an error')
    console.log(err)
}) 