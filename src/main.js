import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import {SQUIRREL, MOOSE, MOOFASA, KISS, ELEPHANT, DRAGON, say}from 'cowsay';

import './style/app.scss';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'I am trying to find a nut',
      cow: SQUIRREL,
    };
    this.handleClick = this.handleClick.bind(this);
    this.newAnimal = this.newAnimal.bind(this);
  }
  
  handleClick() {
    this.setState({
      content: faker.hacker.phrase(),
    });
  }

  newAnimal(event) {
    if (event.target.value === 'squirrel'){
      this.setState({cow: SQUIRREL});
    }
    if(event.target.value === 'moose') {
      this.setState({cow: MOOSE});
    }
    if(event.target.value === 'moofasa') {
      this.setState({cow: MOOFASA});
    }
    if(event.target.value === 'kiss') {
      this.setState({cow: KISS});
    }
    if(event.target.value === 'elephant'){
      this.setState({cow: ELEPHANT});
    }
    if(event.target.value === 'dragon') {
      this.setState({cow: DRAGON});
    }

  }

  render() {
    return (
      <Fragment>
        <h1>Talking Things</h1>
        <button onClick={this.handleClick}>click me, I change the quote.</button>
        <select onChange={this.newAnimal}>
          <option value="squirrel">Talking Squirrel</option>
          <option value="moose">Talking Moose</option>
          <option value="moofasa">Talking Moofasa</option>
          <option value="kiss">Talking Kiss</option>
          <option value="elephant">Talking Elephant</option>
          <option value="dragon">Drogon</option>
        </select>
        <pre>{say({ text: this.state.content, cow: this.state.cow})}</pre>
      </Fragment>
    );
  }
}


ReactDom.render(<App/>, document.getElementById('root'));