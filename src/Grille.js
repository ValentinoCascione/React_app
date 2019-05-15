import React, { Component } from 'react';

class Grille extends Component {
    constructor(props) {
        super(props)
        this.state = {
            divs: [],
            styleDivs: null,
            div210: 'yo'
            
        }
        
    }

    onClick() {
        this.setState({
            styleDivs: {
                backgroundColor: 'red'
            }
        })
    }

    render() {
            return (
                <div onClick={() => this.onClick()} style={this.state.styleDivs} className={`divs div${this.props.class}`}></div>             
            )
        
    }

}


export default Grille;