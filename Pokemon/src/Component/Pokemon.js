import React,{useState} from 'react' 
import axios from 'axios' 
const Pokemon =()=>{ 
    const [pokName,setPokname] =useState("") 
    const [pokemon,setPokemon]= useState({ 
        name:"", 
        species:"", 
        img:"", 
        attack:"", 
        type:"", 
    }) 
    const fetchPokemon =()=>{ 
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokName}`) 
        .then((res)=>{ 
            setPokemon({ 
                name:pokName, 
                species:res.data.species.name, 
                img:res.data.sprites.front_default, 
                attack:res.data.stats[1].base_stat, 
                type:res.data.types[0].type.name, 
            }) 
            console.log(res) 
        }) 
        .catch(()=>{ 
            console.log("you enter wrong name") 
        }) 
    } 
 
    return ( 
        <> 
            <div className='searchArea'> 
                <input className='search' 
                type="text" 
                onChange={(event)=>{ 
                    setPokname(event.target.value) 
                }} /> 
                <button onClick={ fetchPokemon}>Search</button> 
            </div> 
 
            <div className = "resultCard"> 
                <div className="card"> 
                    <h1>{pokemon.name}</h1> 
                    <img src ={pokemon.img}></img> 
                    <p>{pokemon.species}</p> 
                    <h3>{pokemon.attack}</h3> 
                    <h4>pokemon.defense</h4> 
                    <p>{pokemon.type}</p> 
                </div> 
            </div> 
        </> 
    ) 
} 
export default Pokemon