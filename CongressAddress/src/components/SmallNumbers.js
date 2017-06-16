import React, { Component } from 'react';
import '../css/App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            number: '0',
        };
    }

    getNine = () => {
        this.setState({number: '9'});
    };

    getSix = () => {
        this.setState({number: '6'});
    };

    render() {
        return (
            <div className="App" id="SmallNumbers">
                <p className="App-intro">
                    Nine: {this.state.number}
                </p>

                <button onClick={this.getNine} className="elf">Get Nine</button>
                <button onClick={this.getSix} className="elf">Get Six</button>
                <br/>
                <br/>
            </div>
        );
    }
}

export default App;
