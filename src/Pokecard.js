import React, { Component } from 'react';
import './Pokecard.css';
const poke_api="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
let toThree=(num)=> {return num<=999?`00${num}`.slice(-3):num};
class Pokecard extends Component {
    render() {
        let imgsrc=`${poke_api}${toThree(this.props.id)}.png`
        return <div className="Pokecard">
              <h1 > {this.props.name} </h1>
              <div className="Poke-image"><img src={imgsrc}/></div>
               <div>Type : {this.props.type}</div>
               <div>Exp: {this.props.level} </div>
               </div>;
    }
}

export default Pokecard;