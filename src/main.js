
import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import {say} from 'cowsay';

import './style/app.scss';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'I am a cow',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState({content: faker.hacker.phrase()});
  }

  render() {
    return (
      <Fragment>
        <h1>Talking Cow</h1>
        <button onClick={this.handleClick}>click me</button>
        <pre>{say({ text: this.state.content})}</pre>
      </Fragment>
    );
  }
}


ReactDom.render(<App/>, document.getElementById('talkingCow'));