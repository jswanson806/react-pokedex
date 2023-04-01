import React from "react";
import "./Pokedex.css"
import Pokecard from "./Pokecard";

const Pokedex = (props) => {
    const finalProps = {...props}
    return(
        <div className="Pokedex">
            <Pokecard id={finalProps.id} name={finalProps.name} type={finalProps.type} base_experience={finalProps.base_experience}/>
        </div>
    )
}


  export default Pokedex;