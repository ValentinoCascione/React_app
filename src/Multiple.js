import React, { Component } from 'react';
import Grille from './Grille.js';

class Multiple extends Component {
    render() {
        let rows= [];
        for  ( let i=1; i<442; i++) {
            rows.push(<Grille key={i} class={i}/>)
        }
    
            return (
                <div className='divAll'>{rows}</div>
            )
    }

}


export default Multiple;