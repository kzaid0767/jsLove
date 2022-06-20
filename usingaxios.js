// no need to do json parsing axios does this for us
const fetchNextPlanet = (url) =>{
    return axios.get(url)
}

const printPlanets = ({data})=>{
    console.log(data)
    for (const planet of data.results) {
        console.log(planet.name)
    }
    return Promise.resolve(data.next)
}
axios.get('https://swapi.dev/api/planets/')
.then(printPlanets)
.then(fetchNextPlanet)
.the(printPlanets)
.catch((err)=>{
    console.log(err)
})

