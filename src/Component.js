import React, {Component} from 'react';
import compte1 from './compte1.png';
import compte2 from './compte2.png';
import compte3 from './compte3.png';

class Harbourg extends Component {
    constructor() {
        super()
        this.state = {
            showMe: false,
            showMe2: false,
            showMe3: false
        }
    }
    

    onClick() {
        this.setState({
            showMe: true,
            showMe2: false,
            showMe3: false
        })
    }

    onClick2() {
        this.setState({
            showMe2: true,
            showMe: false,
            showMe3: false
        })
    }

    onClick3() {
        this.setState({
            showMe3: true,
            showMe2: false,
            showMe: false
        })
    }

render() {
        return (
            <div>

                <div><h1>Quelle est la redirection?</h1></div>

                <div className="buttons">

                    <div className='columnButton'>
                        <button
                        className='btn btn-dark'
                        onClick={() => this.onClick()}
                        >90° Horaire
                        </button>   
                    
                        <button
                        className='btn btn-dark'
                        onClick={() => this.onClick()}
                        >270° Contre Horaire
                        </button>

                        <button
                        className='btn btn-dark'
                        onClick={() => this.onClick()}
                        >Horaire 1Pi/2
                        </button>

                        <button
                        className='btn btn-dark'
                        onClick={() => this.onClick()}
                        >Contre Horaire 3Pi/2
                        </button>

                        <button
                        className='btn btn-dark'
                        onClick={() => this.onClick()}
                        >Horaire 2Pi/4
                        </button>

                        <button
                        className='btn btn-dark'
                        onClick={() => this.onClick()}
                        >Contre Horaire 6Pi/4
                        </button>
                    </div>

                    <div className='columnButton'>
                        <button
                        className='btn btn-primary'
                        onClick={() => this.onClick2()}
                        >180° Horaire
                        </button>

                        <button
                        className='btn btn-primary'
                        onClick={() => this.onClick2()}
                        >180° Contre Horaire
                        </button>

                        <button
                        className='btn btn-primary'
                        onClick={() => this.onClick2()}
                        >Horaire 2Pi/2
                        </button>

                        <button
                        className='btn btn-primary'
                        onClick={() => this.onClick2()}
                        >Horaire 4Pi/4
                        </button>

                        <button
                        className='btn btn-primary'
                        onClick={() => this.onClick2()}
                        >Contre Horaire 2Pi/2
                        </button>

                        <button
                        className='btn btn-primary'
                        onClick={() => this.onClick2()}
                        >Contre Horaire 4Pi/4
                        </button>
                    </div>

                    <div className='columnButton'>
                        <button
                        className='btn btn-success'
                        onClick={() => this.onClick3()}
                        >90° Contre Horaire
                        </button>

                        <button
                        className='btn btn-success'
                        onClick={() => this.onClick3()}
                        >270° Horaire
                        </button>

                        <button
                        className='btn btn-success'
                        onClick={() => this.onClick3()}
                        >Contre Horaire 1Pi/2
                        </button>

                        <button
                        className='btn btn-success'
                        onClick={() => this.onClick3()}
                        >Horaire 3Pi/2
                        </button>

                        <button
                        className='btn btn-success'
                        onClick={() => this.onClick3()}
                        >Contre Horaire 2Pi/4
                        </button>

                        <button
                        className='btn btn-success'
                        onClick={() => this.onClick3()}
                        >Horaire 6Pi/4
                        </button>
                    </div>

                </div>

                <div className='renderImg'>
                    {
                        this.state.showMe?
                        <img src={compte1} className='img1'/> 
                        :null
                    }

                    {
                        this.state.showMe2?
                        <img src={compte2} className='img1'/> 
                        :null
                    }

                    {
                        this.state.showMe3?
                        <img src={compte3} className='img1'/> 
                        :null
                    }
                </div>

            </div>
        )
    }
}

export default Harbourg;