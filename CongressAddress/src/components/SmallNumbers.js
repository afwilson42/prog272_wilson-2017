import React, { Component } from 'react';
import '../css/App.css';


class App extends Component {
    constructor(){
        super();
        this.state = {
            nine: '0',
        }
    }

    getNine = () => {
        this.setState({nine: '9'});
    }



    render() {
        return (
            <div className="App" id="SmallNumbers">
                <p className="App-intro">
                    Nine: {this.state.nine}
                </p>

                <button onClick={this.getNine} className="elf">Get Nine</button>
                <br/>
                <br/>
            </div>
        );
    }
}

export default App;
