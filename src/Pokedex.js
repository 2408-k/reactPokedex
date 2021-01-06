import React, { Component } from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard';
class Pokedex extends Component {
   
    render() {
      return <div className="Pokedex"> 
      <div className="Pokedex-cards">
      {this.props.pokemon.map((p)=>(
          <Pokecard name={p.name} id={p.id} type={p.type} level={p.base_experience}/>
        ))}
        </div>
        <h1 className="Heading">Total exp is {this.props.exp}</h1>
        <h1 className="Heading">{this.props.result}</h1>
         </div>
    }
}

export default Pokedex;