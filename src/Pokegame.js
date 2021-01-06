import React,{Component} from 'react';
import Pokedex from './Pokedex.js';
import './Pokegame.css';
class Pokegame extends Component{
    static defaultProps= {pokemon :[
        {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
        {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
        {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
        {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
        {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
        {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
        {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
        {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
       ]};
   
    render()
    {
        let hand1=[];
        let hand2=[...this.props.pokemon];
        while(hand1.length<hand2.length)
        {
            let ind=Math.floor(Math.random()*hand2.length);
            let rem=hand2.splice(ind,1)[0];
            hand1.push(rem);
        }
        let sum1=0,sum2=0;
        for(let i=0;i<4;i++)
        {
            sum1=sum1+hand1[i].base_experience;
            sum2=sum2+hand2[i].base_experience;
        }
        let win1,win2;
        if(sum1>sum2)
        {
            win1="You win";win2="You loose";
        }
        else{
            win1="You loose";
            win2="You win";
        }
        return <div>
            <h1 className="heading">Hand 1</h1>
            <Pokedex pokemon={hand1} exp={sum1} result={win1} />
            <h1 className="heading">Hand 2 </h1>
            <Pokedex pokemon={hand2} exp={sum2} result={win2}/>
        </div>;
    }
}

export default Pokegame;