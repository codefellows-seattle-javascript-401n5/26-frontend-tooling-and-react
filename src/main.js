import React from 'react';
import ReactDOM from 'react-dom';
import {say} from 'cowsay';

const faker = require('faker')

import './style/app.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
        };
        this.cowsay = this.cowsay.bind(this);
    }
    cowsay(){
        let content = say({
            text: faker.hacker.phrase()
        })
        this.setState({content})
     }
    render(){
        return(
        <React.Fragment>
            
            <h1> Generate Cowsay Lorem </h1>
            <button onClick={this.cowsay}>Click Me</button>
            <pre>{this.state.content}</pre>
        </React.Fragment>

    )}
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);