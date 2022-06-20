/* 
Sequential Requests
async function get3Pokemon() {
    const pokee1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1')
    const pokee2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2')
    const pokee3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3')
    console.log(pokee1.data)
    console.log(pokee2.data)
    console.log(pokee3.data)
}

get3Pokemon() */

//Parallel Requests 
/* async function get3Pokemon() {
    const pokee1 = axios.get('https://pokeapi.co/api/v2/pokemon/1') // this is a promise not resolved yet
    const pokee2 = axios.get('https://pokeapi.co/api/v2/pokemon/2')
    const pokee3 = axios.get('https://pokeapi.co/api/v2/pokemon/3')

    const pokee1Resolved = await pokee1
    const pokee2Resolved = await pokee2
    const pokee3Resolved = await pokee3
    
    

    console.log(pokee1Resolved.data)
    console.log(pokee2Resolved.data)
    console.log(pokee3Resolved.data)
}

get3Pokemon() */


//Using Promise.all
async function get3Pokemon() {
    const pokee1 = axios.get('https://pokeapi.co/api/v2/pokemon/1') // this is a promise not resolved yet
    const pokee2 = axios.get('https://pokeapi.co/api/v2/pokemon/2')
    const pokee3 = axios.get('https://pokeapi.co/api/v2/pokemon/3')

    const results = await Promise.all([pokee1,pokee2,pokee3])
    printPokemon(results)
}

function printPokemon(results) {
    for (let pokemon of results) {
        console.log(pokemon.data.name)
    }
}

get3Pokemon()